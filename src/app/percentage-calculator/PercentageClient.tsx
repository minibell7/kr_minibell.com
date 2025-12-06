'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function PercentageClient() {
    // Mode 1: What is X% of Y?
    const [val1_X, setVal1_X] = useState('');
    const [val1_Y, setVal1_Y] = useState('');

    // Mode 2: X is what % of Y?
    const [val2_X, setVal2_X] = useState('');
    const [val2_Y, setVal2_Y] = useState('');

    // Mode 3: Increase/Decrease from X to Y
    const [val3_X, setVal3_X] = useState('');
    const [val3_Y, setVal3_Y] = useState('');

    const calc1 = () => {
        if (!val1_X || !val1_Y) return '...';
        return ((parseFloat(val1_X) / 100) * parseFloat(val1_Y)).toLocaleString();
    };

    const calc2 = () => {
        if (!val2_X || !val2_Y) return '...';
        if (parseFloat(val2_Y) === 0) return '0';
        return ((parseFloat(val2_X) / parseFloat(val2_Y)) * 100).toFixed(2);
    };

    const calc3 = () => {
        if (!val3_X || !val3_Y) return '...';
        const start = parseFloat(val3_X);
        const end = parseFloat(val3_Y);
        if (start === 0) return '0';
        const diff = end - start;
        const percent = (diff / start) * 100;
        return percent > 0 ? `+${percent.toFixed(2)}` : percent.toFixed(2);
    };

    return (
        <div className={styles.container}>
            {/* Mode 1 */}
            <div className={`${styles.card} glass-panel`}>
                <h3>Percentage Value</h3>
                <div className={styles.calcRow}>
                    <div className={styles.inputWrapper}>
                        <span>What is</span>
                        <input
                            type="number"
                            value={val1_X}
                            onChange={(e) => setVal1_X(e.target.value)}
                            placeholder="20"
                        />
                        <span>% of</span>
                        <input
                            type="number"
                            value={val1_Y}
                            onChange={(e) => setVal1_Y(e.target.value)}
                            placeholder="10000"
                        />
                    </div>
                    <div className={styles.result}>
                        = <span className={styles.highlight}>{calc1()}</span>
                    </div>
                </div>
            </div>

            {/* Mode 2 */}
            <div className={`${styles.card} glass-panel`}>
                <h3>Percentage Ratio</h3>
                <div className={styles.calcRow}>
                    <div className={styles.inputWrapper}>
                        <input
                            type="number"
                            value={val2_X}
                            onChange={(e) => setVal2_X(e.target.value)}
                            placeholder="50"
                        />
                        <span>is what % of</span>
                        <input
                            type="number"
                            value={val2_Y}
                            onChange={(e) => setVal2_Y(e.target.value)}
                            placeholder="200"
                        />
                    </div>
                    <div className={styles.result}>
                        = <span className={styles.highlight}>{calc2()}%</span>
                    </div>
                </div>
            </div>

            {/* Mode 3 */}
            <div className={`${styles.card} glass-panel`}>
                <h3>Percentage Change</h3>
                <div className={styles.calcRow}>
                    <div className={styles.inputWrapper}>
                        <span>From</span>
                        <input
                            type="number"
                            value={val3_X}
                            onChange={(e) => setVal3_X(e.target.value)}
                            placeholder="100"
                        />
                        <span>to</span>
                        <input
                            type="number"
                            value={val3_Y}
                            onChange={(e) => setVal3_Y(e.target.value)}
                            placeholder="150"
                        />
                    </div>
                    <div className={styles.result}>
                        = <span className={styles.highlight}>{calc3()}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
