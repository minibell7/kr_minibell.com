'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './page.module.css';
import {
    createBoard,
    getRandomTetromino,
    rotate,
    checkCollision,
    clearLines,
    COLS,
    ROWS,
    Tetromino,
    Board
} from '@/lib/neon-blocks';

export default function BlocksClient() {
    const [board, setBoard] = useState<Board>(createBoard());
    const [currentPiece, setCurrentPiece] = useState<{ shape: number[][], x: number, y: number, color: string } | null>(null);
    const [nextPiece, setNextPiece] = useState<Tetromino | null>(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [level, setLevel] = useState(1);

    const requestRef = useRef<number | null>(null);
    const lastTimeRef = useRef<number | null>(null);
    const dropCounterRef = useRef(0);
    const dropIntervalRef = useRef(1000);

    const spawnPiece = useCallback(() => {
        const piece = nextPiece || getRandomTetromino();
        const next = getRandomTetromino();
        setNextPiece(next);

        const newPiece = {
            shape: piece.shape,
            x: Math.floor(COLS / 2) - Math.floor(piece.shape[0].length / 2),
            y: 0,
            color: piece.color
        };

        if (checkCollision(board, newPiece.shape, newPiece.x, newPiece.y)) {
            setGameOver(true);
            setIsPlaying(false);
        } else {
            setCurrentPiece(newPiece);
        }
    }, [board, nextPiece]);

    const drop = useCallback(() => {
        if (!currentPiece || gameOver) return;

        if (!checkCollision(board, currentPiece.shape, currentPiece.x, currentPiece.y + 1)) {
            setCurrentPiece(prev => prev ? { ...prev, y: prev.y + 1 } : null);
        } else {
            // Lock piece
            const newBoard = board.map(row => [...row]);
            currentPiece.shape.forEach((row, r) => {
                row.forEach((val, c) => {
                    if (val) {
                        const by = currentPiece.y + r;
                        const bx = currentPiece.x + c;
                        if (by >= 0 && by < ROWS && bx >= 0 && bx < COLS) {
                            newBoard[by][bx] = currentPiece.color;
                        }
                    }
                });
            });

            const { newBoard: clearedBoard, linesCleared } = clearLines(newBoard);

            if (linesCleared > 0) {
                setScore(prevScore => {
                    const newScore = prevScore + (linesCleared * 100 * level);
                    // Level up every 1000 points
                    const newLevel = Math.floor(newScore / 1000) + 1;
                    setLevel(newLevel);
                    dropIntervalRef.current = Math.max(100, 1000 - (newLevel * 50));
                    return newScore;
                });
            }

            setBoard(clearedBoard);
            spawnPiece();
        }
    }, [board, currentPiece, gameOver, level, spawnPiece]);

    const move = (dir: number) => {
        if (!currentPiece || gameOver || !isPlaying) return;
        if (!checkCollision(board, currentPiece.shape, currentPiece.x + dir, currentPiece.y)) {
            setCurrentPiece(prev => prev ? { ...prev, x: prev.x + dir } : null);
        }
    };

    const rotatePiece = () => {
        if (!currentPiece || gameOver || !isPlaying) return;
        const rotated = rotate(currentPiece.shape);
        if (!checkCollision(board, rotated, currentPiece.x, currentPiece.y)) {
            setCurrentPiece(prev => prev ? { ...prev, shape: rotated } : null);
        }
    };

    const startGame = () => {
        setBoard(createBoard());
        setScore(0);
        setLevel(1);
        setGameOver(false);
        setIsPlaying(true);
        setNextPiece(getRandomTetromino());
        dropIntervalRef.current = 1000;
        spawnPiece();
    };

    const dropRef = useRef(drop);
    useEffect(() => {
        dropRef.current = drop;
    }, [drop]);

    const update = useCallback((time: number) => {
        if (!isPlaying || gameOver) return;

        if (!lastTimeRef.current) lastTimeRef.current = time;
        const deltaTime = time - lastTimeRef.current;
        lastTimeRef.current = time;

        dropCounterRef.current += deltaTime;
        if (dropCounterRef.current > dropIntervalRef.current) {
            dropRef.current();
            dropCounterRef.current = 0;
        }

        requestRef.current = requestAnimationFrame(update);
    }, [isPlaying, gameOver]);

    useEffect(() => {
        if (isPlaying && !gameOver) {
            requestRef.current = requestAnimationFrame(update);
        }
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [isPlaying, gameOver, update]);

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isPlaying || gameOver) return;

            switch (e.key) {
                case 'ArrowLeft': move(-1); break;
                case 'ArrowRight': move(1); break;
                case 'ArrowDown': drop(); break;
                case 'ArrowUp': rotatePiece(); break;
                case ' ': rotatePiece(); break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isPlaying, gameOver, currentPiece, board]); // Dependencies for closure

    // Render helper
    const renderCell = (x: number, y: number) => {
        let color = board[y][x];
        let isGhost = false;

        // Render active piece
        if (currentPiece) {
            const r = y - currentPiece.y;
            const c = x - currentPiece.x;
            if (r >= 0 && r < currentPiece.shape.length &&
                c >= 0 && c < currentPiece.shape[r].length &&
                currentPiece.shape[r][c]) {
                color = currentPiece.color;
            }
        }

        return (
            <div
                key={`${x}-${y}`}
                className={`${styles.cell} ${color ? styles.filled : ''} ${color ? styles[color] : ''}`}
            />
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>NEON BLOCKS</h1>
            </div>

            <div className={styles.gameArea}>
                <div className={styles.board}>
                    {board.map((row, y) => row.map((_, x) => renderCell(x, y)))}
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.panel}>
                        <div className={styles.panelTitle}>Score</div>
                        <div className={styles.score}>{score}</div>
                    </div>

                    <div className={styles.panel}>
                        <div className={styles.panelTitle}>Level</div>
                        <div className={styles.score}>{level}</div>
                    </div>

                    <div className={styles.panel}>
                        <div className={styles.panelTitle}>Next</div>
                        <div className={styles.nextPiece}>
                            {nextPiece && nextPiece.shape.map((row, r) => (
                                row.map((val, c) => (
                                    <div
                                        key={`${r}-${c}`}
                                        className={`${styles.miniCell} ${val ? styles.filled : ''} ${val ? styles[nextPiece.color] : ''}`}
                                    />
                                ))
                            ))}
                        </div>
                    </div>

                    {!isPlaying && (
                        <button className={styles.startBtn} onClick={startGame}>
                            {gameOver ? 'Try Again' : 'Start Game'}
                        </button>
                    )}

                    {/* Desktop Controls */}
                    <div className={styles.desktopControls}>
                        <button className={styles.controlBtn} onClick={() => move(-1)}>←</button>
                        <button className={styles.controlBtn} onClick={rotatePiece}>↻</button>
                        <button className={styles.controlBtn} onClick={() => move(1)}>→</button>
                        <button className={styles.controlBtn} style={{ gridColumn: '1/-1' }} onClick={drop}>↓</button>
                    </div>
                </div>
            </div>

            {/* Mobile Controls - Fixed Position */}
            <div className={styles.mobileControls}>
                <button className={styles.controlBtn} onClick={() => move(-1)}>←</button>
                <button className={styles.controlBtn} onClick={rotatePiece}>↻</button>
                <button className={styles.controlBtn} onClick={() => move(1)}>→</button>
                <button className={styles.controlBtn} style={{ gridColumn: '1/-1' }} onClick={drop}>↓</button>
            </div>

            {gameOver && (
                <div className={styles.gameOver}>
                    <h2 style={{ color: '#ff0055', fontSize: '2rem' }}>GAME OVER</h2>
                    <p style={{ color: '#fff', fontSize: '1.5rem' }}>Score: {score}</p>
                    <button className={styles.startBtn} onClick={startGame} style={{ marginTop: '1rem' }}>
                        Replay
                    </button>
                </div>
            )}
        </div>
    );
}
