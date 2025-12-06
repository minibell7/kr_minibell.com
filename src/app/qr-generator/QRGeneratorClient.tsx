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
                    placeholder="https://를 포함한 주소나 텍스트 입력"
                    className={styles.input}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') generateQR();
                    }}
                />
                <button onClick={generateQR} className={styles.generateBtn}>
                    QR 생성하기
                </button>
            </div>

            {qrCode && (
                <div className={`${styles.resultCard} glass-panel`}>
                    <div className={styles.qrPreview}>
                        <img src={qrCode} alt="생성된 QR 코드" />
                    </div>
                    <button onClick={handleDownload} className={styles.downloadBtn}>
                        이미지 다운로드 (PNG)
                    </button>
                    <p className={styles.guideText}>
                        * 다운로드 후 카메라로 스캔하여 테스트해보세요.
                    </p>
                </div>
            )}
        </div>
    );
}
