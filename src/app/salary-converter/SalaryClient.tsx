'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

type Frequency = 'hourly' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'yearly';

export default function SalaryClient() {
    const [amount, setAmount] = useState('');
    const [frequency, setFrequency] = useState<Frequency>('hourly');
    const [hoursPerWeek, setHoursPerWeek] = useState(40);
    const [daysPerWeek, setDaysPerWeek] = useState(5);

    const [results, setResults] = useState({
        hourly: 0,
        daily: 0,
        weekly: 0,
        biweekly: 0,
        monthly: 0,
        yearly: 0,
    });

    useEffect(() => {
        const val = parseFloat(amount);
        if (isNaN(val) || val < 0) {
            setResults({ hourly: 0, daily: 0, weekly: 0, biweekly: 0, monthly: 0, yearly: 0 });
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
            case 'biweekly':
                yearlyTotal = val * 26;
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
            biweekly: yearlyTotal / 26,
            monthly: yearlyTotal / 12,
            yearly: yearlyTotal,
        });
    }, [amount, frequency, hoursPerWeek, daysPerWeek]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
    };

    return (
        <div className={`${styles.card} glass-panel`}>
            <div className={styles.inputSection}>
                <div className={styles.inputGroup}>
                    <label>Amount</label>
                    <div className={styles.amountWrapper}>
                        <span className={styles.currencySymbol}>$</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className={styles.input}
                        />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label>Frequency</label>
                    <select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value as Frequency)}
                        className={styles.select}
                    >
                        <option value="hourly">Hourly</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Bi-Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>
            </div>

            <div className={styles.settingsSection}>
                <div className={styles.setting}>
                    <label>Hours per Week</label>
                    <input
                        type="number"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(parseFloat(e.target.value))}
                        className={styles.smallInput}
                    />
                </div>
                <div className={styles.setting}>
                    <label>Days per Week</label>
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
                    <span>Hourly</span>
                    <span>{formatCurrency(results.hourly)}</span>
                </div>
                <div className={`${styles.resultRow} ${frequency === 'daily' ? styles.highlight : ''}`}>
                    <span>Daily</span>
                    <span>{formatCurrency(results.daily)}</span>
                </div>
                <div className={`${styles.resultRow} ${frequency === 'weekly' ? styles.highlight : ''}`}>
                    <span>Weekly</span>
                    <span>{formatCurrency(results.weekly)}</span>
                </div>
                <div className={`${styles.resultRow} ${frequency === 'biweekly' ? styles.highlight : ''}`}>
                    <span>Bi-Weekly</span>
                    <span>{formatCurrency(results.biweekly)}</span>
                </div>
                <div className={`${styles.resultRow} ${frequency === 'monthly' ? styles.highlight : ''}`}>
                    <span>Monthly</span>
                    <span>{formatCurrency(results.monthly)}</span>
                </div>
                <div className={`${styles.resultRow} ${frequency === 'yearly' ? styles.highlight : ''}`}>
                    <span>Yearly</span>
                    <span>{formatCurrency(results.yearly)}</span>
                </div>
            </div>
        </div>
    );
}
