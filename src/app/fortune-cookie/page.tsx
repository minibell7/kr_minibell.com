import type { Metadata } from 'next';
import styles from './page.module.css';
import FortuneClient from './FortuneClient';

export const metadata: Metadata = {
    title: 'Digital Fortune Cookie | Daily Wisdom & Luck',
    description: 'Open your daily fortune cookie online. Get instant wisdom, motivation, and lucky numbers. Free and fun!',
    keywords: ['fortune cookie', 'online fortune', 'daily wisdom', 'lucky message', 'fortune teller'],
    openGraph: {
        title: 'Digital Fortune Cookie | minibell.com',
        description: 'Crack open a cookie and see what the future holds!',
        type: 'website',
    }
};

export default function FortuneCookiePage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Digital Fortune Cookie</h1>
            <p className={styles.description}>
                Crack open a cookie to reveal your daily fortune.
            </p>

            <FortuneClient />

            <section className={styles.seoSection}>
                <h2>The Magic of the Fortune Cookie</h2>
                <p>
                    There is something undeniably fun and mysterious about cracking open a fortune cookie. It's not just a sweet treat; it's a moment of anticipation. Will you get a prediction about your future? A piece of sage advice? Or a set of lucky numbers? Our <strong>Digital Fortune Cookie</strong> brings this experience to your screen, allowing you to get your daily dose of wisdom anytime, anywhere.
                </p>
                <p>
                    Whether you are looking for a sign, a bit of motivation to start your day, or just a fun diversion, our virtual cookies are fresh and ready to be opened.
                </p>

                <h2>A Brief History</h2>
                <p>
                    While often associated with Chinese restaurants in the West, the fortune cookie's origins are actually debated. Many researchers trace them back to 19th-century Japan, where a similar cracker called "tsujiura senbei" was sold at temples with fortunes tucked inside. They were popularized in the United States by Japanese and Chinese immigrants in California in the early 20th century and have since become a global phenomenon.
                </p>

                <h2>How to Use This Oracle</h2>
                <ol>
                    <li><strong>Clear Your Mind:</strong> Take a deep breath. Focus on a question you have or simply ask the universe for guidance.</li>
                    <li><strong>Crack the Cookie:</strong> Click or tap the cookie on the screen.</li>
                    <li><strong>Receive Your Message:</strong> Read the fortune that appears. Reflect on how it applies to your current situation.</li>
                    <li><strong>Check Your Lucky Numbers:</strong> Use them for your next lottery ticket or as a guide for important dates.</li>
                </ol>

                <h2>Why Play Daily?</h2>
                <ul>
                    <li><strong>Positive Mindset:</strong> Starting your day with an uplifting message can improve your mood and outlook.</li>
                    <li><strong>Mindfulness:</strong> It takes a moment to pause and reflect, which is a small act of mindfulness in a busy day.</li>
                    <li><strong>Fun & Shareable:</strong> Share your fortune with friends or on social media to spread the good vibes.</li>
                </ul>
            </section>
        </div>
    );
}
