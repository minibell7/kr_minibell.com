'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './page.module.css';
import { createBoard, revealCell, toggleFlag, CellState, GameState, DIFFICULTIES, Difficulty } from '@/lib/minesweeper';

export default function MinesweeperClient() {
    const [difficulty, setDifficulty] = useState<keyof typeof DIFFICULTIES>('EASY');
    const [board, setBoard] = useState<CellState[][]>([]);
    const [gameState, setGameState] = useState<GameState>('playing');
    const [minesLeft, setMinesLeft] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const initGame = useCallback((diffKey: keyof typeof DIFFICULTIES) => {
        const diff = DIFFICULTIES[diffKey];
        const newBoard = createBoard(diff.rows, diff.cols, diff.mines);
        setBoard(newBoard);
        setGameState('playing');
        setMinesLeft(diff.mines);
        setTimer(0);
        setIsTimerRunning(false);
    }, []);

    useEffect(() => {
        initGame(difficulty);
    }, [difficulty, initGame]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerRunning && gameState === 'playing') {
            interval = setInterval(() => {
                setTimer(prev => Math.min(prev + 1, 999));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, gameState]);

    const handleCellClick = (x: number, y: number) => {
        if (gameState !== 'playing') return;
        if (!isTimerRunning) setIsTimerRunning(true);

        const { board: newBoard, gameState: newGameState } = revealCell(board, x, y);
        setBoard(newBoard);
        setGameState(newGameState);

        if (newGameState !== 'playing') setIsTimerRunning(false);
    };

    const handleRightClick = (e: React.MouseEvent, x: number, y: number) => {
        e.preventDefault();
        if (gameState !== 'playing') return;
        if (!isTimerRunning) setIsTimerRunning(true);

        const newBoard = toggleFlag(board, x, y);
        setBoard(newBoard);

        // Update mine count
        const flags = newBoard.flat().filter(c => c.isFlagged).length;
        setMinesLeft(DIFFICULTIES[difficulty].mines - flags);
    };

    const getCellContent = (cell: CellState) => {
        if (cell.isFlagged) return '🚩';
        if (!cell.isRevealed) return '';
        if (cell.isMine) return '💣';
        if (cell.neighborMines > 0) return cell.neighborMines;
        return '';
    };

    const getCellClass = (cell: CellState) => {
        if (!cell.isRevealed) return `${styles.cell} ${styles.hidden} ${cell.isFlagged ? styles.flagged : ''}`;
        if (cell.isMine) return `${styles.cell} ${styles.revealed} ${styles.mine}`;
        return `${styles.cell} ${styles.revealed} ${styles['val' + cell.neighborMines]}`;
    };

    const getDiffName = (diff: string) => {
        switch (diff) {
            case 'EASY': return '초급';
            case 'MEDIUM': return '중급';
            case 'HARD': return '상급';
            default: return diff;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>NEON SWEEPER</h1>
                <div className={styles.controls}>
                    {(Object.keys(DIFFICULTIES) as Array<keyof typeof DIFFICULTIES>).map((diff) => (
                        <button
                            key={diff}
                            className={`${styles.difficultyBtn} ${difficulty === diff ? styles.active : ''}`}
                            onClick={() => setDifficulty(diff)}
                        >
                            {getDiffName(diff)}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.gameBoard}>
                <div className={styles.stats}>
                    <span>{String(minesLeft).padStart(3, '0')}</span>
                    <button className={styles.resetBtn} onClick={() => initGame(difficulty)}>
                        {gameState === 'playing' ? '😎' : gameState === 'won' ? '🎉' : '😵'}
                    </button>
                    <span>{String(timer).padStart(3, '0')}</span>
                </div>

                <div
                    className={styles.grid}
                    style={{
                        gridTemplateColumns: `repeat(${DIFFICULTIES[difficulty].cols}, 1fr)`
                    }}
                >
                    {board.map((row, y) => (
                        row.map((cell, x) => (
                            <div
                                key={`${x}-${y}`}
                                className={getCellClass(cell)}
                                onClick={() => handleCellClick(x, y)}
                                onContextMenu={(e) => handleRightClick(e, x, y)}
                            >
                                {getCellContent(cell)}
                            </div>
                        ))
                    ))}
                </div>
            </div>
            {gameState === 'won' && (
                <div className={styles.victoryOverlay}>
                    <h2 className={styles.victoryTitle}>미션 성공!</h2>
                    <span className={styles.victoryEmoji}>💐</span>
                    <p style={{ color: '#fff', marginBottom: '1rem' }}>기록: {timer}초</p>
                    <button className={styles.restartBtn} onClick={() => initGame(difficulty)}>
                        다시 하기
                    </button>
                </div>
            )}
            {gameState === 'lost' && (
                <div className={styles.victoryOverlay} style={{ background: 'rgba(50,0,0,0.9)' }}>
                    <h2 className={styles.victoryTitle} style={{ color: '#ff3333' }}>폭발했습니다!</h2>
                    <span className={styles.victoryEmoji}>💥</span>
                    <button className={styles.restartBtn} onClick={() => initGame(difficulty)}>
                        재도전
                    </button>
                </div>
            )}
        </div>
    );
}
