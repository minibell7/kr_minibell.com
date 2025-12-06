import type { Metadata } from 'next';
import styles from './page.module.css';
import ThumbnailClient from './ThumbnailClient';

export const metadata: Metadata = {
    title: 'Free YouTube Thumbnail Downloader | Save HD Thumbnails',
    description: 'Download high-quality YouTube thumbnails (HD, SD, HQ) instantly. Free online tool, no software required. Just paste the URL.',
    keywords: ['youtube thumbnail downloader', 'save youtube thumbnail', 'get youtube thumbnail', 'youtube image extractor', 'hd thumbnail'],
    openGraph: {
        title: 'Free YouTube Thumbnail Downloader | minibell.com',
        description: 'Download high-quality YouTube thumbnails instantly. Free & Fast.',
        type: 'website',
    }
};

export default function YoutubeThumbnailPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>YouTube Thumbnail Downloader</h1>
            <p className={styles.description}>
                Instantly extract and download high-quality thumbnails from YouTube videos.
            </p>

            <ThumbnailClient />

            <section className={styles.seoSection}>
                <h2>Why Use a YouTube Thumbnail Downloader?</h2>
                <p>
                    YouTube thumbnails are the first thing viewers see, and they play a massive role in click-through rates. Sometimes, you might need to download a thumbnail from a video—perhaps to archive it, use it in a blog post, or analyze successful designs for inspiration. A <strong>YouTube Thumbnail Downloader</strong> makes this process instant and effortless.
                </p>
                <p>
                    Instead of taking a low-quality screenshot, our tool extracts the original high-resolution image files directly from YouTube's servers, ensuring you get the best possible quality available.
                </p>

                <h2>Available Thumbnail Qualities</h2>
                <p>Depending on the video, YouTube stores thumbnails in several resolutions. Our tool attempts to fetch them all:</p>
                <ul>
                    <li><strong>Max Resolution (HD):</strong> 1280x720 pixels. The highest quality available. Perfect for full-screen viewing or editing.</li>
                    <li><strong>Standard Definition (SD):</strong> 640x480 pixels. Good for blog posts or smaller previews.</li>
                    <li><strong>High Quality (HQ):</strong> 480x360 pixels. A standard fallback size.</li>
                    <li><strong>Medium Quality (MQ):</strong> 320x180 pixels. Suitable for small widgets or lists.</li>
                </ul>

                <h2>How to Download</h2>
                <ol>
                    <li><strong>Find the Video:</strong> Go to YouTube and copy the URL of the video you want (e.g., from the address bar or "Share" button).</li>
                    <li><strong>Paste URL:</strong> Enter the link into the input box on this page.</li>
                    <li><strong>Get Thumbnails:</strong> Click the button to retrieve all available image sizes.</li>
                    <li><strong>Save:</strong> Click "Download" on the version you want to save it to your device.</li>
                </ol>

                <h2>Legal & Ethical Usage</h2>
                <p>
                    While downloading thumbnails is technically simple, it's important to respect copyright laws. Thumbnails are the intellectual property of the content creator.
                </p>
                <ul>
                    <li><strong>Fair Use:</strong> Using a thumbnail for commentary, criticism, or educational purposes (like a blog post reviewing the video) often falls under fair use.</li>
                    <li><strong>Personal Use:</strong> Saving a thumbnail for your private collection or inspiration board is generally fine.</li>
                    <li><strong>Permission:</strong> If you plan to use the image commercially or as your own, you should seek permission from the original creator.</li>
                </ul>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. Why is the HD version missing?</h3>
                        <p>A. Not all videos have a 1280x720 thumbnail. If the creator uploaded a low-resolution image, the HD version won't exist. Our tool will show the highest quality available.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Does this work for YouTube Shorts?</h3>
                        <p>A. Yes! Just paste the URL of the Short, and it will extract the thumbnail just like a regular video.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Is it free?</h3>
                        <p>A. Yes, this tool is completely free and requires no registration or software installation.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
