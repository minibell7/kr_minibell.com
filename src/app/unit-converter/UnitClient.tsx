'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

type Category = 'Length' | 'Weight' | 'Area' | 'Temperature';

const UNITS: Record<Category, string[]> = {
    Length: ['Meter (m)', 'Centimeter (cm)', 'Inch (in)', 'Foot (ft)', 'Yard (yd)', 'Kilometer (km)', 'Mile (mi)'],
    Weight: ['Kilogram (kg)', 'Gram (g)', 'Pound (lb)', 'Ounce (oz)'],
    Area: ['Square Meter (m²)', 'Pyeong (pyeong)', 'Square Foot (ft²)', 'Acre (ac)'],
    Temperature: ['Celsius (°C)', 'Fahrenheit (°F)', 'Kelvin (K)']
};

export default function UnitClient() {
    const [category, setCategory] = useState<Category>('Length');
    const [fromUnit, setFromUnit] = useState(UNITS['Length'][3]); // Foot
    const [toUnit, setToUnit] = useState(UNITS['Length'][0]); // Meter
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    // Reset units when category changes
    useEffect(() => {
        if (category === 'Length') {
            setFromUnit(UNITS['Length'][3]); // Foot
            setToUnit(UNITS['Length'][0]); // Meter
        } else if (category === 'Weight') {
            setFromUnit(UNITS['Weight'][2]); // Pound
            setToUnit(UNITS['Weight'][0]); // Kilogram
        } else if (category === 'Temperature') {
            setFromUnit(UNITS['Temperature'][1]); // Fahrenheit
            setToUnit(UNITS['Temperature'][0]); // Celsius
        } else if (category === 'Area') {
            setFromUnit(UNITS['Area'][2]); // Square Foot
            setToUnit(UNITS['Area'][0]); // Square Meter
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

        // Convert to base unit first
        // Base units: Meter, Kilogram, Square Meter, Celsius
        if (category === 'Length') {
            // To Meter
            if (fromUnit.includes('(m)')) baseVal = val;
            else if (fromUnit.includes('(cm)')) baseVal = val / 100;
            else if (fromUnit.includes('(in)')) baseVal = val * 0.0254;
            else if (fromUnit.includes('(ft)')) baseVal = val * 0.3048;
            else if (fromUnit.includes('(yd)')) baseVal = val * 0.9144;
            else if (fromUnit.includes('(km)')) baseVal = val * 1000;
            else if (fromUnit.includes('(mi)')) baseVal = val * 1609.34;

            // From Meter to Target
            if (toUnit.includes('(m)')) setResult(baseVal.toString());
            else if (toUnit.includes('(cm)')) setResult((baseVal * 100).toString());
            else if (toUnit.includes('(in)')) setResult((baseVal / 0.0254).toFixed(4));
            else if (toUnit.includes('(ft)')) setResult((baseVal / 0.3048).toFixed(4));
            else if (toUnit.includes('(yd)')) setResult((baseVal / 0.9144).toFixed(4));
            else if (toUnit.includes('(km)')) setResult((baseVal / 1000).toString());
            else if (toUnit.includes('(mi)')) setResult((baseVal / 1609.34).toFixed(6));
        }
        else if (category === 'Weight') {
            // To Kilogram
            if (fromUnit.includes('(kg)')) baseVal = val;
            else if (fromUnit.includes('(g)')) baseVal = val / 1000;
            else if (fromUnit.includes('(lb)')) baseVal = val * 0.453592;
            else if (fromUnit.includes('(oz)')) baseVal = val * 0.0283495;

            // From Kilogram to Target
            if (toUnit.includes('(kg)')) setResult(baseVal.toString());
            else if (toUnit.includes('(g)')) setResult((baseVal * 1000).toString());
            else if (toUnit.includes('(lb)')) setResult((baseVal / 0.453592).toFixed(4));
            else if (toUnit.includes('(oz)')) setResult((baseVal / 0.0283495).toFixed(4));
        }
        else if (category === 'Area') {
            // To Square Meter
            if (fromUnit.includes('(m²)')) baseVal = val;
            else if (fromUnit.includes('(pyeong)')) baseVal = val * 3.305785;
            else if (fromUnit.includes('(ft²)')) baseVal = val * 0.092903;
            else if (fromUnit.includes('(ac)')) baseVal = val * 4046.86;

            // From Square Meter to Target
            if (toUnit.includes('(m²)')) setResult(baseVal.toString());
            else if (toUnit.includes('(pyeong)')) setResult((baseVal / 3.305785).toFixed(4));
            else if (toUnit.includes('(ft²)')) setResult((baseVal / 0.092903).toFixed(4));
            else if (toUnit.includes('(ac)')) setResult((baseVal / 4046.86).toFixed(6));
        }
        else if (category === 'Temperature') {
            // To Celsius
            if (fromUnit.includes('(°C)')) baseVal = val;
            else if (fromUnit.includes('(°F)')) baseVal = (val - 32) * 5 / 9;
            else if (fromUnit.includes('(K)')) baseVal = val - 273.15;

            // From Celsius to Target
            if (toUnit.includes('(°C)')) setResult(baseVal.toFixed(2));
            else if (toUnit.includes('(°F)')) setResult(((baseVal * 9 / 5) + 32).toFixed(2));
            else if (toUnit.includes('(K)')) setResult((baseVal + 273.15).toFixed(2));
        }
    };

    useEffect(() => {
        convert();
    }, [value, fromUnit, toUnit, category]);

    return (
        <div className={styles.container}>
            {/* Category Tabs */}
            <div className={styles.tabs}>
                {(Object.keys(UNITS) as Category[]).map((cat) => (
                    <button
                        key={cat}
                        className={`${styles.tab} ${category === cat ? styles.activeTab : ''}`}
                        onClick={() => setCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className={`${styles.card} glass-panel`}>
                <div className={styles.converterRow}>
                    <div className={styles.inputGroup}>
                        <label>From</label>
                        <input
                            type="number"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Enter value"
                            className={styles.input}
                        />
                        <select
                            value={fromUnit}
                            onChange={(e) => setFromUnit(e.target.value)}
                            className={styles.select}
                        >
                            {UNITS[category].map(u => <option key={u} value={u}>{u}</option>)}
                        </select>
                    </div>

                    <div className={styles.equalSign}>=</div>

                    <div className={styles.inputGroup}>
                        <label>To</label>
                        <div className={styles.resultBox}>{result || '...'}</div>
                        <select
                            value={toUnit}
                            onChange={(e) => setToUnit(e.target.value)}
                            className={styles.select}
                        >
                            {UNITS[category].map(u => <option key={u} value={u}>{u}</option>)}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
