'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function LoanClient() {
    const [amount, setAmount] = useState('');
    const [rate, setRate] = useState('');
    const [years, setYears] = useState('');

    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    useEffect(() => {
        const p = parseFloat(amount);
        const r = parseFloat(rate);
        const t = parseFloat(years);

        if (!isNaN(p) && p > 0 && !isNaN(r) && r >= 0 && !isNaN(t) && t > 0) {
            // Monthly interest rate
            const i = (r / 100) / 12;
            // Total number of payments
            const n = t * 12;

            let monthly = 0;
            if (r === 0) {
                monthly = p / n;
            } else {
                monthly = (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
            }

            const total = monthly * n;
            const interest = total - p;

            setMonthlyPayment(monthly);
            setTotalPayment(total);
            setTotalInterest(interest);
        } else {
            setMonthlyPayment(0);
            setTotalPayment(0);
            setTotalInterest(0);
        }
    }, [amount, rate, years]);

    return (
        <div className={`${styles.card} glass-panel`}>
            <div className={styles.inputGroup}>
                <label>대출 원금 (원)</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="예: 20000000 (2천만원)"
                    className={styles.input}
                />
            </div>

            <div className={styles.row}>
                <div className={styles.inputGroup}>
                    <label>연 이자율 (%)</label>
                    <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        placeholder="예: 4.5"
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>대출 기간 (년)</label>
                    <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        placeholder="예: 2"
                        className={styles.input}
                    />
                </div>
            </div>

            <div className={styles.results}>
                <div className={styles.mainResult}>
                    <span>월 예상 납입금</span>
                    <span className={styles.monthlyValue}>
                        {monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}원
                    </span>
                </div>
                <div className={styles.subResult}>
                    <span>원금 합계</span>
                    <span>{amount ? parseFloat(amount).toLocaleString() : '0'}원</span>
                </div>
                <div className={styles.subResult}>
                    <span>총 이자 비용</span>
                    <span>{totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}원</span>
                </div>
                <div className={`${styles.subResult} ${styles.totalRow}`}>
                    <span>총 상환 금액</span>
                    <span>{totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}원</span>
                </div>
            </div>
        </div>
    );
}
