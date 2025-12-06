import type { Metadata } from 'next';
import styles from './page.module.css';
import FaviconGeneratorClient from './FaviconGeneratorClient';

export const metadata: Metadata = {
    title: 'Free Favicon Generator | Convert Images to PNG Icons',
    description: 'Convert any image to high-quality favicons (16x16, 32x32, 192x192, 512x512). Free online tool, no upload required. Download instantly.',
    keywords: ['favicon generator', 'create favicon', 'image to favicon', 'png icon converter', 'website icon maker'],
    openGraph: {
        title: 'Free Favicon Generator | minibell.com',
        description: 'Convert any image to high-quality favicons instantly. Free & Secure.',
        type: 'website',
    }
};

export default function FaviconGeneratorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Free Favicon Generator</h1>
            <p className={styles.description}>
                Upload an image to convert it into favicons (PNG) of various sizes.
            </p>

            <FaviconGeneratorClient />

            <section className={styles.seoSection}>
                <h2>Why Use a Favicon Generator?</h2>
                <p>
                    A favicon (short for "favorite icon") is the small image that appears in browser tabs, bookmark lists, and history logs. While tiny, it plays a huge role in brand recognition and user experience. A professional-looking favicon makes your website look trustworthy and polished. A <strong>Favicon Generator</strong> automates the process of creating these specific icon sizes from a single image.
                </p>
                <p>
                    Instead of manually resizing and cropping images in Photoshop, our tool instantly generates all the standard sizes you need for modern web development, ensuring your logo looks crisp on every device.
                </p>

                <h2>Supported Sizes & Formats</h2>
                <p>We generate high-quality PNG files in the following standard dimensions:</p>
                <ul>
                    <li><strong>16x16 px:</strong> The classic size for browser tabs and address bars.</li>
                    <li><strong>32x32 px:</strong> Used by some browsers for higher DPI displays and taskbar shortcuts.</li>
                    <li><strong>192x192 px:</strong> Standard icon for Android home screen shortcuts and PWA (Progressive Web App) manifests.</li>
                    <li><strong>512x512 px:</strong> Large icon for app stores and high-resolution splash screens.</li>
                </ul>

                <h2>How to Create the Perfect Favicon</h2>
                <ol>
                    <li><strong>Choose a Simple Image:</strong> Favicons are small. Avoid complex details or text. A simple logo or initial works best.</li>
                    <li><strong>Use a Square Image:</strong> While our tool handles resizing, starting with a square image (1:1 ratio) yields the best results.</li>
                    <li><strong>Upload & Convert:</strong> Drag and drop your file. We handle the rest.</li>
                    <li><strong>Download:</strong> Save the generated PNGs and upload them to your website's root directory or assets folder.</li>
                </ol>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. What file formats can I upload?</h3>
                        <p>A. You can upload any standard image format, including JPG, PNG, and GIF. The tool will convert them into optimized PNG favicons.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Why do I need multiple sizes?</h3>
                        <p>A. Different devices and browsers require different resolutions. Providing multiple sizes ensures your icon looks sharp whether it's on a 4K monitor or a mobile phone screen.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Is this tool safe?</h3>
                        <p>A. Absolutely. Your images are processed locally within your browser. We do not upload or store your files on any server.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
