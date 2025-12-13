'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './SudokuClient.module.css';
import { generateSudoku, Difficulty, Board, isValid } from './sudokuUtils';

const BLANK = null;

export default function SudokuClient() {
    const [difficulty, setDifficulty] = useState<Difficulty>('Easy');
    const [initialBoard, setInitialBoard] = useState<Board>([]);
    const [board, setBoard] = useState<Board>([]);
    const [solvedBoard, setSolvedBoard] = useState<Board>([]);
    const [selectedCell, setSelectedCell] = useState<{ r: number; c: number } | null>(null);
    const [mistakes, setMistakes] = useState(0);
    const [timer, setTimer] = useState(0);
    const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');
    const [history, setHistory] = useState<Board[]>([]); // Simplified history for Undo

    // Initialize Game
    const startNewGame = useCallback((diff: Difficulty = difficulty) => {
        const { initial, solved } = generateSudoku(diff);
        setInitialBoard(initial.map(row => [...row]));
        setBoard(initial.map(row => [...row]));
        setSolvedBoard(solved);
        setMistakes(0);
        setTimer(0);
        setStatus('playing');
        setSelectedCell(null);
        setHistory([]);
    }, [difficulty]);

    useEffect(() => {
        startNewGame(difficulty);
    }, []); // Run once on mount

    // Timer
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (status === 'playing') {
            interval = setInterval(() => {
                setTimer(t => t + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [status]);

    // Handle Cell Click
    const handleCellClick = (r: number, c: number) => {
        if (status !== 'playing') return;
        setSelectedCell({ r, c });
    };

    // Handle Input
    const handleNumberInput = (num: number) => {
        if (status !== 'playing' || !selectedCell) return;
        const { r, c } = selectedCell;

        // Cannot edit initial cells
        if (initialBoard[r][c] !== BLANK) return;

        // Check if correct (Instant feedback mode common in apps)
        if (solvedBoard[r][c] === num) {
            const newBoard = board.map(row => [...row]);
            newBoard[r][c] = num;
            setBoard(newBoard);

            // Check Win Condition
            let isFull = true;
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (newBoard[i][j] === BLANK) {
                        isFull = false;
                        break;
                    }
                }
            }
            if (isFull) setStatus('won');

        } else {
            // Mistake
            setMistakes(m => {
                const newMistakes = m + 1;
                if (newMistakes >= 3) setStatus('lost');
                return newMistakes;
            });
            // Optional: Visually show error momentarily or keep it logic-based
        }
    };

    // Helper functions for classes
    const getCellClass = (r: number, c: number) => {
        let classes = [styles.cell];
        const val = board[r][c];

        if (initialBoard[r][c] !== BLANK) classes.push(styles.initial);
        else if (val !== BLANK) classes.push(styles.userInput);

        if (selectedCell?.r === r && selectedCell?.c === c) classes.push(styles.selected);

        // Highlight same numbers
        if (selectedCell && val !== BLANK && val === board[selectedCell.r][selectedCell.c]) {
            classes.push(styles.sameNumber);
        }

        // Highlight row/col/box (optional, adding light highlight)
        if (selectedCell) {
            if (selectedCell.r === r || selectedCell.c === c) classes.push(styles.highlighted);
        }

        return classes.join(' ');
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (status !== 'playing') return;

            // Numbers 1-9
            if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
                handleNumberInput(parseInt(e.key));
            }

            // Arrows
            if (!selectedCell) return;
            let { r, c } = selectedCell;
            if (e.key === 'ArrowUp') r = Math.max(0, r - 1);
            if (e.key === 'ArrowDown') r = Math.min(8, r + 1);
            if (e.key === 'ArrowLeft') c = Math.max(0, c - 1);
            if (e.key === 'ArrowRight') c = Math.min(8, c + 1);
            setSelectedCell({ r, c });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedCell, status, board]); // Deps might need tuning for performance, but safe basics

    if (board.length === 0) return <div>Loading Neon Grid...</div>;

    return (
        <div className={styles.gameContainer}>
            <div className={styles.header}>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>DIFFICULTY</span>
                    <span className={styles.statValue}>{difficulty}</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>MISTAKES</span>
                    <span className={styles.statValue} style={{ color: mistakes >= 2 ? '#ff0055' : '#fff' }}>
                        {mistakes}/3
                    </span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>TIME</span>
                    <span className={styles.statValue}>{formatTime(timer)}</span>
                </div>
            </div>

            <div className={styles.difficultySelector}>
                {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map(d => (
                    <button
                        key={d}
                        className={`${styles.difficultyBtn} ${difficulty === d ? styles.active : ''}`}
                        onClick={() => { setDifficulty(d); startNewGame(d); }}
                    >
                        {d}
                    </button>
                ))}
            </div>

            <div className={styles.board} onMouseLeave={() => setSelectedCell(null)}>
                {board.map((row, r) => (
                    row.map((val, c) => (
                        <div
                            key={`${r}-${c}`}
                            className={getCellClass(r, c)}
                            onClick={() => handleCellClick(r, c)}
                        >
                            {val}
                        </div>
                    ))
                ))}
            </div>

            <div className={styles.keypad}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                    <button
                        key={num}
                        className={styles.numBtn}
                        onClick={() => handleNumberInput(num)}
                    >
                        {num}
                    </button>
                ))}
            </div>

            <div className={styles.controls}>
                <button className={styles.actionBtn} onClick={() => startNewGame()}>NEW GAME</button>
            </div>

            {status !== 'playing' && (
                <div className={styles.gameOverOverlay}>
                    {status === 'won' ? (
                        <>
                            <h2 style={{ color: '#00ffff' }}>MISSION ACCOMPLISHED</h2>
                            <p>All systems operational.</p>
                        </>
                    ) : (
                        <>
                            <h2 style={{ color: '#ff0055' }}>SYSTEM FAILURE</h2>
                            <p>Too many errors detected.</p>
                        </>
                    )}
                    <button
                        className={styles.actionBtn}
                        style={{ marginTop: '1rem' }}
                        onClick={() => startNewGame()}
                    >
                        REBOOT SYSTEM
                    </button>
                </div>
            )}
        </div>
    );
}
