'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function TipClient() {
    const [billAmount, setBillAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState(15);
    const [numPeople, setNumPeople] = useState(1);

    const [tipAmount, setTipAmount] = useState(0);
    const [totalBill, setTotalBill] = useState(0);
    const [perPerson, setPerPerson] = useState(0);

    useEffect(() => {
        const bill = parseFloat(billAmount);
        const people = parseInt(numPeople.toString());

        if (!isNaN(bill) && bill > 0 && !isNaN(people) && people > 0) {
            const tip = bill * (tipPercentage / 100);
            const total = bill + tip;
            const person = total / people;

            setTipAmount(tip);
            setTotalBill(total);
            setPerPerson(person);
        } else {
            setTipAmount(0);
            setTotalBill(0);
            setPerPerson(0);
        }
    }, [billAmount, tipPercentage, numPeople]);

    return (
        <div className={`${styles.card} glass-panel`}>
            <div className={styles.inputGroup}>
                <label>Bill Amount</label>
                <div className={styles.inputWrapper}>
                    <span className={styles.currency}>$</span>
                    <input
                        type="number"
                        value={billAmount}
                        onChange={(e) => setBillAmount(e.target.value)}
                        placeholder="0.00"
                        className={styles.input}
                    />
                </div>
            </div>

            <div className={styles.inputGroup}>
                <label>Tip Percentage: {tipPercentage}%</label>
                <div className={styles.tipButtons}>
                    {[10, 15, 18, 20, 25].map((pct) => (
                        <button
                            key={pct}
                            className={`${styles.tipButton} ${tipPercentage === pct ? styles.active : ''}`}
                            onClick={() => setTipPercentage(pct)}
                        >
                            {pct}%
                        </button>
                    ))}
                </div>
                <input
                    type="range"
                    min="0"
                    max="50"
                    value={tipPercentage}
                    onChange={(e) => setTipPercentage(parseInt(e.target.value))}
                    className={styles.slider}
                />
            </div>

            <div className={styles.inputGroup}>
                <label>Number of People</label>
                <div className={styles.peopleControl}>
                    <button onClick={() => setNumPeople(Math.max(1, numPeople - 1))}>-</button>
                    <span>{numPeople}</span>
                    <button onClick={() => setNumPeople(numPeople + 1)}>+</button>
                </div>
            </div>

            <div className={styles.results}>
                <div className={styles.resultRow}>
                    <span>Tip Amount</span>
                    <span className={styles.resultValue}>${tipAmount.toFixed(2)}</span>
                </div>
                <div className={styles.resultRow}>
                    <span>Total Bill</span>
                    <span className={styles.resultValue}>${totalBill.toFixed(2)}</span>
                </div>
                <div className={`${styles.resultRow} ${styles.totalRow}`}>
                    <span>Cost Per Person</span>
                    <span className={styles.totalValue}>${perPerson.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}
