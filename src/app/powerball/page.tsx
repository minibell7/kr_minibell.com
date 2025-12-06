import type { Metadata } from 'next';
import styles from './page.module.css';
import PowerballClient from './PowerballClient';

export const metadata: Metadata = {
    title: 'US Powerball Generator | Random Number Picker',
    description: 'Generate lucky numbers for the US Powerball lottery. Pick 5 white balls and 1 red Powerball instantly. Free and easy to use.',
    keywords: ['powerball generator', 'us lottery picker', 'powerball numbers', 'random number generator', 'lucky numbers'],
    openGraph: {
        title: 'US Powerball Generator | minibell.com',
        description: 'Get your lucky Powerball numbers instantly!',
        type: 'website',
    }
};

export default function PowerballPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>US Powerball Generator</h1>
            <p className={styles.description}>
                Generate your lucky numbers for the Powerball lottery.
            </p>

            <PowerballClient />

            <section className={styles.seoSection}>
                <h2>How to Play US Powerball</h2>
                <p>
                    The US Powerball is one of the most popular and potentially lucrative lottery games in the world. With jackpots often reaching hundreds of millions (and sometimes billions) of dollars, it captures the imagination of millions. To play, you must select <strong>5 white balls</strong> (numbers from 1 to 69) and <strong>1 red Powerball</strong> (number from 1 to 26).
                </p>
                <p>
                    Many players struggle to pick numbers, often relying on birthdays or anniversaries which limits their range to 1-31. Our <strong>Powerball Number Generator</strong> solves this by providing truly random selections across the entire number range, maximizing your statistical coverage.
                </p>

                <h2>Why Use a Random Number Generator?</h2>
                <ul>
                    <li><strong>Avoid Bias:</strong> Humans are terrible at being random. We tend to pick patterns or meaningful dates. A generator ensures a purely mathematical selection.</li>
                    <li><strong>Full Range Coverage:</strong> By using a generator, you are just as likely to get a 69 as a 7, ensuring you don't miss out on high numbers.</li>
                    <li><strong>Quick & Easy:</strong> Generate multiple sets of numbers in seconds without overthinking.</li>
                </ul>

                <h2>Winning Combinations</h2>
                <p>There are 9 ways to win a prize in Powerball:</p>
                <ul>
                    <li><strong>Grand Prize:</strong> 5 White Balls + 1 Powerball</li>
                    <li><strong>$1 Million:</strong> 5 White Balls</li>
                    <li><strong>$50,000:</strong> 4 White Balls + 1 Powerball</li>
                    <li><strong>$100:</strong> 4 White Balls OR 3 White Balls + 1 Powerball</li>
                    <li><strong>$7:</strong> 3 White Balls OR 2 White Balls + 1 Powerball</li>
                    <li><strong>$4:</strong> 1 White Ball + 1 Powerball OR Just the Powerball</li>
                </ul>

                <h2>Disclaimer</h2>
                <p>
                    This tool is provided for entertainment purposes only. The numbers generated are random and do not guarantee a win. Lottery games are a form of gambling; please play responsibly and within your means. If you or someone you know has a gambling problem, please seek help.
                </p>
            </section>
        </div>
    );
}
