'use client';

import { useState } from 'react';
import styles from './page.module.css';
import LotteryBall from '../../components/LotteryBall';

export default function EuroMillionsClient() {
    const [mainNumbers, setMainNumbers] = useState<number[]>([]);
    const [luckyStars, setLuckyStars] = useState<number[]>([]);
    const [isAnimating, setIsAnimating] = useState(false);

    const generateNumbers = () => {
        setIsAnimating(true);
        setMainNumbers([]);
        setLuckyStars([]);

        setTimeout(() => {
            // 5 Main Numbers (1-50)
            const newMainNumbers: number[] = [];
            while (newMainNumbers.length < 5) {
                const num = Math.floor(Math.random() * 50) + 1;
                if (!newMainNumbers.includes(num)) {
                    newMainNumbers.push(num);
                }
            }
            newMainNumbers.sort((a, b) => a - b);
            setMainNumbers(newMainNumbers);

            // 2 Lucky Stars (1-12)
            const newLuckyStars: number[] = [];
            while (newLuckyStars.length < 2) {
                const num = Math.floor(Math.random() * 12) + 1;
                if (!newLuckyStars.includes(num)) {
                    newLuckyStars.push(num);
                }
            }
            newLuckyStars.sort((a, b) => a - b);
            setLuckyStars(newLuckyStars);

            setIsAnimating(false);
        }, 500);
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.generatorCard} glass-panel`}>
                <div className={styles.ballGroup}>
                    {mainNumbers.length > 0 ? (
                        <>
                            <div className={styles.mainNumbers}>
                                {mainNumbers.map((num) => (
                                    <LotteryBall key={num} number={num} color="#ffffff" />
                                ))}
                            </div>
                            <div className={styles.plusSign}>+</div>
                            <div className={styles.luckyStars}>
                                {luckyStars.map((num) => (
                                    <LotteryBall key={num} number={num} color="#FFD700" isSpecial />
                                ))}
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
