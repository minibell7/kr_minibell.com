export type CellState = {
    x: number;
    y: number;
    isMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    neighborMines: number;
};

export type GameState = 'playing' | 'won' | 'lost';

export type Difficulty = {
    rows: number;
    cols: number;
    mines: number;
};

export const DIFFICULTIES: Record<string, Difficulty> = {
    EASY: { rows: 9, cols: 9, mines: 10 },
    MEDIUM: { rows: 16, cols: 16, mines: 40 },
    HARD: { rows: 16, cols: 30, mines: 99 },
};

export function createBoard(rows: number, cols: number, mines: number): CellState[][] {
    let board: CellState[][] = [];

    // Initialize empty board
    for (let y = 0; y < rows; y++) {
        let row: CellState[] = [];
        for (let x = 0; x < cols; x++) {
            row.push({
                x,
                y,
                isMine: false,
                isRevealed: false,
                isFlagged: false,
                neighborMines: 0,
            });
        }
        board.push(row);
    }

    // Place mines randomly
    let minesPlaced = 0;
    while (minesPlaced < mines) {
        const x = Math.floor(Math.random() * cols);
        const y = Math.floor(Math.random() * rows);

        if (!board[y][x].isMine) {
            board[y][x].isMine = true;
            minesPlaced++;
        }
    }

    // Calculate neighbor mines
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (board[y][x].isMine) continue;

            let count = 0;
            directions.forEach(([dx, dy]) => {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < cols && ny >= 0 && ny < rows && board[ny][nx].isMine) {
                    count++;
                }
            });
            board[y][x].neighborMines = count;
        }
    }

    return board;
}

export function revealCell(board: CellState[][], x: number, y: number): { board: CellState[][], gameState: GameState } {
    const rows = board.length;
    const cols = board[0].length;
    const cell = board[y][x];

    // If already revealed or flagged, do nothing
    if (cell.isRevealed || cell.isFlagged) {
        return { board, gameState: 'playing' };
    }

    // Deep copy board to avoid mutation issues
    const newBoard = board.map(row => row.map(c => ({ ...c })));
    const newCell = newBoard[y][x];

    // Hit a mine
    if (newCell.isMine) {
        newCell.isRevealed = true;
        // Reveal all mines
        newBoard.forEach(row => row.forEach(c => {
            if (c.isMine) c.isRevealed = true;
        }));
        return { board: newBoard, gameState: 'lost' };
    }

    // Reveal cell
    newCell.isRevealed = true;

    // Flood fill if empty
    if (newCell.neighborMines === 0) {
        const stack = [[x, y]];
        while (stack.length > 0) {
            const [cx, cy] = stack.pop()!;

            const directions = [
                [-1, -1], [-1, 0], [-1, 1],
                [0, -1], [0, 1],
                [1, -1], [1, 0], [1, 1]
            ];

            directions.forEach(([dx, dy]) => {
                const nx = cx + dx;
                const ny = cy + dy;

                if (nx >= 0 && nx < cols && ny >= 0 && ny < rows) {
                    const neighbor = newBoard[ny][nx];
                    if (!neighbor.isRevealed && !neighbor.isFlagged && !neighbor.isMine) {
                        neighbor.isRevealed = true;
                        if (neighbor.neighborMines === 0) {
                            stack.push([nx, ny]);
                        }
                    }
                }
            });
        }
    }

    // Check win condition
    let unrevealedSafeCells = 0;
    newBoard.forEach(row => row.forEach(c => {
        if (!c.isMine && !c.isRevealed) unrevealedSafeCells++;
    }));

    return {
        board: newBoard,
        gameState: unrevealedSafeCells === 0 ? 'won' : 'playing'
    };
}

export function toggleFlag(board: CellState[][], x: number, y: number): CellState[][] {
    const newBoard = board.map(row => row.map(c => ({ ...c })));
    if (!newBoard[y][x].isRevealed) {
        newBoard[y][x].isFlagged = !newBoard[y][x].isFlagged;
    }
    return newBoard;
}
