export const COLS = 10;
export const ROWS = 20;

export type TetrominoType = 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';

export type Tetromino = {
    shape: number[][];
    color: string;
    type: TetrominoType;
};

export const TETROMINOES: Record<TetrominoType, Tetromino> = {
    I: { shape: [[1, 1, 1, 1]], color: 'cyan', type: 'I' },
    J: { shape: [[1, 0, 0], [1, 1, 1]], color: 'blue', type: 'J' },
    L: { shape: [[0, 0, 1], [1, 1, 1]], color: 'orange', type: 'L' },
    O: { shape: [[1, 1], [1, 1]], color: 'yellow', type: 'O' },
    S: { shape: [[0, 1, 1], [1, 1, 0]], color: 'green', type: 'S' },
    T: { shape: [[0, 1, 0], [1, 1, 1]], color: 'purple', type: 'T' },
    Z: { shape: [[1, 1, 0], [0, 1, 1]], color: 'red', type: 'Z' },
};

export type Board = (string | null)[][];

export function createBoard(): Board {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
}

export function getRandomTetromino(): Tetromino {
    const types = Object.keys(TETROMINOES) as TetrominoType[];
    const type = types[Math.floor(Math.random() * types.length)];
    return TETROMINOES[type];
}

export function rotate(matrix: number[][]): number[][] {
    return matrix[0].map((_, index) => matrix.map(row => row[index]).reverse());
}

export function checkCollision(board: Board, shape: number[][], x: number, y: number): boolean {
    for (let r = 0; r < shape.length; r++) {
        for (let c = 0; c < shape[r].length; c++) {
            if (shape[r][c]) {
                const newX = x + c;
                const newY = y + r;
                if (
                    newX < 0 ||
                    newX >= COLS ||
                    newY >= ROWS ||
                    (newY >= 0 && board[newY][newX])
                ) {
                    return true;
                }
            }
        }
    }
    return false;
}

export function clearLines(board: Board): { newBoard: Board; linesCleared: number } {
    let linesCleared = 0;
    const newBoard = board.filter(row => {
        if (row.every(cell => cell !== null)) {
            linesCleared++;
            return false;
        }
        return true;
    });

    while (newBoard.length < ROWS) {
        newBoard.unshift(Array(COLS).fill(null));
    }

    return { newBoard, linesCleared };
}
