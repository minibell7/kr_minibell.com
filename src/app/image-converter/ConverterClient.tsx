'use client';

import { useState, useRef } from 'react';
import styles from './page.module.css';

export default function ConverterClient() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [convertedImage, setConvertedImage] = useState<string | null>(null);
    const [originalSize, setOriginalSize] = useState<string>('');
    const [convertedSize, setConvertedSize] = useState<string>('');

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setOriginalSize((file.size / 1024).toFixed(2) + ' KB');
            const reader = new FileReader();
            reader.onload = (event) => {
                const imgUrl = event.target?.result as string;
                setSelectedImage(imgUrl);
                convertToWebP(imgUrl);
            };
            reader.readAsDataURL(file);
        }
    };

    const convertToWebP = (imgUrl: string) => {
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                const webpUrl = canvas.toDataURL('image/webp', 0.8); // 0.8 quality
                setConvertedImage(webpUrl);

                // Calculate estimated size
                const head = 'data:image/webp;base64,';
                const size = Math.round((webpUrl.length - head.length) * 3 / 4);
                setConvertedSize((size / 1024).toFixed(2) + ' KB');
            }
        };
    };

    const downloadWebP = () => {
        if (convertedImage) {
            const link = document.createElement('a');
            link.href = convertedImage;
            link.download = 'converted-image.webp';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.uploadArea} glass-panel`}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className={styles.fileInput}
                    id="webp-upload"
                />
                <label htmlFor="webp-upload" className={styles.uploadLabel}>
                    {selectedImage ? (
                        <img src={selectedImage} alt="Preview" className={styles.previewImage} />
                    ) : (
                        <div className={styles.uploadPlaceholder}>
                            <span>Click to Upload JPG/PNG</span>
                            <span className={styles.subText}>Drag & Drop supported</span>
                        </div>
                    )}
                </label>
            </div>

            {convertedImage && (
                <div className={`${styles.resultCard} glass-panel`}>
                    <div className={styles.comparison}>
                        <div className={styles.stat}>
                            <span className={styles.label}>Original</span>
                            <span className={styles.value}>{originalSize}</span>
                        </div>
                        <div className={styles.arrow}>→</div>
                        <div className={styles.stat}>
                            <span className={styles.label}>WebP</span>
                            <span className={styles.value}>{convertedSize}</span>
                        </div>
                    </div>

                    <button onClick={downloadWebP} className={styles.downloadBtn}>
                        Download WebP
                    </button>
                </div>
            )}
        </div>
    );
}
