'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

type Frequency = 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';

export default function SalaryClient() {
    const [amount, setAmount] = useState('');
    const [frequency, setFrequency] = useState<Frequency>('hourly');
    const [hoursPerWeek, setHoursPerWeek] = useState(40);
    const [daysPerWeek, setDaysPerWeek] = useState(5);

    const [results, setResults] = useState({
        hourly: 0,
        daily: 0,
        weekly: 0,
        monthly: 0,
        yearly: 0,
    });

    useEffect(() => {
        const val = parseFloat(amount);
        if (isNaN(val) || val < 0) {
            setResults({ hourly: 0, daily: 0, weekly: 0, monthly: 0, yearly: 0 });
            return;
        }

        let yearlyTotal = 0;

        // Calculate yearly total first as a baseline
        switch (frequency) {
            case 'hourly':
                yearlyTotal = val * hoursPerWeek * 52;
                break;
            case 'daily':
                yearlyTotal = val * daysPerWeek * 52;
                break;
            case 'weekly':
                yearlyTotal = val * 52;
                break;
            case 'monthly':
                yearlyTotal = val * 12;
                break;
            case 'yearly':
                yearlyTotal = val;
                break;
        }

        setResults({
            hourly: yearlyTotal / 52 / hoursPerWeek,
            daily: yearlyTotal / 52 / daysPerWeek,
            weekly: yearlyTotal / 52,
            monthly: yearlyTotal / 12,
            yearly: yearlyTotal,
        });
    }, [amount, frequency, hoursPerWeek, daysPerWeek]);

    const formatCurrency = (val: number) => {
        // Korean Won usually doesn't need decimals for salary
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(Math.floor(val));
    };

    return (
        <div className={`${styles.card} glass-panel`}>
            <div className={styles.inputSection}>
                <div className={styles.inputGroup}>
                    <label>급여 금액</label>
                    <div className={styles.amountWrapper}>
                        <span className={styles.currencySymbol}>₩</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0"
                            className={styles.input}
                        />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label>기준 (지급 주기)</label>
                    <select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value as Frequency)}
                        className={styles.select}
                    >
                        <option value="hourly">시급 (알바)</option>
                        <option value="daily">일급</option>
                        <option value="weekly">주급</option>
                        <option value="monthly">월급 (직장인)</option>
                        <option value="yearly">연봉</option>
                    </select>
                </div>
            </div>

            <div className={styles.settingsSection}>
                <div className={styles.setting}>
                    <label>주당 근무 시간</label>
                    <input
                        type="number"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(parseFloat(e.target.value))}
                        className={styles.smallInput}
                    />
                </div>
                <div className={styles.setting}>
                    <label>주당 근무 일수</label>
                    <input
                        type="number"
                        value={daysPerWeek}
                        onChange={(e) => setDaysPerWeek(parseFloat(e.target.value))}
                        className={styles.smallInput}
                    />
                </div>
            </div>

            <div className={styles.resultsTable}>
                <div className={`${styles.resultRow} ${frequency === 'hourly' ? styles.highlight : ''}`}>
                    <span>시급</span>
                    <span>{formatCurrency(results.hourly)}</span>
                </div>
                <div className={`${styles.resultRow} ${frequency === 'daily' ? styles.highlight : ''}`}>
                    <span>일급</span>
                    <span>{formatCurrency(results.daily)}</span>
                </div>
                <div className={`${styles.resultRow} ${frequency === 'weekly' ? styles.highlight : ''}`}>
                    <span>주급</span>
                    <span>{formatCurrency(results.weekly)}</span>
                </div>
                <div className={`${styles.resultRow} ${frequency === 'monthly' ? styles.highlight : ''}`}>
                    <span>월급</span>
                    <span>{formatCurrency(results.monthly)}</span>
                </div>
                <div className={`${styles.resultRow} ${frequency === 'yearly' ? styles.highlight : ''}`}>
                    <span>연봉</span>
                    <span>{formatCurrency(results.yearly)}</span>
                </div>
            </div>
        </div>
    );
}
