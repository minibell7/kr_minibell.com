import type { Metadata } from 'next';
import styles from './page.module.css';
import CounterClient from './CounterClient';

export const metadata: Metadata = {
    title: 'Free Character Counter | Word & Letter Count Tool',
    description: 'Calculate characters, words, and lines instantly. Check text length for SEO, social media posts, and essays. Free online tool.',
    keywords: ['character counter', 'word counter', 'letter count', 'text length', 'online counter'],
    openGraph: {
        title: 'Free Character Counter | minibell.com',
        description: 'Count characters and words instantly. Perfect for writers and marketers.',
        type: 'website',
    }
};

export default function CharacterCounterPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Character Counter</h1>
            <p className={styles.description}>
                Check character count (with/without spaces), word count, and line count in real-time.
            </p>

            <CounterClient />

            <section className={styles.seoSection}>
                <h2>Why Use a Character Counter?</h2>
                <p>
                    In the digital age, precision is key. Whether you are a social media manager crafting the perfect tweet, a student writing an essay with a strict word limit, or a developer optimizing meta tags for SEO, knowing your exact character count is essential. A <strong>Character Counter</strong> is a simple yet powerful tool that helps you stay within limits and improve your writing efficiency.
                </p>
                <p>
                    Our free online tool provides instant feedback as you type, showing you not just the total characters, but also word count, line count, and characters excluding spaces. This level of detail is crucial for professional writing and content creation.
                </p>

                <h2>Key Features of Our Tool</h2>
                <ul>
                    <li><strong>Real-Time Analysis:</strong> No need to click a "Calculate" button. The counters update instantly as you type or paste text.</li>
                    <li><strong>Comprehensive Stats:</strong> Get four vital metrics at once: Total Characters, Characters (No Spaces), Word Count, and Line Count.</li>
                    <li><strong>Privacy Focused:</strong> Your text is processed entirely within your browser. We do not store or send your data to any server, ensuring 100% privacy.</li>
                    <li><strong>Mobile Friendly:</strong> Optimized for all devices, so you can check your text length on the go from your smartphone or tablet.</li>
                </ul>

                <h2>Common Character Limits Guide</h2>
                <p>Different platforms have different constraints. Here is a quick reference guide to help you optimize your content:</p>
                <ul>
                    <li><strong>Twitter (X):</strong> 280 characters per tweet.</li>
                    <li><strong>Instagram:</strong> 2,200 characters for captions, 30 hashtags max.</li>
                    <li><strong>Google Meta Description:</strong> Approximately 155-160 characters for optimal display in search results.</li>
                    <li><strong>Google Title Tag:</strong> Approximately 50-60 characters.</li>
                    <li><strong>SMS Text Message:</strong> 160 characters per segment.</li>
                    <li><strong>LinkedIn Post:</strong> 3,000 characters.</li>
                </ul>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. Do spaces count as characters?</h3>
                        <p>A. Yes, in most contexts (like Twitter or SMS), spaces are counted as characters. However, some academic or legal requirements might ask for "characters excluding spaces," which our tool also provides.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Is there a limit to how much text I can check?</h3>
                        <p>A. Practically, no. You can paste entire essays or articles. Our tool is optimized to handle large amounts of text without slowing down your browser.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Why is word count important?</h3>
                        <p>A. Word count is often used as a metric for depth and readability. Blog posts often aim for 1,500+ words for SEO, while news articles might be shorter. Knowing your word count helps you hit the right target for your audience.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
