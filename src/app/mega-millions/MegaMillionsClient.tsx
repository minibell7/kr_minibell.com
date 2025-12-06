'use client';

import { useState } from 'react';
import styles from './page.module.css';
import LotteryBall from '../../components/LotteryBall';

export default function MegaMillionsClient() {
    const [whiteBalls, setWhiteBalls] = useState<number[]>([]);
    const [megaBall, setMegaBall] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const generateNumbers = () => {
        setIsAnimating(true);
        setWhiteBalls([]);
        setMegaBall(null);

        setTimeout(() => {
            // 5 White Balls (1-70)
            const newWhiteBalls: number[] = [];
            while (newWhiteBalls.length < 5) {
                const num = Math.floor(Math.random() * 70) + 1;
                if (!newWhiteBalls.includes(num)) {
                    newWhiteBalls.push(num);
                }
            }
            newWhiteBalls.sort((a, b) => a - b);
            setWhiteBalls(newWhiteBalls);

            // 1 Gold Mega Ball (1-25)
            setMegaBall(Math.floor(Math.random() * 25) + 1);

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
                            <div className={styles.megaBall}>
                                {megaBall && <LotteryBall number={megaBall} color="#FFD700" isSpecial />}
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
