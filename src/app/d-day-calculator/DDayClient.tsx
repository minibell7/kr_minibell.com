'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function DDayClient() {
    const [targetDate, setTargetDate] = useState('');
    const [title, setTitle] = useState('');
    const [result, setResult] = useState<{ days: number, type: 'past' | 'future' | 'today' } | null>(null);
    const [isDay1, setIsDay1] = useState(true); // Default to True for Korea (오늘부터 1일)

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
            // Future: usually just "D-30" (Excluding today? Standard is excluding)
            setResult({ days: diffDays, type: 'future' });
        } else {
            // Past: "D+100"
            // If "Day 1 included", we add 1 to abs diff
            const daysPassed = Math.abs(diffDays) + (isDay1 ? 1 : 0);
            setResult({ days: daysPassed, type: 'past' });
        }
    };

    useEffect(() => {
        if (targetDate) calculateDDay();
    }, [targetDate, isDay1]);

    return (
        <div className={styles.container}>
            <div className={`${styles.card} glass-panel`}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>제목 (선택)</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="예: 수능, 여자친구 생일, 다이어트 시작"
                        className={styles.textInput}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>날짜 선택</label>
                    <input
                        type="date"
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
                    <label htmlFor="day1">시작일을 1일로 포함 (오늘부터 1일)</label>
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
                            {result.type === 'future' && `${result.days}일 남음`}
                            {result.type === 'past' && `${result.days}일 째`}
                            {result.type === 'today' && `오늘이 그날입니다!`}
                        </div>
                    </div>
                )}
            </div>

            {/* Anniversary Calc for Past Dates (Couples) */}
            {result && (result.type === 'past' || result.type === 'today') && targetDate && (
                <div className={`${styles.card} glass-panel`}>
                    <h3>📅 주요 기념일 계산</h3>
                    <div className={styles.anniversaryList}>
                        {[100, 200, 300, 365, 500, 1000].map(days => {
                            const date = new Date(targetDate);
                            // Correct logic: Target + (Days - 1)ms if Day 1 is included
                            // If Day 1 included: Day 100 = Target + 99 days
                            // If Day 1 excluded: Day 100 = Target + 100 days
                            const offset = isDay1 ? days - 1 : days;
                            date.setDate(date.getDate() + offset);

                            return (
                                <div key={days} className={styles.anniversaryItem}>
                                    <span className={styles.annivLabel}>
                                        {days === 365 ? '1주년' : `${days}일`}
                                    </span>
                                    <span className={styles.annivDate}>
                                        {date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' })}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
