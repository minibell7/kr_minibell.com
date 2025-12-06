'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ThumbnailClient() {
    const [url, setUrl] = useState('');
    const [videoId, setVideoId] = useState<string | null>(null);

    const extractVideoId = (inputUrl: string) => {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = inputUrl.match(regExp);
        return (match && match[7].length === 11) ? match[7] : null;
    };

    const handleGenerate = () => {
        const id = extractVideoId(url);
        if (id) {
            setVideoId(id);
        } else {
            alert('Invalid YouTube URL');
        }
    };

    const downloadImage = async (imageUrl: string, quality: string) => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `youtube-thumbnail-${quality}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Download failed:', error);
            // Fallback for cross-origin issues if direct download fails
            window.open(imageUrl, '_blank');
        }
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.inputArea} glass-panel`}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste YouTube URL here (e.g., https://youtu.be/...)"
                    className={styles.input}
                />
                <button onClick={handleGenerate} className={styles.generateBtn}>
                    Get Thumbnails
                </button>
            </div>

            {videoId && (
                <div className={styles.results}>
                    <div className={`${styles.resultCard} glass-panel`}>
                        <h3>Max Resolution (HD)</h3>
                        <img
                            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                            alt="Max Resolution"
                        />
                        <button
                            onClick={() => downloadImage(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, 'maxres')}
                            className={styles.downloadBtn}
                        >
                            Download HD
                        </button>
                    </div>

                    <div className={`${styles.resultCard} glass-panel`}>
                        <h3>Standard Quality</h3>
                        <img
                            src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`}
                            alt="Standard Quality"
                        />
                        <button
                            onClick={() => downloadImage(`https://img.youtube.com/vi/${videoId}/sddefault.jpg`, 'sd')}
                            className={styles.downloadBtn}
                        >
                            Download SD
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
