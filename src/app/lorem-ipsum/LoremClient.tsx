'use client';

import { useState } from 'react';
import styles from './page.module.css';

const LOREM_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.

Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst. Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Quisque id mi. Ut tincidunt tincidunt erat. Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue.

Suspendisse potenti. In non magna eget metus sodales mollis. Ut semper, quam et accumsan scelerisque, ipsum orci luctus nisi, at dapibus velit ipsum et lorem. Sed sed magna. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero. Praesent nonummy mi in odio. Nunc interdum lacus sit amet orci. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Morbi mollis tellus ac sapien. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Fusce vel dui. Sed in libero ut nibh placerat accumsan.

Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Runcus.`;

export default function LoremClient() {
    const [count, setCount] = useState(3);
    const [type, setType] = useState<'paragraphs' | 'words'>('paragraphs');
    const [generatedText, setGeneratedText] = useState('');
    const [copied, setCopied] = useState(false);

    const generateLorem = () => {
        const paragraphs = LOREM_TEXT.split('\n\n');
        let result = '';

        if (type === 'paragraphs') {
            // Repeat paragraphs if count > available paragraphs
            let output = [];
            for (let i = 0; i < count; i++) {
                output.push(paragraphs[i % paragraphs.length]);
            }
            result = output.join('\n\n');
        } else {
            // Words
            const allWords = LOREM_TEXT.replace(/\n/g, ' ').split(' ');
            result = allWords.slice(0, count).join(' ');
        }

        setGeneratedText(result);
        setCopied(false);
    };

    const copyToClipboard = () => {
        if (!generatedText) return;
        navigator.clipboard.writeText(generatedText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Generate initial text
    useState(() => {
        generateLorem();
    });

    return (
        <div className={`${styles.card} glass-panel`}>
            <div className={styles.controls}>
                <div className={styles.inputGroup}>
                    <label>Count</label>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        value={count}
                        onChange={(e) => setCount(Math.max(1, parseInt(e.target.value)))}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Type</label>
                    <div className={styles.radioGroup}>
                        <label className={`${styles.radioLabel} ${type === 'paragraphs' ? styles.active : ''}`}>
                            <input
                                type="radio"
                                checked={type === 'paragraphs'}
                                onChange={() => setType('paragraphs')}
                            />
                            Paragraphs
                        </label>
                        <label className={`${styles.radioLabel} ${type === 'words' ? styles.active : ''}`}>
                            <input
                                type="radio"
                                checked={type === 'words'}
                                onChange={() => setType('words')}
                            />
                            Words
                        </label>
                    </div>
                </div>
                <button className={styles.generateButton} onClick={generateLorem}>
                    Generate
                </button>
            </div>

            <div className={styles.outputArea}>
                <textarea
                    value={generatedText}
                    readOnly
                    className={styles.textarea}
                />
                <button
                    className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
                    onClick={copyToClipboard}
                >
                    {copied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
            </div>
        </div>
    );
}
