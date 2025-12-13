export type Board = (number | null)[][];
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

const BLANK = null;

export function getEmptyBoard(): Board {
    return Array.from({ length: 9 }, () => Array(9).fill(BLANK));
}

export function isValid(board: Board, row: number, col: number, num: number): boolean {
    // Check row
    for (let x = 0; x < 9; x++) {
        if (board[row][x] === num && x !== col) return false;
    }

    // Check col
    for (let x = 0; x < 9; x++) {
        if (board[x][col] === num && x !== row) return false;
    }

    // Check 3x3 box
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num && (startRow + i !== row || startCol + j !== col)) {
                return false;
            }
        }
    }

    return true;
}

export function solveSudoku(board: Board, randomize = false): boolean {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === BLANK) {
                const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                if (randomize) {
                    nums.sort(() => Math.random() - 0.5);
                }

                for (const num of nums) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board, randomize)) return true;
                        board[row][col] = BLANK;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

export function generateSudoku(difficulty: Difficulty): { initial: Board; solved: Board } {
    // 1. Generate a complete solved board
    const solved = getEmptyBoard();
    solveSudoku(solved, true);

    // 2. Clone to create the puzzle
    const initial = solved.map(row => [...row]);

    // 3. Remove numbers based on difficulty
    let attempts = 0;
    let targetFilled = 0;

    switch (difficulty) {
        case 'Easy':
            targetFilled = 45; // Keep ~45 numbers
            attempts = 20;
            break;
        case 'Medium':
            targetFilled = 35; // Keep ~35 numbers
            attempts = 40;
            break;
        case 'Hard':
            targetFilled = 25; // Keep ~25 numbers
            attempts = 60;
            break;
    }

    // Simple removal strategy: remove random cells while maintaining symmetry or just random
    // For simplicity, just remove N cells randomly ensuring uniqueness isn't broken (optional for simple game)
    // A proper generator ensures unique solution. Here we will just remove cells.

    let cellsToRemove = 81 - targetFilled;

    while (cellsToRemove > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        if (initial[row][col] !== BLANK) {
            initial[row][col] = BLANK;
            cellsToRemove--;
        }
    }

    return { initial, solved };
}
