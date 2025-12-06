'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import LotteryBall from '@/components/LotteryBall';

export default function LottoClient() {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [loading, setLoading] = useState(false);

    const generateNumbers = () => {
        setLoading(true);
        // Simulate thinking time for excitement
        setTimeout(() => {
            const newNumbers: number[] = [];
            while (newNumbers.length < 6) {
                const num = Math.floor(Math.random() * 45) + 1;
                if (!newNumbers.includes(num)) {
                    newNumbers.push(num);
                }
            }
            // Sort numbers for cleaner display
            newNumbers.sort((a, b) => a - b);
            setNumbers(newNumbers);
            setLoading(false);
        }, 600);
    };

    return (
        <div className="utility-page">
            <div className="utility-header">
                <h1 className="utility-title">🎱 로또 6/45 생성기</h1>
                <p className="utility-desc">이번 주 행운의 주인공은 바로 당신입니다!</p>
            </div>

            <div className="tool-container glass-panel">
                <div style={{
                    flexWrap: 'wrap',
                    minHeight: '80px',
                    alignItems: 'center',
                    marginBottom: '2rem'
                }}>
                    {loading ? (
                        <div className={styles.loader}>번호 추첨 중...</div>
                    ) : numbers.length > 0 ? (
                        numbers.map((num) => {
                            let color = '#fbc400'; // 1-10 Yellow
                            if (num > 10 && num <= 20) color = '#69c8f2'; // 11-20 Blue
                            else if (num > 20 && num <= 30) color = '#ff7272'; // 21-30 Red
                            else if (num > 30 && num <= 40) color = '#aaaaaa'; // 31-40 Gray
                            else if (num > 40) color = '#b0d840'; // 41-45 Green

                            return <LotteryBall key={num} number={num} color={color} />;
                        })
                    ) : (
                        <div style={{ color: 'var(--text-secondary)' }}>버튼을 눌러 행운을 잡으세요!</div>
                    )}
                </div>

                <button
                    className="action-button"
                    onClick={generateNumbers}
                    disabled={loading}
                    style={{ width: '100%', fontSize: '1.2rem', padding: '1rem' }}
                >
                    {loading ? '생성 중...' : '번호 생성하기 ✨'}
                </button>
            </div>

            <div className="glass-panel" style={{ marginTop: '2rem' }}>
                <h3>💡 로또 Tip</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    매주 토요일 저녁 추첨합니다. <br />
                    이 생성기는 1~45 사이의 숫자 중 중복되지 않는 6개를 무작위로 추출합니다. <br />
                    재미로만 즐겨주세요!
                </p>
            </div>
        </div >
    );
}
