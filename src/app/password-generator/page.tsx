import type { Metadata } from 'next';
import styles from './page.module.css';
import PasswordClient from './PasswordClient';

export const metadata: Metadata = {
    title: 'Strong Password Generator | Secure & Random',
    description: 'Generate strong, secure, and random passwords instantly. Customize length and characters. Protect your accounts with high-entropy passwords.',
    keywords: ['password generator', 'strong password', 'random password', 'secure password', 'password maker'],
    openGraph: {
        title: 'Strong Password Generator | minibell.com',
        description: 'Create secure passwords instantly.',
        type: 'website',
    }
};

export default function PasswordGeneratorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Strong Password Generator</h1>
            <p className={styles.description}>
                Create secure, random passwords to protect your digital life.
            </p>

            <PasswordClient />

            <section className={styles.seoSection}>
                <h2>Why You Need a Strong Password</h2>
                <p>
                    In today's digital world, your password is the first line of defense against hackers and identity theft. Using weak passwords like "123456" or "password" is like leaving your front door unlocked. A <strong>Strong Password Generator</strong> creates complex, random combinations of characters that are nearly impossible for computers to guess or crack.
                </p>
                <p>
                    Security experts recommend using a unique password for every single account. Our tool makes it easy to generate as many unique passwords as you need, instantly.
                </p>

                <h2>What Makes a Password Strong?</h2>
                <ul>
                    <li><strong>Length:</strong> This is the most critical factor. A 12-character password is exponentially harder to crack than an 8-character one. We recommend at least 12-16 characters.</li>
                    <li><strong>Complexity:</strong> Mixing uppercase letters, lowercase letters, numbers, and symbols increases the "entropy" (randomness) of your password.</li>
                    <li><strong>Unpredictability:</strong> Avoid common words, phrases, or personal dates (like birthdays). Random strings are best.</li>
                </ul>

                <h2>How to Use This Tool</h2>
                <ol>
                    <li><strong>Set Length:</strong> Use the slider to choose your desired password length (default is 12).</li>
                    <li><strong>Select Options:</strong> Check the boxes to include Uppercase, Lowercase, Numbers, and Symbols.</li>
                    <li><strong>Generate:</strong> Click the button to create a new random password.</li>
                    <li><strong>Copy:</strong> Click the copy icon to save it to your clipboard.</li>
                </ol>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. Is it safe to generate passwords online?</h3>
                        <p>A. Yes, absolutely. This tool runs entirely in your browser (client-side). The passwords are generated locally on your device and are never sent to our servers. We cannot see or store them.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. How can I remember these complex passwords?</h3>
                        <p>A. You shouldn't try to memorize them! We highly recommend using a Password Manager (like Bitwarden, 1Password, or LastPass) to store your unique passwords securely.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Why are symbols important?</h3>
                        <p>A. Adding symbols expands the set of possible characters, making "brute force" attacks (where hackers try every combination) take significantly longer.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
