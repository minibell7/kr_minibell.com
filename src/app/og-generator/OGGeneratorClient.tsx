'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function OGGeneratorClient() {
    const [title, setTitle] = useState('나의 멋진 웹사이트');
    const [description, setDescription] = useState('여기에 사이트에 대한 설명을 적어주세요. 사람들의 클릭을 유도할 수 있는 매력적인 문구가 좋습니다.');
    const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/1200x630');
    const [siteName, setSiteName] = useState('사이트 이름');
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
        alert('코드가 클립보드에 복사되었습니다!');
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={`${styles.form} glass-panel`}>
                    <div className={styles.inputGroup}>
                        <label>페이지 제목 (og:title)</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={styles.input}
                            placeholder="예: 맛집 탐방 블로그"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>설명 (og:description)</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={styles.textarea}
                            rows={3}
                            placeholder="예: 서울 강남의 숨겨진 맛집을 소개합니다."
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>이미지 URL (og:image)</label>
                        <input
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            className={styles.input}
                            placeholder="https://..."
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>사이트 이름 (og:site_name)</label>
                        <input
                            type="text"
                            value={siteName}
                            onChange={(e) => setSiteName(e.target.value)}
                            className={styles.input}
                            placeholder="예: 홍길동의 일상"
                        />
                    </div>
                </div>

                <div className={styles.previewSection}>
                    <h2 className={styles.sectionTitle}>미리보기 (Preview)</h2>
                    <div className={styles.cardPreview}>
                        <div className={styles.cardImage} style={{ backgroundImage: `url(${imageUrl})` }} />
                        <div className={styles.cardContent}>
                            <div className={styles.cardSite}>{siteName.toUpperCase()}</div>
                            <div className={styles.cardTitle}>{title}</div>
                            <div className={styles.cardDesc}>{description}</div>
                        </div>
                    </div>

                    <h2 className={styles.sectionTitle}>생성된 태그 (Copy & Paste)</h2>
                    <div className={`${styles.codeBlock} glass-panel`}>
                        <pre>{generatedCode}</pre>
                        <button onClick={copyToClipboard} className={styles.copyBtn}>
                            복사하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
