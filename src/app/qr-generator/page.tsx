import type { Metadata } from 'next';
import styles from './page.module.css';
import QRGeneratorClient from './QRGeneratorClient';

export const metadata: Metadata = {
    title: 'Free QR Code Generator | Create Custom QR Codes Instantly',
    description: 'Generate high-quality QR codes for your URLs, text, or contact info instantly. Free, fast, and no sign-up required. Download as PNG.',
    keywords: ['QR code generator', 'free QR code', 'create QR code', 'QR code maker', 'online QR tool'],
    openGraph: {
        title: 'Free QR Code Generator | minibell.com',
        description: 'Create custom QR codes instantly for free. No sign-up required.',
        type: 'website',
    }
};

export default function QRGeneratorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Free QR Code Generator</h1>
            <p className={styles.description}>
                Enter a URL to instantly generate a QR code. Forever free, no installation required.
            </p>

            <QRGeneratorClient />

            <section className={styles.seoSection}>
                <h2>Why Use a QR Code Generator?</h2>
                <p>
                    Quick Response (QR) codes have become an integral part of modern communication. From restaurant menus and Wi-Fi access to marketing campaigns and digital payments, these 2D barcodes bridge the physical and digital worlds seamlessly. A <strong>QR Code Generator</strong> allows you to create these codes instantly, making it easier for people to access your content with a simple scan.
                </p>
                <p>
                    Our free online tool is designed for speed and simplicity. Whether you need a QR code for your business card, a flyer, or a website, you can generate high-quality, scannable codes in seconds without any technical knowledge.
                </p>

                <h2>How to Use This Tool</h2>
                <ol>
                    <li><strong>Enter Content:</strong> Type or paste the URL, text, or contact information you want to encode.</li>
                    <li><strong>Generate:</strong> The QR code is created instantly as you type.</li>
                    <li><strong>Download:</strong> Click the "Download PNG" button to save the image to your device.</li>
                    <li><strong>Test:</strong> Always scan the code with your phone camera to ensure it works before printing.</li>
                </ol>

                <h2>Key Features</h2>
                <ul>
                    <li><strong>100% Free & Unlimited:</strong> Create as many QR codes as you need. No hidden fees, no expiration dates.</li>
                    <li><strong>High-Resolution PNG:</strong> Download crisp, clear images that look great on screens and in print.</li>
                    <li><strong>Privacy First:</strong> Your data is processed locally in your browser. We do not track your links or store your information.</li>
                    <li><strong>Universal Compatibility:</strong> Our codes work with all standard QR code scanners and smartphone cameras (iOS & Android).</li>
                </ul>

                <h2>Creative Ways to Use QR Codes</h2>
                <ul>
                    <li><strong>Wi-Fi Access:</strong> Create a code that automatically connects guests to your Wi-Fi network.</li>
                    <li><strong>Business Cards:</strong> Link to your portfolio, LinkedIn profile, or vCard.</li>
                    <li><strong>Events:</strong> Link to RSVP forms, maps, or event schedules.</li>
                    <li><strong>Product Packaging:</strong> Link to user manuals, video tutorials, or customer reviews.</li>
                </ul>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. Do these QR codes expire?</h3>
                        <p>A. No. The QR codes generated here are "static," meaning the data is directly embedded in the image. They will work forever as long as the link you provided is active.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Can I use these for commercial purposes?</h3>
                        <p>A. Yes! You are free to use the generated QR codes for any purpose, including business cards, flyers, and merchandise.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Why isn't my QR code scanning?</h3>
                        <p>A. Ensure there is enough contrast (black on white is best) and that the code isn't too small or blurry. Also, check if the URL you entered is correct.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
