import type { Metadata } from 'next';
import styles from './page.module.css';
import OGGeneratorClient from './OGGeneratorClient';

export const metadata: Metadata = {
    title: 'Free Open Graph Generator | Preview Social Media Cards',
    description: 'Create and preview Open Graph (OG) meta tags for Facebook, Twitter, LinkedIn, and more. Optimize your link previews instantly.',
    keywords: ['open graph generator', 'og tag generator', 'social media preview', 'meta tag generator', 'seo tool'],
    openGraph: {
        title: 'Free Open Graph Generator | minibell.com',
        description: 'Create and preview Open Graph meta tags instantly. Optimize your social media sharing.',
        type: 'website',
    }
};

export default function OGGeneratorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Open Graph Generator</h1>
            <p className={styles.description}>
                Create preview cards and generate meta tags for social media sharing.
            </p>

            <OGGeneratorClient />

            <section className={styles.seoSection}>
                <h2>What is Open Graph (OG)?</h2>
                <p>
                    Have you ever shared a link on Facebook, Twitter, or LinkedIn and noticed how it automatically turns into a beautiful card with an image, title, and description? That magic is powered by <strong>Open Graph (OG) meta tags</strong>.
                </p>
                <p>
                    Originally created by Facebook, the Open Graph protocol is now the industry standard for how URLs are displayed on social media. Without these tags, social platforms often guess what to show, which can result in broken images or irrelevant text. Our <strong>Open Graph Generator</strong> helps you create these tags perfectly every time.
                </p>

                <h2>Why You Need This Tool</h2>
                <ul>
                    <li><strong>Control Your Brand:</strong> Decide exactly what image and text people see when they share your content.</li>
                    <li><strong>Increase Click-Through Rates (CTR):</strong> Eye-catching, well-formatted preview cards attract significantly more clicks than plain text links.</li>
                    <li><strong>Professionalism:</strong> A broken or missing preview looks amateurish. Optimized tags signal quality and trustworthiness.</li>
                    <li><strong>Debugging:</strong> Preview how your content will look before you publish it.</li>
                </ul>

                <h2>Key Tags Explained</h2>
                <ul>
                    <li><code>og:title</code>: The headline of your content. Keep it catchy and under 60 characters.</li>
                    <li><code>og:description</code>: A brief summary (2-4 sentences) that entices users to click.</li>
                    <li><code>og:image</code>: The most important tag! Use a high-quality image (recommended size: 1200x630 pixels) to grab attention.</li>
                    <li><code>og:url</code>: The canonical URL of the page.</li>
                </ul>

                <h2>How to Use</h2>
                <ol>
                    <li><strong>Enter Details:</strong> Fill in the title, description, and the URL of your featured image.</li>
                    <li><strong>Preview:</strong> Watch the live preview card update instantly to see how it will look on a feed.</li>
                    <li><strong>Generate Code:</strong> Copy the generated HTML meta tags.</li>
                    <li><strong>Install:</strong> Paste the code into the <code>&lt;head&gt;</code> section of your website's HTML.</li>
                </ol>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. Do I need these tags for SEO?</h3>
                        <p>A. While OG tags don't directly affect Google search rankings, they heavily influence social media engagement. Higher engagement (likes, shares, clicks) can indirectly boost your SEO performance.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Why isn't my image showing up on Facebook?</h3>
                        <p>A. Facebook caches images. If you updated your tags but see the old image, use the Facebook Sharing Debugger tool to force a scrape of your URL.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Can I use this for Twitter?</h3>
                        <p>A. Yes! While Twitter has its own `twitter:card` tags, it also falls back to Open Graph tags if Twitter-specific ones are missing. Our tool covers the essentials.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
