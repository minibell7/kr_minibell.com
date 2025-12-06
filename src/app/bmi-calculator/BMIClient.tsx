'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

type System = 'metric' | 'imperial';

export default function BMIClient() {
    const [system, setSystem] = useState<System>('metric');
    const [height, setHeight] = useState(''); // cm or feet
    const [inches, setInches] = useState(''); // for imperial
    const [weight, setWeight] = useState(''); // kg or lbs

    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState('');

    useEffect(() => {
        let h = parseFloat(height);
        let w = parseFloat(weight);
        let calculatedBmi = 0;

        if (system === 'metric') {
            // Metric: BMI = weight (kg) / [height (m)]^2
            if (h > 0 && w > 0) {
                calculatedBmi = w / Math.pow(h / 100, 2);
            }
        } else {
            // Imperial: BMI = 703 * weight (lbs) / [height (in)]^2
            const i = parseFloat(inches) || 0;
            const totalInches = (h * 12) + i;
            if (totalInches > 0 && w > 0) {
                calculatedBmi = 703 * w / Math.pow(totalInches, 2);
            }
        }

        if (calculatedBmi > 0) {
            setBmi(calculatedBmi);
            if (calculatedBmi < 18.5) setCategory('Underweight');
            else if (calculatedBmi < 25) setCategory('Normal weight');
            else if (calculatedBmi < 30) setCategory('Overweight');
            else setCategory('Obese');
        } else {
            setBmi(null);
            setCategory('');
        }
    }, [height, inches, weight, system]);

    return (
        <div className={`${styles.card} glass-panel`}>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${system === 'metric' ? styles.activeTab : ''}`}
                    onClick={() => { setSystem('metric'); setHeight(''); setWeight(''); setBmi(null); }}
                >
                    Metric (kg/cm)
                </button>
                <button
                    className={`${styles.tab} ${system === 'imperial' ? styles.activeTab : ''}`}
                    onClick={() => { setSystem('imperial'); setHeight(''); setInches(''); setWeight(''); setBmi(null); }}
                >
                    Imperial (lbs/ft)
                </button>
            </div>

            <div className={styles.inputSection}>
                {system === 'metric' ? (
                    <>
                        <div className={styles.inputGroup}>
                            <label>Height (cm)</label>
                            <input
                                type="number"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                placeholder="175"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Weight (kg)</label>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="70"
                                className={styles.input}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.inputGroup}>
                            <label>Height</label>
                            <div className={styles.imperialHeight}>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    placeholder="5"
                                    className={styles.input}
                                />
                                <span>ft</span>
                                <input
                                    type="number"
                                    value={inches}
                                    onChange={(e) => setInches(e.target.value)}
                                    placeholder="10"
                                    className={styles.input}
                                />
                                <span>in</span>
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Weight (lbs)</label>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="160"
                                className={styles.input}
                            />
                        </div>
                    </>
                )}
            </div>

            {bmi !== null && (
                <div className={styles.resultSection}>
                    <div className={styles.bmiValue}>
                        BMI: {bmi.toFixed(1)}
                    </div>
                    <div className={`${styles.bmiCategory} ${styles[category.split(' ')[0].toLowerCase()]}`}>
                        {category}
                    </div>
                    <div className={styles.scale}>
                        <div className={`${styles.scaleItem} ${category === 'Underweight' ? styles.active : ''}`}>Under</div>
                        <div className={`${styles.scaleItem} ${category === 'Normal weight' ? styles.active : ''}`}>Normal</div>
                        <div className={`${styles.scaleItem} ${category === 'Overweight' ? styles.active : ''}`}>Over</div>
                        <div className={`${styles.scaleItem} ${category === 'Obese' ? styles.active : ''}`}>Obese</div>
                    </div>
                </div>
            )}
        </div>
    );
}
