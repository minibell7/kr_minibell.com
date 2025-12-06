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
                    <div className={styles.statValue}>{stats.charsWithSpace.toLocaleString()}</div>
                    <div className={styles.statLabel}>공백 포함</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statValue}>{stats.charsNoSpace.toLocaleString()}</div>
                    <div className={styles.statLabel}>공백 제외</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statValue}>{stats.words.toLocaleString()}</div>
                    <div className={styles.statLabel}>단어 수</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statValue}>{stats.lines.toLocaleString()}</div>
                    <div className={styles.statLabel}>줄 수</div>
                </div>
            </div>

            <div className={`${styles.inputArea} glass-panel`}>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="여기에 텍스트를 입력하거나 붙여넣으세요..."
                    className={styles.textarea}
                    spellCheck={false}
                />
            </div>
        </div>
    );
}
