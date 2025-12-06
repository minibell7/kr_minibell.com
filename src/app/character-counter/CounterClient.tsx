'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function CounterClient() {
    const [text, setText] = useState('');

    const stats = {
        charsWithSpace: text.length,
        charsNoSpace: text.replace(/\s/g, '').length,
        words: text.trim() === '' ? 0 : text.trim().split(/\s+/).length,
        lines: text === '' ? 0 : text.split(/\n/).length,
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.statsGrid} glass-panel`}>
                <div className={styles.statItem}>
                    <div className={styles.statValue}>{stats.charsWithSpace}</div>
                    <div className={styles.statLabel}>Chars (with space)</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statValue}>{stats.charsNoSpace}</div>
                    <div className={styles.statLabel}>Chars (no space)</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statValue}>{stats.words}</div>
                    <div className={styles.statLabel}>Words</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statValue}>{stats.lines}</div>
                    <div className={styles.statLabel}>Lines</div>
                </div>
            </div>

            <div className={`${styles.inputArea} glass-panel`}>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type or paste your text here..."
                    className={styles.textarea}
                    spellCheck={false}
                />
            </div>
        </div>
    );
}
