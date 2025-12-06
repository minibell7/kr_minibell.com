'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

type System = 'metric' | 'imperial';

export default function BMIClient() {
    // Default to metric only for Korea context, strictly speaking, but keeping toggle is fine utility.
    // However, UX-wise, Koreans barely use Imperial. Let's optimize by making Metric default and "hidden" tab unless requested?
    // Actually, just defaulting to Metric is enough.
    const [system, setSystem] = useState<System>('metric');
    const [height, setHeight] = useState(''); // cm
    const [weight, setWeight] = useState(''); // kg

    // Imperial states (less priority)
    const [ft, setFt] = useState('');
    const [inches, setInches] = useState('');
    const [lbs, setLbs] = useState('');

    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        let h = parseFloat(height);
        let w = parseFloat(weight);
        let calculatedBmi = 0;

        if (system === 'metric') {
            if (h > 0 && w > 0) {
                calculatedBmi = w / Math.pow(h / 100, 2);
            }
        } else {
            // Imperial logic
            const f = parseFloat(ft) || 0;
            const i = parseFloat(inches) || 0;
            const lb = parseFloat(lbs) || 0;
            const totalInches = (f * 12) + i;
            if (totalInches > 0 && lb > 0) {
                calculatedBmi = 703 * lb / Math.pow(totalInches, 2);
            }
        }

        if (calculatedBmi > 0) {
            setBmi(calculatedBmi);
            // KSSO (Korean Society for the Study of Obesity) Guidelines
            if (calculatedBmi < 18.5) {
                setCategory('저체중');
                setMessage('영양 섭취를 늘리고 근력 운동이 필요합니다.');
            } else if (calculatedBmi < 23) {
                setCategory('정상');
                setMessage('건강한 상태입니다! 현재 습관을 유지하세요.');
            } else if (calculatedBmi < 25) {
                setCategory('과체중 (비만 전단계)');
                setMessage('체중 관리가 필요합니다. 식단 조절을 시작해보세요.');
            } else if (calculatedBmi < 30) {
                setCategory('비만 (1단계)');
                setMessage('적극적인 체중 감량이 권장됩니다.');
            } else if (calculatedBmi < 35) {
                setCategory('비만 (2단계)');
                setMessage('건강 위험이 높습니다. 전문가와 상담하세요.');
            } else {
                setCategory('고도비만');
                setMessage('즉각적인 의학적 개입이 필요할 수 있습니다.');
            }
        } else {
            setBmi(null);
            setCategory('');
            setMessage('');
        }
    }, [height, weight, ft, inches, lbs, system]);

    return (
        <div className={`${styles.card} glass-panel`}>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${system === 'metric' ? styles.activeTab : ''}`}
                    onClick={() => setSystem('metric')}
                >
                    미터법 (kg/cm)
                </button>
                <button
                    className={`${styles.tab} ${system === 'imperial' ? styles.activeTab : ''}`}
                    onClick={() => setSystem('imperial')}
                >
                    야드파운드법 (lb/ft)
                </button>
            </div>

            <div className={styles.inputSection}>
                {system === 'metric' ? (
                    <>
                        <div className={styles.inputGroup}>
                            <label>신장 (cm)</label>
                            <input
                                type="number"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                placeholder="175"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>체중 (kg)</label>
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
                            <label>신장 (Height)</label>
                            <div className={styles.imperialHeight}>
                                <input
                                    type="number"
                                    value={ft}
                                    onChange={(e) => setFt(e.target.value)}
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
                            <label>체중 (lbs)</label>
                            <input
                                type="number"
                                value={lbs}
                                onChange={(e) => setLbs(e.target.value)}
                                placeholder="160"
                                className={styles.input}
                            />
                        </div>
                    </>
                )}
            </div>

            {bmi !== null && (
                <div className={styles.resultSection}>
                    <div className={styles.bmiTitle}>나의 BMI 지수</div>
                    <div className={styles.bmiValue}>
                        {bmi.toFixed(1)}
                    </div>
                    <div className={`${styles.bmiCategory} ${styles[getStyleClass(bmi)]}`}>
                        {category}
                    </div>
                    <div className={styles.bmiMessage}>
                        {message}
                    </div>

                    <div className={styles.scale}>
                        <div className={`${styles.scaleItem} ${bmi < 18.5 ? styles.active : ''}`}>저체중</div>
                        <div className={`${styles.scaleItem} ${bmi >= 18.5 && bmi < 23 ? styles.active : ''}`}>정상</div>
                        <div className={`${styles.scaleItem} ${bmi >= 23 && bmi < 25 ? styles.active : ''}`}>과체중</div>
                        <div className={`${styles.scaleItem} ${bmi >= 25 ? styles.active : ''}`}>비만</div>
                    </div>
                </div>
            )}
        </div>
    );
}

function getStyleClass(bmi: number) {
    if (bmi < 18.5) return 'underweight';
    if (bmi < 23) return 'normal';
    if (bmi < 25) return 'overweight';
    return 'obese';
}
