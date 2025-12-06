import type { Metadata } from 'next';
import styles from './page.module.css';
import EuroMillionsClient from './EuroMillionsClient';

export const metadata: Metadata = {
    title: 'EuroMillions Generator | Random Number Picker',
    description: 'Generate lucky numbers for the EuroMillions lottery. Pick 5 main numbers and 2 Lucky Stars instantly. Free and easy to use.',
    keywords: ['euromillions generator', 'euro lottery picker', 'euromillions numbers', 'random number generator', 'lucky dip'],
    openGraph: {
        title: 'EuroMillions Generator | minibell.com',
        description: 'Get your lucky EuroMillions numbers instantly!',
        type: 'website',
    }
};

export default function EuroMillionsPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>EuroMillions Generator</h1>
            <p className={styles.description}>
                Generate your lucky numbers for the EuroMillions lottery.
            </p>

            <EuroMillionsClient />

            <section className={styles.seoSection}>
                <h2>What is EuroMillions?</h2>
                <p>
                    EuroMillions is Europe's favorite transnational lottery, played across nine countries including the UK, France, Spain, and Switzerland. With draws taking place every Tuesday and Friday, it offers huge tax-free jackpots (in most countries) that can change lives overnight. To play, you select <strong>5 main numbers</strong> (1-50) and <strong>2 Lucky Stars</strong> (1-12).
                </p>
                <p>
                    Struggling to pick your numbers? Our <strong>EuroMillions Number Generator</strong> acts as your personal "Lucky Dip," providing you with a completely random set of numbers to play for the next draw.
                </p>

                <h2>Why Use a Number Generator?</h2>
                <ul>
                    <li><strong>Speed:</strong> Generate multiple lines in seconds without thinking.</li>
                    <li><strong>Randomness:</strong> Avoid the common pitfall of picking patterns or dates, which many other players also do. If you win with a unique random set, you are less likely to share the jackpot!</li>
                    <li><strong>Convenience:</strong> Use it on the go, right before you buy your ticket.</li>
                </ul>

                <h2>Winning Combinations</h2>
                <p>There are 13 prize tiers in EuroMillions, giving you plenty of chances to win:</p>
                <ul>
                    <li><strong>Jackpot:</strong> 5 Main Numbers + 2 Lucky Stars</li>
                    <li><strong>Tier 2:</strong> 5 Main Numbers + 1 Lucky Star</li>
                    <li><strong>Tier 3:</strong> 5 Main Numbers</li>
                    <li><strong>Tier 4:</strong> 4 Main Numbers + 2 Lucky Stars</li>
                    <li><strong>...and more:</strong> You can win a prize just for matching 2 main numbers!</li>
                </ul>

                <h2>Responsible Gaming</h2>
                <p>
                    Lotteries are a form of entertainment. While dreaming of a big win is fun, the odds are long. This tool is for amusement purposes only and does not guarantee a win. Please gamble responsibly and set a budget for your play.
                </p>
            </section>
        </div>
    );
}
