'use client';

import { useState } from 'react';
import styles from './page.module.css';
import LotteryBall from '../../components/LotteryBall';

export default function PowerballClient() {
    const [whiteBalls, setWhiteBalls] = useState<number[]>([]);
    const [powerBall, setPowerBall] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const generateNumbers = () => {
        setIsAnimating(true);
        setWhiteBalls([]);
        setPowerBall(null);

        setTimeout(() => {
            // 5 White Balls (1-69)
            const newWhiteBalls: number[] = [];
            while (newWhiteBalls.length < 5) {
                const num = Math.floor(Math.random() * 69) + 1;
                if (!newWhiteBalls.includes(num)) {
                    newWhiteBalls.push(num);
                }
            }
            newWhiteBalls.sort((a, b) => a - b);
            setWhiteBalls(newWhiteBalls);

            // 1 Red Powerball (1-26)
            setPowerBall(Math.floor(Math.random() * 26) + 1);

            setIsAnimating(false);
        }, 500);
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.generatorCard} glass-panel`}>
                <div className={styles.ballGroup}>
                    {whiteBalls.length > 0 ? (
                        <>
                            <div className={styles.whiteBalls}>
                                {whiteBalls.map((num) => (
                                    <LotteryBall key={num} number={num} color="#ffffff" />
                                ))}
                            </div>
                            <div className={styles.plusSign}>+</div>
                            <div className={styles.powerBall}>
                                {powerBall && <LotteryBall number={powerBall} color="#ff4d4d" isSpecial />}
                            </div>
                        </>
                    ) : (
                        <div className={styles.placeholder}>
                            <span>Generate Your Lucky Numbers!</span>
                        </div>
                    )}
                </div>

                <button
                    onClick={generateNumbers}
                    className={styles.generateBtn}
                    disabled={isAnimating}
                >
                    {isAnimating ? 'Rolling...' : 'Generate Numbers'}
                </button>
            </div>
        </div>
    );
}
