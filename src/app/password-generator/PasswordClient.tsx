'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './page.module.css';

export default function PasswordClient() {
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');
    const [copied, setCopied] = useState(false);

    const generatePassword = useCallback(() => {
        let charset = '';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeNumbers) charset += '0123456789';
        if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        if (charset === '') {
            setPassword('');
            return;
        }

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            newPassword += charset[randomIndex];
        }
        setPassword(newPassword);
        setCopied(false);
    }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    const copyToClipboard = () => {
        if (!password) return;
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`${styles.card} glass-panel`}>
            <div className={styles.displayArea}>
                <input
                    type="text"
                    value={password}
                    readOnly
                    className={styles.passwordDisplay}
                />
                <button
                    className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
                    onClick={copyToClipboard}
                    title="Copy to Clipboard"
                >
                    {copied ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    )}
                </button>
            </div>

            <div className={styles.controls}>
                <div className={styles.controlGroup}>
                    <label>Password Length: {length}</label>
                    <input
                        type="range"
                        min="4"
                        max="50"
                        value={length}
                        onChange={(e) => setLength(parseInt(e.target.value))}
                        className={styles.slider}
                    />
                </div>

                <div className={styles.optionsGrid}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={includeUppercase}
                            onChange={(e) => setIncludeUppercase(e.target.checked)}
                        />
                        <span>Uppercase (A-Z)</span>
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={includeLowercase}
                            onChange={(e) => setIncludeLowercase(e.target.checked)}
                        />
                        <span>Lowercase (a-z)</span>
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={(e) => setIncludeNumbers(e.target.checked)}
                        />
                        <span>Numbers (0-9)</span>
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={(e) => setIncludeSymbols(e.target.checked)}
                        />
                        <span>Symbols (!@#$)</span>
                    </label>
                </div>

                <button className={styles.generateButton} onClick={generatePassword}>
                    Generate New Password
                </button>
            </div>
        </div>
    );
}
