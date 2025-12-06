import type { Metadata } from 'next';
import styles from './page.module.css';
import ConverterClient from './ConverterClient';

export const metadata: Metadata = {
    title: 'Free WebP Converter | Convert JPG/PNG to WebP',
    description: 'Convert your images to WebP format online for free. Reduce file size without losing quality. Improve your website speed and SEO.',
    keywords: ['webp converter', 'jpg to webp', 'png to webp', 'image converter', 'compress image'],
    openGraph: {
        title: 'Free WebP Converter | minibell.com',
        description: 'Convert images to WebP instantly. Boost your site speed.',
        type: 'website',
    }
};

export default function ImageConverterPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>WebP Image Converter</h1>
            <p className={styles.description}>
                Convert images to WebP to optimize website speed.
            </p>

            <ConverterClient />

            <section className={styles.seoSection}>
                <h2>Why Convert Images to WebP?</h2>
                <p>
                    In the world of web performance, every kilobyte counts. Large image files are the #1 culprit for slow-loading websites, which frustrates users and hurts SEO rankings. <strong>WebP</strong> is a modern image format developed by Google that solves this problem. It provides superior compression compared to older formats like JPEG and PNG, without significantly sacrificing quality.
                </p>
                <p>
                    Our <strong>WebP Image Converter</strong> allows you to easily transform your existing images into this optimized format, helping your website load faster and score higher on Core Web Vitals.
                </p>

                <h2>Benefits of WebP</h2>
                <ul>
                    <li><strong>Smaller File Sizes:</strong> WebP images are typically 25-34% smaller than comparable JPEG and PNG files. This means faster downloads and less data usage for your visitors.</li>
                    <li><strong>High Quality:</strong> WebP supports both lossy and lossless compression, as well as transparency (alpha channel), making it a versatile replacement for both JPG and PNG.</li>
                    <li><strong>SEO Boost:</strong> Google explicitly favors fast-loading sites. Using next-gen formats like WebP is a recommended practice in PageSpeed Insights.</li>
                    <li><strong>Broad Support:</strong> All modern browsers (Chrome, Firefox, Edge, Safari) fully support WebP.</li>
                </ul>

                <h2>How to Use This Tool</h2>
                <ol>
                    <li><strong>Select Image:</strong> Click the upload area to choose a JPG or PNG file from your device.</li>
                    <li><strong>Automatic Conversion:</strong> The tool instantly processes the image in your browser.</li>
                    <li><strong>Compare:</strong> See the original file size vs. the new WebP file size to appreciate the savings.</li>
                    <li><strong>Download:</strong> Click the button to save your optimized WebP image.</li>
                </ol>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. Will I lose image quality?</h3>
                        <p>A. WebP is designed to minimize quality loss. For most web uses, the difference is visually indistinguishable, while the file size savings are significant.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Is my data safe?</h3>
                        <p>A. Yes. This converter runs entirely in your browser using client-side technology. Your photos are never uploaded to our servers, ensuring complete privacy.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Can I convert WebP back to JPG?</h3>
                        <p>A. While this tool focuses on creating WebP files, many image viewers and editors now support opening and saving WebP files as other formats if needed.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
