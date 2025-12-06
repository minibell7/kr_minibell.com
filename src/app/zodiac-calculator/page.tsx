import type { Metadata } from 'next';
import styles from './page.module.css';
import ZodiacClient from './ZodiacClient';

export const metadata: Metadata = {
    title: 'Zodiac Sign Calculator | Western & Chinese Zodiac',
    description: 'Find out your Western Zodiac sign and Chinese Zodiac animal instantly. Just enter your birth date. Discover your astrological profile.',
    keywords: ['zodiac calculator', 'what is my sign', 'chinese zodiac', 'star sign', 'horoscope'],
    openGraph: {
        title: 'Zodiac Sign Calculator | minibell.com',
        description: 'Discover your Western and Chinese Zodiac signs!',
        type: 'website',
    }
};

export default function ZodiacCalculatorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Zodiac Calculator</h1>
            <p className={styles.description}>
                Discover your Western Star Sign and Chinese Zodiac Animal.
            </p>

            <ZodiacClient />

            <section className={styles.seoSection}>
                <h2>Unlock the Secrets of the Stars</h2>
                <p>
                    Astrology has fascinated humanity for millennia. From the ancient Babylonians to modern-day horoscopes, people have looked to the heavens to understand themselves and their place in the universe. Our <strong>Zodiac Calculator</strong> is a comprehensive tool that bridges two major astrological traditions: the Western Zodiac and the Chinese Zodiac.
                </p>
                <p>
                    By simply entering your birth date, you can instantly discover your Sun Sign (Western) and your Animal Sign (Chinese), giving you a dual perspective on your personality, strengths, and potential.
                </p>

                <h2>Western Zodiac: The Sun Signs</h2>
                <p>
                    The Western zodiac is based on the position of the sun relative to constellations at the moment of your birth. It is divided into 12 signs, each ruling a specific period of the year:
                </p>
                <ul>
                    <li><strong>Fire Signs (Aries, Leo, Sagittarius):</strong> Passionate, dynamic, and temperamental.</li>
                    <li><strong>Earth Signs (Taurus, Virgo, Capricorn):</strong> Grounded, practical, and loyal.</li>
                    <li><strong>Air Signs (Gemini, Libra, Aquarius):</strong> Intellectual, communicative, and social.</li>
                    <li><strong>Water Signs (Cancer, Scorpio, Pisces):</strong> Emotional, intuitive, and sensitive.</li>
                </ul>

                <h2>Chinese Zodiac: The 12 Animals</h2>
                <p>
                    The Chinese zodiac (Shengxiao) follows a 12-year cycle, with each year associated with an animal. Your sign is determined by your birth year (note: the Chinese New Year changes annually, usually in Jan/Feb, which our calculator accounts for).
                </p>
                <ul>
                    <li><strong>The Animals:</strong> Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig.</li>
                    <li><strong>Meaning:</strong> Each animal is believed to shape the personality and destiny of those born in its year. For example, Dragons are seen as powerful and lucky, while Rabbits are gentle and elegant.</li>
                </ul>

                <h2>Why Know Your Signs?</h2>
                <ul>
                    <li><strong>Self-Discovery:</strong> Astrology provides a framework for self-reflection. Reading about your sign can help you understand your natural tendencies, strengths, and weaknesses.</li>
                    <li><strong>Relationship Compatibility:</strong> Many people use zodiac signs to check compatibility with romantic partners, friends, or colleagues.</li>
                    <li><strong>Conversation Starter:</strong> Asking "What's your sign?" is a classic icebreaker that opens up fun and deep conversations.</li>
                </ul>
            </section>
        </div>
    );
}
