'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function DDayClient() {
    const [targetDate, setTargetDate] = useState('');
    const [title, setTitle] = useState('');
    const [result, setResult] = useState<{ days: number, type: 'past' | 'future' | 'today' } | null>(null);
    const [isDay1, setIsDay1] = useState(false); // Default to Day 0 for US style

    const calculateDDay = () => {
        if (!targetDate) return;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const target = new Date(targetDate);
        target.setHours(0, 0, 0, 0);

        const diffTime = target.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            setResult({ days: isDay1 ? 1 : 0, type: 'today' });
        } else if (diffDays > 0) {
            setResult({ days: diffDays, type: 'future' });
        } else {
            // Past date
            // If "Today is Day 1", we include today in the count
            const daysPassed = Math.abs(diffDays) + (isDay1 ? 1 : 0);
            setResult({ days: daysPassed, type: 'past' });
        }
    };

    // Calculate on mount if date is set (optional) or just wait for user
    useEffect(() => {
        if (targetDate) calculateDDay();
    }, [targetDate, isDay1]);

    return (
        <div className={styles.container}>
            <div className={`${styles.card} glass-panel`}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Title (Optional)</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., My Birthday, Exam"
                        className={styles.textInput}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Target Date</label>
                    <input
                        type="date"
                        lang="en"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className={styles.dateInput}
                    />
                </div>

                <div className={styles.checkboxGroup}>
                    <input
                        type="checkbox"
                        id="day1"
                        checked={isDay1}
                        onChange={(e) => setIsDay1(e.target.checked)}
                    />
                    <label htmlFor="day1">Include today as Day 1</label>
                </div>

                {/* Result Display */}
                {result && (
                    <div className={styles.resultDisplay}>
                        <div className={styles.resultTitle}>{title || 'D-Day'}</div>
                        <div className={styles.resultValue}>
                            {result.type === 'future' && `D-${result.days}`}
                            {result.type === 'past' && `D+${result.days}`}
                            {result.type === 'today' && `D-Day`}
                        </div>
                        <div className={styles.resultSub}>
                            {result.type === 'future' && `${result.days} days left`}
                            {result.type === 'past' && `${result.days} days passed`}
                            {result.type === 'today' && `It's today!`}
                        </div>
                    </div>
                )}
            </div>

            {/* Common Anniversaries (Yearly) - Only show if past or today */}
            {result && (result.type === 'past' || result.type === 'today') && targetDate && (
                <div className={`${styles.card} glass-panel`}>
                    <h3>Anniversaries</h3>
                    <div className={styles.anniversaryList}>
                        {[1, 2, 3, 5, 10].map(years => {
                            const date = new Date(targetDate);
                            date.setFullYear(date.getFullYear() + years);

                            // If isDay1 is true, logic might be slightly different for "days count" but for yearly anniversary date it's usually just +Year
                            // However, if we want to show "Nth day", we stick to date calculation.
                            // For US style, "1 Year Anniversary" is just same date next year.

                            return (
                                <div key={years} className={styles.anniversaryItem}>
                                    <span className={styles.annivLabel}>{years} Year{years > 1 ? 's' : ''}</span>
                                    <span className={styles.annivDate}>{date.toLocaleDateString()}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
