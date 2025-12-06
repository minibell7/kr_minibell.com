'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ThumbnailClient() {
    const [url, setUrl] = useState('');
    const [videoId, setVideoId] = useState<string | null>(null);

    const extractVideoId = (inputUrl: string) => {
        // Support various YouTube URL formats (standard, short, embed)
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = inputUrl.match(regExp);
        return (match && match[7].length === 11) ? match[7] : null;
    };

    const handleGenerate = () => {
        const id = extractVideoId(url);
        if (id) {
            setVideoId(id);
        } else {
            alert('올바른 유튜브 주소(URL)를 입력해주세요.');
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
            // Fallback
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
                    placeholder="여기에 유튜브 주소를 붙여넣으세요 (예: https://youtu.be/...)"
                    className={styles.input}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleGenerate();
                    }}
                />
                <button onClick={handleGenerate} className={styles.generateBtn}>
                    썸네일 추출
                </button>
            </div>

            {videoId && (
                <div className={styles.results}>
                    <div className={`${styles.resultCard} glass-panel`}>
                        <h3>최대 해상도 (HD / 1280x720)</h3>
                        <img
                            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                            alt="Max Resolution"
                        />
                        <button
                            onClick={() => downloadImage(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, 'maxres')}
                            className={styles.downloadBtn}
                        >
                            HD 다운로드
                        </button>
                    </div>

                    <div className={`${styles.resultCard} glass-panel`}>
                        <h3>표준 화질 (SD / 640x480)</h3>
                        <img
                            src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`}
                            alt="Standard Quality"
                        />
                        <button
                            onClick={() => downloadImage(`https://img.youtube.com/vi/${videoId}/sddefault.jpg`, 'sd')}
                            className={styles.downloadBtn}
                        >
                            SD 다운로드
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
