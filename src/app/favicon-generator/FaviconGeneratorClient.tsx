'use client';

import { useState, useRef } from 'react';
import styles from './page.module.css';

export default function FaviconGeneratorClient() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [favicons, setFavicons] = useState<{ size: number; url: string }[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imgUrl = event.target?.result as string;
                setSelectedImage(imgUrl);
                generateFavicons(imgUrl);
            };
            reader.readAsDataURL(file);
        }
    };

    const generateFavicons = (imgUrl: string) => {
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => {
            const sizes = [16, 32, 192, 512];
            const newFavicons = sizes.map((size) => {
                const canvas = document.createElement('canvas');
                canvas.width = size;
                canvas.height = size;
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.drawImage(img, 0, 0, size, size);
                    return { size, url: canvas.toDataURL('image/png') };
                }
                return { size, url: '' };
            });
            setFavicons(newFavicons);
        };
    };

    const downloadFavicon = (url: string, size: number) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = `favicon-${size}x${size}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.uploadArea} glass-panel`}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className={styles.fileInput}
                    id="file-upload"
                />
                <label htmlFor="file-upload" className={styles.uploadLabel}>
                    {selectedImage ? (
                        <img src={selectedImage} alt="Preview" className={styles.previewImage} />
                    ) : (
                        <div className={styles.uploadPlaceholder}>
                            <span>Select Image or Drag & Drop</span>
                        </div>
                    )}
                </label>
            </div>

            {favicons.length > 0 && (
                <div className={styles.results}>
                    {favicons.map((favicon) => (
                        <div key={favicon.size} className={`${styles.resultCard} glass-panel`}>
                            <div className={styles.iconPreview}>
                                <img src={favicon.url} alt={`${favicon.size}x${favicon.size}`} width={favicon.size > 64 ? 64 : favicon.size} height={favicon.size > 64 ? 64 : favicon.size} />
                            </div>
                            <div className={styles.iconInfo}>
                                <h3>{favicon.size}x{favicon.size}</h3>
                                <button
                                    onClick={() => downloadFavicon(favicon.url, favicon.size)}
                                    className={styles.downloadBtn}
                                >
                                    Download PNG
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
    );
}
