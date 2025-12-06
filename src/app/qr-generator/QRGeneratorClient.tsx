'use client';

import { useState } from 'react';
import QRCode from 'qrcode';
import styles from './page.module.css';

export default function QRGeneratorClient() {
    const [url, setUrl] = useState('');
    const [qrCode, setQrCode] = useState<string | null>(null);

    const generateQR = async () => {
        if (!url) return;
        try {
            const dataUrl = await QRCode.toDataURL(url, {
                width: 400,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#ffffff',
                },
            });
            setQrCode(dataUrl);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDownload = () => {
        if (qrCode) {
            const link = document.createElement('a');
            link.href = qrCode;
            link.download = 'qrcode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.inputArea} glass-panel`}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com"
                    className={styles.input}
                />
                <button onClick={generateQR} className={styles.generateBtn}>
                    Generate
                </button>
            </div>

            {qrCode && (
                <div className={`${styles.resultCard} glass-panel`}>
                    <div className={styles.qrPreview}>
                        <img src={qrCode} alt="QR Code" />
                    </div>
                    <button onClick={handleDownload} className={styles.downloadBtn}>
                        Download PNG
                    </button>
                </div>
            )}
        </div>
    );
}
