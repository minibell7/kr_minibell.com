'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';

const WORK_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

export default function PomodoroClient() {
    const [timeLeft, setTimeLeft] = useState(WORK_TIME);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState<'work' | 'break'>('work');
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(mode === 'work' ? WORK_TIME : BREAK_TIME);
    };

    const switchMode = (newMode: 'work' | 'break') => {
        setMode(newMode);
        setIsActive(false);
        setTimeLeft(newMode === 'work' ? WORK_TIME : BREAK_TIME);
    };

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            // Timer finished
            setIsActive(false);
            if (intervalRef.current) clearInterval(intervalRef.current);
            // Play sound (simple beep)
            const audio = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
            audio.play().catch(e => console.log('Audio play failed', e));
            alert(mode === 'work' ? 'Work session finished! Take a break.' : 'Break finished! Back to work.');
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isActive, timeLeft, mode]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const progress = mode === 'work'
        ? ((WORK_TIME - timeLeft) / WORK_TIME) * 100
        : ((BREAK_TIME - timeLeft) / BREAK_TIME) * 100;

    return (
        <div className={styles.container}>
            <div className={`${styles.timerCard} glass-panel ${mode === 'break' ? styles.breakMode : ''}`}>
                <div className={styles.modeTabs}>
                    <button
                        className={`${styles.modeBtn} ${mode === 'work' ? styles.activeMode : ''}`}
                        onClick={() => switchMode('work')}
                    >
                        Work (25m)
                    </button>
                    <button
                        className={`${styles.modeBtn} ${mode === 'break' ? styles.activeMode : ''}`}
                        onClick={() => switchMode('break')}
                    >
                        Break (5m)
                    </button>
                </div>

                <div className={styles.timeDisplay}>
                    {formatTime(timeLeft)}
                </div>

                <div className={styles.controls}>
                    <button
                        className={`${styles.controlBtn} ${isActive ? styles.pauseBtn : styles.startBtn}`}
                        onClick={toggleTimer}
                    >
                        {isActive ? 'Pause' : 'Start'}
                    </button>
                    <button
                        className={styles.resetBtn}
                        onClick={resetTimer}
                    >
                        Reset
                    </button>
                </div>

                {/* Progress Bar */}
                <div className={styles.progressContainer}>
                    <div
                        className={styles.progressBar}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
