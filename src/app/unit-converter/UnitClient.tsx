'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

type Category = 'Length' | 'Weight' | 'Area' | 'Temperature';

const CATEGORIES: Record<Category, string> = {
    Length: '길이',
    Weight: '무게',
    Area: '넓이',
    Temperature: '온도'
};

const UNITS: Record<Category, { label: string, val: string }[]> = {
    Length: [
        { label: '미터 (m)', val: 'm' },
        { label: '센티미터 (cm)', val: 'cm' },
        { label: '밀리미터 (mm)', val: 'mm' },
        { label: '인치 (in)', val: 'in' },
        { label: '피트 (ft)', val: 'ft' },
        { label: '야드 (yd)', val: 'yd' },
        { label: '킬로미터 (km)', val: 'km' },
        { label: '마일 (mi)', val: 'mi' }
    ],
    Weight: [
        { label: '킬로그램 (kg)', val: 'kg' },
        { label: '그램 (g)', val: 'g' },
        { label: '파운드 (lb)', val: 'lb' },
        { label: '온스 (oz)', val: 'oz' }
    ],
    Area: [
        { label: '제곱미터 (m²)', val: 'm2' },
        { label: '평 (pyeong)', val: 'pyeong' },
        { label: '제곱피트 (ft²)', val: 'ft2' },
        { label: '에이커 (ac)', val: 'ac' }
    ],
    Temperature: [
        { label: '섭씨 (°C)', val: 'C' },
        { label: '화씨 (°F)', val: 'F' },
        { label: '켈빈 (K)', val: 'K' }
    ]
};

export default function UnitClient() {
    const [category, setCategory] = useState<Category>('Length');
    const [fromUnit, setFromUnit] = useState(UNITS['Length'][0].val);
    const [toUnit, setToUnit] = useState(UNITS['Length'][3].val); // default m -> in
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    // Reset units when category changes
    useEffect(() => {
        const catUnits = UNITS[category];
        setFromUnit(catUnits[0].val);
        // Default target different from source if possible
        setToUnit(catUnits.length > 1 ? catUnits[1].val : catUnits[0].val);

        // Specific Defaults for better UX
        if (category === 'Area') {
            setFromUnit('m2');
            setToUnit('pyeong');
        } else if (category === 'Temperature') {
            setFromUnit('F');
            setToUnit('C');
        } else if (category === 'Weight') {
            setFromUnit('kg');
            setToUnit('lb');
        }

        setValue('');
        setResult('');
    }, [category]);

    const convert = () => {
        if (!value) {
            setResult('');
            return;
        }

        const val = parseFloat(value);
        if (isNaN(val)) return;

        let baseVal = 0;

        // Conversion Logic
        // Normalize everything to Base Unit (m, kg, m2, C) then to Target

        // 1. To Base
        if (category === 'Length') { // Base: m
            switch (fromUnit) {
                case 'm': baseVal = val; break;
                case 'cm': baseVal = val / 100; break;
                case 'mm': baseVal = val / 1000; break;
                case 'in': baseVal = val * 0.0254; break;
                case 'ft': baseVal = val * 0.3048; break;
                case 'yd': baseVal = val * 0.9144; break;
                case 'km': baseVal = val * 1000; break;
                case 'mi': baseVal = val * 1609.34; break;
            }
            // 2. From Base
            switch (toUnit) {
                case 'm': setResult(baseVal.toString()); break;
                case 'cm': setResult((baseVal * 100).toString()); break;
                case 'mm': setResult((baseVal * 1000).toString()); break;
                case 'in': setResult((baseVal / 0.0254).toFixed(4)); break;
                case 'ft': setResult((baseVal / 0.3048).toFixed(4)); break;
                case 'yd': setResult((baseVal / 0.9144).toFixed(4)); break;
                case 'km': setResult((baseVal / 1000).toString()); break;
                case 'mi': setResult((baseVal / 1609.34).toFixed(6)); break;
            }
        }
        else if (category === 'Weight') { // Base: kg
            switch (fromUnit) {
                case 'kg': baseVal = val; break;
                case 'g': baseVal = val / 1000; break;
                case 'lb': baseVal = val * 0.453592; break;
                case 'oz': baseVal = val * 0.0283495; break;
            }
            switch (toUnit) {
                case 'kg': setResult(baseVal.toString()); break;
                case 'g': setResult((baseVal * 1000).toString()); break;
                case 'lb': setResult((baseVal / 0.453592).toFixed(4)); break;
                case 'oz': setResult((baseVal / 0.0283495).toFixed(4)); break;
            }
        }
        else if (category === 'Area') { // Base: m2
            switch (fromUnit) {
                case 'm2': baseVal = val; break;
                case 'pyeong': baseVal = val * 3.305785; break;
                case 'ft2': baseVal = val * 0.092903; break;
                case 'ac': baseVal = val * 4046.86; break;
            }
            switch (toUnit) {
                case 'm2': setResult(baseVal.toString()); break;
                case 'pyeong': setResult((baseVal / 3.305785).toFixed(4)); break;
                case 'ft2': setResult((baseVal / 0.092903).toFixed(4)); break;
                case 'ac': setResult((baseVal / 4046.86).toFixed(6)); break;
            }
        }
        else if (category === 'Temperature') { // Base: C
            switch (fromUnit) {
                case 'C': baseVal = val; break;
                case 'F': baseVal = (val - 32) * 5 / 9; break;
                case 'K': baseVal = val - 273.15; break;
            }
            switch (toUnit) {
                case 'C': setResult(baseVal.toFixed(2)); break;
                case 'F': setResult(((baseVal * 9 / 5) + 32).toFixed(2)); break;
                case 'K': setResult((baseVal + 273.15).toFixed(2)); break;
            }
        }
    };

    useEffect(() => {
        convert();
    }, [value, fromUnit, toUnit, category]);

    return (
        <div className={styles.container}>
            {/* Category Tabs */}
            <div className={styles.tabs}>
                {(Object.keys(CATEGORIES) as Category[]).map((cat) => (
                    <button
                        key={cat}
                        className={`${styles.tab} ${category === cat ? styles.activeTab : ''}`}
                        onClick={() => setCategory(cat)}
                    >
                        {CATEGORIES[cat]}
                    </button>
                ))}
            </div>

            <div className={`${styles.card} glass-panel`}>
                <div className={styles.converterRow}>
                    <div className={styles.inputGroup}>
                        <label>입력 (From)</label>
                        <input
                            type="number"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="값 입력"
                            className={styles.input}
                        />
                        <select
                            value={fromUnit}
                            onChange={(e) => setFromUnit(e.target.value)}
                            className={styles.select}
                        >
                            {UNITS[category].map(u => <option key={u.val} value={u.val}>{u.label}</option>)}
                        </select>
                    </div>

                    <div className={styles.equalSign}>=</div>

                    <div className={styles.inputGroup}>
                        <label>결과 (To)</label>
                        <div className={styles.resultBox}>{result || '...'}</div>
                        <select
                            value={toUnit}
                            onChange={(e) => setToUnit(e.target.value)}
                            className={styles.select}
                        >
                            {UNITS[category].map(u => <option key={u.val} value={u.val}>{u.label}</option>)}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
