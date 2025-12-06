'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function OGGeneratorClient() {
    const [title, setTitle] = useState('My Awesome Page');
    const [description, setDescription] = useState('This is a description of my page content.');
    const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/1200x630');
    const [siteName, setSiteName] = useState('My Site');
    const [generatedCode, setGeneratedCode] = useState('');

    useEffect(() => {
        const code = `
<meta property="og:type" content="website" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${imageUrl}" />
<meta property="og:site_name" content="${siteName}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="${imageUrl}" />
    `.trim();
        setGeneratedCode(code);
    }, [title, description, imageUrl, siteName]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedCode);
        alert('Copied to clipboard!');
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={`${styles.form} glass-panel`}>
                    <div className={styles.inputGroup}>
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={styles.textarea}
                            rows={3}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Image URL</label>
                        <input
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Site Name</label>
                        <input
                            type="text"
                            value={siteName}
                            onChange={(e) => setSiteName(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                </div>

                <div className={styles.previewSection}>
                    <h2 className={styles.sectionTitle}>Preview</h2>
                    <div className={styles.cardPreview}>
                        <div className={styles.cardImage} style={{ backgroundImage: `url(${imageUrl})` }} />
                        <div className={styles.cardContent}>
                            <div className={styles.cardSite}>{siteName.toUpperCase()}</div>
                            <div className={styles.cardTitle}>{title}</div>
                            <div className={styles.cardDesc}>{description}</div>
                        </div>
                    </div>

                    <h2 className={styles.sectionTitle}>Code</h2>
                    <div className={`${styles.codeBlock} glass-panel`}>
                        <pre>{generatedCode}</pre>
                        <button onClick={copyToClipboard} className={styles.copyBtn}>
                            Copy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
