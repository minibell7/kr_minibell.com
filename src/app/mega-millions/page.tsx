import type { Metadata } from 'next';
import styles from './page.module.css';
import MegaMillionsClient from './MegaMillionsClient';

export const metadata: Metadata = {
    title: 'US Mega Millions Generator | Random Number Picker',
    description: 'Generate lucky numbers for the Mega Millions lottery. Pick 5 white balls and 1 gold Mega Ball instantly. Free and easy to use.',
    keywords: ['mega millions generator', 'us lottery picker', 'mega millions numbers', 'random number generator', 'lucky numbers'],
    openGraph: {
        title: 'US Mega Millions Generator | minibell.com',
        description: 'Get your lucky Mega Millions numbers instantly!',
        type: 'website',
    }
};

export default function MegaMillionsPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>US Mega Millions Generator</h1>
            <p className={styles.description}>
                Generate your lucky numbers for the Mega Millions lottery.
            </p>

            <MegaMillionsClient />

            <section className={styles.seoSection}>
                <h2>How to Play Mega Millions</h2>
                <p>
                    Mega Millions is a multi-state lottery game in the United States, known for its massive jackpots that have made headlines worldwide. The game is simple but exciting: players must choose <strong>5 numbers</strong> from a pool of 1 to 70 (the white balls) and <strong>1 number</strong> from a pool of 1 to 25 (the gold Mega Ball).
                </p>
                <p>
                    Our <strong>Mega Millions Number Generator</strong> is designed to help you pick your numbers quickly and randomly. Instead of agonizing over which numbers to choose, let our algorithm provide you with a fresh set of lucky numbers instantly.
                </p>

                <h2>Strategies for Picking Numbers</h2>
                <p>While the lottery is a game of pure chance, many players enjoy using different strategies:</p>
                <ul>
                    <li><strong>Random Selection (Quick Pick):</strong> This is the most popular method and what our tool simulates. It eliminates human bias and ensures every number has an equal chance.</li>
                    <li><strong>Hot & Cold Numbers:</strong> Some players track "hot" numbers (frequently drawn) and "cold" numbers (overdue). While statistically past draws don't influence future ones, it adds a layer of fun.</li>
                    <li><strong>Personal Numbers:</strong> Using birthdays or anniversaries. Note that this limits you to numbers 1-31, leaving out more than half of the available white balls (32-70).</li>
                </ul>

                <h2>Prize Tiers</h2>
                <p>Matching just the Mega Ball gets you a prize! Here is the breakdown:</p>
                <ul>
                    <li><strong>Jackpot:</strong> 5 White Balls + Mega Ball</li>
                    <li><strong>$1 Million:</strong> 5 White Balls</li>
                    <li><strong>$10,000:</strong> 4 White Balls + Mega Ball</li>
                    <li><strong>$500:</strong> 4 White Balls</li>
                    <li><strong>$200:</strong> 3 White Balls + Mega Ball</li>
                    <li><strong>$10:</strong> 3 White Balls OR 2 White Balls + Mega Ball</li>
                    <li><strong>$4:</strong> 1 White Ball + Mega Ball</li>
                    <li><strong>$2:</strong> Just the Mega Ball</li>
                </ul>

                <h2>Disclaimer</h2>
                <p>
                    Please remember that lottery games are games of chance. This tool generates random numbers for entertainment and convenience. It does not predict winning numbers. Play responsibly and never spend more than you can afford to lose.
                </p>
            </section>
        </div>
    );
}
