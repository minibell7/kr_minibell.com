'use client';

import { useState } from 'react';
import styles from './page.module.css';

const WESTERN_ZODIACS = [
    { name: '염소자리 (Capricorn)', icon: '♑', start: { m: 12, d: 22 }, end: { m: 1, d: 19 } },
    { name: '물병자리 (Aquarius)', icon: '♒', start: { m: 1, d: 20 }, end: { m: 2, d: 18 } },
    { name: '물고기자리 (Pisces)', icon: '♓', start: { m: 2, d: 19 }, end: { m: 3, d: 20 } },
    { name: '양자리 (Aries)', icon: '♈', start: { m: 3, d: 21 }, end: { m: 4, d: 19 } },
    { name: '황소자리 (Taurus)', icon: '♉', start: { m: 4, d: 20 }, end: { m: 5, d: 20 } },
    { name: '쌍둥이자리 (Gemini)', icon: '♊', start: { m: 5, d: 21 }, end: { m: 6, d: 20 } },
    { name: '게자리 (Cancer)', icon: '♋', start: { m: 6, d: 21 }, end: { m: 7, d: 22 } },
    { name: '사자자리 (Leo)', icon: '♌', start: { m: 7, d: 23 }, end: { m: 8, d: 22 } },
    { name: '처녀자리 (Virgo)', icon: '♍', start: { m: 8, d: 23 }, end: { m: 9, d: 22 } },
    { name: '천칭자리 (Libra)', icon: '♎', start: { m: 9, d: 23 }, end: { m: 10, d: 22 } },
    { name: '전갈자리 (Scorpio)', icon: '♏', start: { m: 10, d: 23 }, end: { m: 11, d: 21 } },
    { name: '사수자리 (Sagittarius)', icon: '♐', start: { m: 11, d: 22 }, end: { m: 12, d: 21 } },
    { name: '염소자리 (Capricorn)', icon: '♑', start: { m: 12, d: 22 }, end: { m: 12, d: 31 } }, // Handle end of year
];

const CHINESE_ZODIACS = [
    { name: '원숭이띠', icon: '🐒' }, // 0 (e.g. 2016)
    { name: '닭띠', icon: '🐓' },     // 1
    { name: '개띠', icon: '🐕' },     // 2
    { name: '돼지띠', icon: '🐖' },   // 3
    { name: '쥐띠', icon: '🐀' },     // 4 (e.g. 2020)
    { name: '소띠', icon: '🐂' },     // 5
    { name: '호랑이띠', icon: '🐅' }, // 6
    { name: '토끼띠', icon: '🐇' },   // 7
    { name: '용띠', icon: '🐉' },     // 8
    { name: '뱀띠', icon: '🐍' },     // 9
    { name: '말띠', icon: '🐎' },     // 10
    { name: '양띠', icon: '🐐' },     // 11
];

export default function ZodiacClient() {
    const [birthDate, setBirthDate] = useState('');
    const [result, setResult] = useState<{ western: any, chinese: any } | null>(null);

    const calculateZodiac = () => {
        if (!birthDate) return;

        const date = new Date(birthDate);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        // Western Zodiac
        const western = WESTERN_ZODIACS.find(z => {
            if (z.start.m === month && day >= z.start.d) return true;
            if (z.end.m === month && day <= z.end.d) return true;
            return false;
        });

        // Chinese Zodiac (Simple calculation based on year % 12)
        const chineseIndex = year % 12;
        const chinese = CHINESE_ZODIACS[chineseIndex];

        setResult({ western, chinese });
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.inputCard} glass-panel`}>
                <label className={styles.label}>생년월일을 입력하세요:</label>
                <input
                    type="date"
                    lang="ko"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className={styles.dateInput}
                />
                <button onClick={calculateZodiac} className={styles.calcBtn}>
                    계산하기
                </button>
            </div>

            {result && (
                <div className={styles.results}>
                    <div className={`${styles.resultCard} glass-panel`}>
                        <h3>서양 별자리</h3>
                        <div className={styles.icon}>{result.western?.icon}</div>
                        <div className={styles.name}>{result.western?.name}</div>
                    </div>

                    <div className={`${styles.resultCard} glass-panel`}>
                        <h3>동양 12지신 (띠)</h3>
                        <div className={styles.icon}>{result.chinese?.icon}</div>
                        <div className={styles.name}>{result.chinese?.name}</div>
                    </div>
                </div>
            )}
        </div>
    );
}
