'use client';

import { useState } from 'react';
import styles from './page.module.css';

const WESTERN_ZODIACS = [
    { name: 'Capricorn', icon: '♑', start: { m: 12, d: 22 }, end: { m: 1, d: 19 } },
    { name: 'Aquarius', icon: '♒', start: { m: 1, d: 20 }, end: { m: 2, d: 18 } },
    { name: 'Pisces', icon: '♓', start: { m: 2, d: 19 }, end: { m: 3, d: 20 } },
    { name: 'Aries', icon: '♈', start: { m: 3, d: 21 }, end: { m: 4, d: 19 } },
    { name: 'Taurus', icon: '♉', start: { m: 4, d: 20 }, end: { m: 5, d: 20 } },
    { name: 'Gemini', icon: '♊', start: { m: 5, d: 21 }, end: { m: 6, d: 20 } },
    { name: 'Cancer', icon: '♋', start: { m: 6, d: 21 }, end: { m: 7, d: 22 } },
    { name: 'Leo', icon: '♌', start: { m: 7, d: 23 }, end: { m: 8, d: 22 } },
    { name: 'Virgo', icon: '♍', start: { m: 8, d: 23 }, end: { m: 9, d: 22 } },
    { name: 'Libra', icon: '♎', start: { m: 9, d: 23 }, end: { m: 10, d: 22 } },
    { name: 'Scorpio', icon: '♏', start: { m: 10, d: 23 }, end: { m: 11, d: 21 } },
    { name: 'Sagittarius', icon: '♐', start: { m: 11, d: 22 }, end: { m: 12, d: 21 } },
    { name: 'Capricorn', icon: '♑', start: { m: 12, d: 22 }, end: { m: 12, d: 31 } }, // Handle end of year
];

const CHINESE_ZODIACS = [
    { name: 'Monkey', icon: '🐒' },
    { name: 'Rooster', icon: '🐓' },
    { name: 'Dog', icon: '🐕' },
    { name: 'Pig', icon: '🐖' },
    { name: 'Rat', icon: '🐀' },
    { name: 'Ox', icon: '🐂' },
    { name: 'Tiger', icon: '🐅' },
    { name: 'Rabbit', icon: '🐇' },
    { name: 'Dragon', icon: '🐉' },
    { name: 'Snake', icon: '🐍' },
    { name: 'Horse', icon: '🐎' },
    { name: 'Goat', icon: '🐐' },
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

        // Chinese Zodiac (Simple calculation based on year)
        const chineseIndex = year % 12;
        const chinese = CHINESE_ZODIACS[chineseIndex];

        setResult({ western, chinese });
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.inputCard} glass-panel`}>
                <label className={styles.label}>Enter your Birth Date:</label>
                <input
                    type="date"
                    lang="en"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className={styles.dateInput}
                />
                <button onClick={calculateZodiac} className={styles.calcBtn}>
                    Calculate
                </button>
            </div>

            {result && (
                <div className={styles.results}>
                    <div className={`${styles.resultCard} glass-panel`}>
                        <h3>Western Zodiac</h3>
                        <div className={styles.icon}>{result.western?.icon}</div>
                        <div className={styles.name}>{result.western?.name}</div>
                    </div>

                    <div className={`${styles.resultCard} glass-panel`}>
                        <h3>Chinese Zodiac</h3>
                        <div className={styles.icon}>{result.chinese?.icon}</div>
                        <div className={styles.name}>{result.chinese?.name}</div>
                    </div>
                </div>
            )}
        </div>
    );
}
