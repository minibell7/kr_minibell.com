'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function FastingClient() {
    const [isFasting, setIsFasting] = useState(false);
    const [startTime, setStartTime] = useState<number | null>(null);
    const [elapsed, setElapsed] = useState('00:00:00');
    const [progress, setProgress] = useState(0);

    // Load state from local storage on mount
    useEffect(() => {
        const storedStart = localStorage.getItem('fastingStartTime');
        if (storedStart) {
            const start = parseInt(storedStart, 10);
            setStartTime(start);
            setIsFasting(true);
        }
    }, []);

    // Timer loop
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isFasting && startTime) {
            interval = setInterval(() => {
                const now = Date.now();
                const diff = now - startTime;

                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                setElapsed(
                    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
                );

                // Calculate progress based on 16 hour goal
                const goalMillis = 16 * 60 * 60 * 1000;
                const percent = Math.min((diff / goalMillis) * 100, 100);
                setProgress(percent);

            }, 1000);
        } else {
            setElapsed('00:00:00');
            setProgress(0);
        }

        return () => clearInterval(interval);
    }, [isFasting, startTime]);

    const toggleFasting = () => {
        if (isFasting) {
            // End Fasting
            setIsFasting(false);
            setStartTime(null);
            localStorage.removeItem('fastingStartTime');
        } else {
            // Start Fasting
            const now = Date.now();
            setStartTime(now);
            setIsFasting(true);
            localStorage.setItem('fastingStartTime', now.toString());
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Intermittent Fasting Tracker</h1>
                <p className={styles.subtitle}>16:8 Timer</p>

                <div className={styles.timerContainer}>
                    {/* Circular Progress Background */}
                    <div className={styles.ringContainer}>
                        <svg className={styles.ring} viewBox="0 0 100 100">
                            <circle
                                className={styles.ringTrack}
                                cx="50"
                                cy="50"
                                r="45"
                            />
                            <circle
                                className={styles.ringProgress}
                                cx="50"
                                cy="50"
                                r="45"
                                strokeDasharray={`${progress * 2.83} 283`}
                                transform="rotate(-90 50 50)"
                            />
                        </svg>
                        <div className={styles.timerContent}>
                            <span className={styles.statusLabel}>
                                {isFasting ? 'FASTING TIME' : 'EATING WINDOW'}
                            </span>
                            <div className={styles.timeDisplay}>{elapsed}</div>
                            {isFasting && (
                                <span className={styles.goalLabel}>
                                    Goal: 16 Hours
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <button
                    className={`${styles.toggleBtn} ${isFasting ? styles.active : ''}`}
                    onClick={toggleFasting}
                >
                    {isFasting ? 'END FASTING' : 'START FASTING'}
                </button>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Started</span>
                        <span className={styles.statValue}>
                            {startTime ? new Date(startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}
                        </span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Goal End</span>
                        <span className={styles.statValue}>
                            {startTime ? new Date(startTime + (16 * 60 * 60 * 1000)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
