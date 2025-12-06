'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function MeetupClient() {
    const [totalAmount, setTotalAmount] = useState<string>('');
    const [peopleCount, setPeopleCount] = useState<string>('');
    const [roundUnit, setRoundUnit] = useState<number>(100); // 10, 100, 1000
    const [result, setResult] = useState<{ perPerson: number, remainder: number } | null>(null);

    useEffect(() => {
        calculate();
    }, [totalAmount, peopleCount, roundUnit]);

    const calculate = () => {
        const total = parseInt(totalAmount.replace(/,/g, ''));
        const people = parseInt(peopleCount);

        if (!total || !people || people <= 0) {
            setResult(null);
            return;
        }

        // Exact division
        const exactShare = total / people;

        // Rounding logic (Ceil to avoid "shortage")
        // e.g. 10000 / 3 = 3333.33... -> 3333 or 3340?
        // Usually in Korea, we round UP to nearest unit to ensure total is covered.

        // Let's use simple rounding logic:
        // 1. Calculate precise share
        // 2. Round to unit (default floor or ceil? Let's offer options, but default to 'Ceil' is safer for collecting money)
        // Actually, widespread practice: Round DOWN to unit + Who pays the rest? OR Round UP so spare money is left.
        // Let's implement: "Floor to unit, and remainder is shown"

        const perPersonRaw = Math.floor(exactShare / roundUnit) * roundUnit;
        const currentTotal = perPersonRaw * people;
        const remainder = total - currentTotal;

        setResult({
            perPerson: perPersonRaw,
            remainder: remainder
        });
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/[^0-9]/g, '');
        setTotalAmount(val);
    };

    return (
        <div className="utility-page">
            <div className="utility-header">
                <h1 className="utility-title">💸 N빵 더치페이 계산기</h1>
                <p className="utility-desc">깔끔한 정산을 위해 10원 단위 전쟁은 그만!</p>
            </div>

            <div className="tool-container glass-panel">
                <div className={styles.inputGroup}>
                    <label>총 금액 (원)</label>
                    <input
                        type="text"
                        value={totalAmount ? parseInt(totalAmount).toLocaleString() : ''}
                        onChange={handleAmountChange}
                        placeholder="예: 53000"
                        className="input-field"
                        inputMode="numeric"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label>인원 수 (명)</label>
                    <input
                        type="number"
                        value={peopleCount}
                        onChange={(e) => setPeopleCount(e.target.value)}
                        placeholder="예: 4"
                        className="input-field"
                        inputMode="numeric"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label>단위 절사</label>
                    <div className={styles.radioGroup}>
                        {[10, 100, 1000].map((unit) => (
                            <label key={unit} className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="roundUnit"
                                    checked={roundUnit === unit}
                                    onChange={() => setRoundUnit(unit)}
                                />
                                {unit}원 단위
                            </label>
                        ))}
                    </div>
                </div>

                {result && (
                    <div className={styles.resultCard}>
                        <div className={styles.resultRow}>
                            <span>1인당 부담금</span>
                            <span className={styles.accentAmount}>{result.perPerson.toLocaleString()}원</span>
                        </div>
                        {result.remainder > 0 && (
                            <div className={styles.remainderRow}>
                                <span>
                                    짜투리 금액 <br />
                                    <small>(누군가 더 내야함 😭)</small>
                                </span>
                                <span className={styles.remainderAmount}>+{result.remainder.toLocaleString()}원</span>
                            </div>
                        )}
                        <div className={styles.summary}>
                            <p>
                                {peopleCount}명이 {result.perPerson.toLocaleString()}원씩 걷으면 <br />
                                총 {(result.perPerson * parseInt(peopleCount)).toLocaleString()}원이 모입니다.
                                {result.remainder > 0 && ` 부족한 ${result.remainder}원은 총무가 쏘나요?`}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
