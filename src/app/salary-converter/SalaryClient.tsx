'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

// 2025 Minimum Wage (Placeholder if known, using 2024 approx or just user input logic)
// Korean Standard: 209 hours per month for 40h/week
const HOURS_PER_MONTH_STD = 209;

type Frequency = 'hourly' | 'monthly' | 'yearly';

export default function SalaryClient() {
    const [amount, setAmount] = useState('');
    const [frequency, setFrequency] = useState<Frequency>('yearly');

    // Results
    const [result, setResult] = useState({
        yearly: 0,
        monthly: 0,
        hourly: 0,
        netMonthly: 0, // Estimated Net Pay
    });

    useEffect(() => {
        const val = parseFloat(amount.replace(/,/g, ''));
        if (isNaN(val) || val < 0) {
            setResult({ yearly: 0, monthly: 0, hourly: 0, netMonthly: 0 });
            return;
        }

        let yearly = 0;

        // Base Calculation: Normalize to Yearly
        if (frequency === 'hourly') {
            yearly = val * HOURS_PER_MONTH_STD * 12;
        } else if (frequency === 'monthly') {
            yearly = val * 12;
        } else {
            yearly = val;
        }

        const monthly = yearly / 12;
        const hourly = monthly / HOURS_PER_MONTH_STD;

        // Simple Net Pay Estimation (Approximation for Korea)
        // Deductions: NP(4.5%) + HI(3.545% + L-Term) + EI(0.9%) + Income Tax (Bracket)
        // Roughly ~10-20% depending on bracket. Using a simplified tiered logic for UX estimation.
        let deductionRate = 0.093; // Basic Insurance (~9.3%)

        // Progressive Income Tax Estimate (Very rough simplification of Hometax table)
        if (yearly > 88000000) deductionRate += 0.15;
        else if (yearly > 50000000) deductionRate += 0.10;
        else if (yearly > 30000000) deductionRate += 0.05;
        else if (yearly > 12000000) deductionRate += 0.02;

        const netMonthly = monthly * (1 - deductionRate);

        setResult({
            yearly,
            monthly,
            hourly,
            netMonthly
        });
    }, [amount, frequency]);

    const formatCurrency = (val: number) => {
        // Korean Won: No decimals
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(Math.floor(val));
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Allow numeric input
        setAmount(e.target.value);
    };

    return (
        <div className={`${styles.card} glass-panel`}>
            <div className={styles.inputSection}>
                <div className={styles.inputGroup}>
                    <label>금액 기준</label>
                    <div className={styles.toggleGroup}>
                        <button
                            className={`${styles.toggleBtn} ${frequency === 'hourly' ? styles.active : ''}`}
                            onClick={() => setFrequency('hourly')}
                        >
                            시급
                        </button>
                        <button
                            className={`${styles.toggleBtn} ${frequency === 'monthly' ? styles.active : ''}`}
                            onClick={() => setFrequency('monthly')}
                        >
                            월급
                        </button>
                        <button
                            className={`${styles.toggleBtn} ${frequency === 'yearly' ? styles.active : ''}`}
                            onClick={() => setFrequency('yearly')}
                        >
                            연봉
                        </button>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label>금액 입력 (원)</label>
                    <div className={styles.amountWrapper}>
                        <input
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                            placeholder="금액을 입력하세요"
                            className={styles.input}
                        />
                        <span className={styles.wonText}>원</span>
                    </div>
                </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.resultsTable}>
                <div className={`${styles.resultRow} ${frequency === 'yearly' ? styles.highlight : ''}`}>
                    <span className={styles.label}>연봉 (지원금)</span>
                    <span className={styles.value}>{formatCurrency(result.yearly)}</span>
                </div>
                <div className={`${styles.resultRow} ${frequency === 'monthly' ? styles.highlight : ''}`}>
                    <span className={styles.label}>월 환산액 (세전)</span>
                    <span className={styles.value}>{formatCurrency(result.monthly)}</span>
                </div>
                <div className={`${styles.resultRow} ${frequency === 'hourly' ? styles.highlight : ''}`}>
                    <span className={styles.label}>시급 환산 (209h)</span>
                    <span className={styles.value}>{formatCurrency(result.hourly)}</span>
                </div>

                <div className={`${styles.resultRow} ${styles.netPay}`}>
                    <div className={styles.netPayLabelGroup}>
                        <span className={styles.netLabel}>예상 월 실수령액</span>
                        <span className={styles.netSub}>(세금 공제 후)</span>
                    </div>
                    <span className={styles.netValue}>{formatCurrency(result.netMonthly)}</span>
                </div>
            </div>

            <p className={styles.exInfo}>
                * 월 209시간 기준 (주 40시간 + 주휴수당)으로 계산된 예상치입니다.
            </p>
        </div>
    );
}
