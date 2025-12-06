import type { Metadata } from 'next';
import styles from './page.module.css';
import PercentageClient from './PercentageClient';

export const metadata: Metadata = {
    title: 'Percentage Calculator | Discount, Ratio, & Change',
    description: 'Free online percentage calculator. Calculate discounts, find percentage of a number, and calculate percentage increase/decrease.',
    keywords: ['percentage calculator', 'percent change', 'discount calculator', 'math tool', 'ratio calculator'],
    openGraph: {
        title: 'Percentage Calculator | minibell.com',
        description: 'Solve all your percentage problems instantly!',
        type: 'website',
    }
};

export default function PercentagePage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Percentage Calculator</h1>
            <p className={styles.description}>
                Calculate discounts, ratios, and percentage changes easily.
            </p>

            <PercentageClient />

            <section className={styles.seoSection}>
                <h2>Why Use a Percentage Calculator?</h2>
                <p>
                    Percentages are everywhere in our daily lives, from shopping discounts and restaurant tips to tax calculations and stock market changes. While the math itself isn't impossible, it can be tricky to do in your head quickly and accurately. A <strong>Percentage Calculator</strong> is an essential tool that saves you time and prevents costly mistakes.
                </p>
                <p>
                    Whether you're a student checking homework, a shopper trying to figure out the final price of a sale item, or a business owner analyzing profit margins, our tool provides instant, accurate results for all common percentage scenarios.
                </p>

                <h2>Understanding the Three Modes</h2>
                <p>Our calculator offers three distinct modes to handle different types of questions:</p>
                <ul>
                    <li>
                        <strong>Percentage of a Number:</strong>
                        <br /><em>"What is 20% of 150?"</em>
                        <br />This is useful for calculating tips (e.g., 15% of the bill) or taxes. The formula is simply: <code>(Percentage / 100) × Total Value</code>.
                    </li>
                    <li>
                        <strong>Percentage Change (Increase/Decrease):</strong>
                        <br /><em>"The price went from $50 to $40. What is the % change?"</em>
                        <br />This is crucial for tracking growth or loss. A negative result indicates a decrease (discount), while a positive result indicates an increase. The formula is: <code>((New - Old) / Old) × 100</code>.
                    </li>
                    <li>
                        <strong>Percentage Ratio:</strong>
                        <br /><em>"25 is what percent of 100?"</em>
                        <br />This helps you understand proportions, like what score you got on a test. The formula is: <code>(Part / Total) × 100</code>.
                    </li>
                </ul>

                <h2>Real-Life Examples</h2>
                <ul>
                    <li><strong>Shopping:</strong> A $200 jacket is 30% off. Use "Percentage of a Number" to find the discount amount ($60) and the final price ($140).</li>
                    <li><strong>Investing:</strong> You bought a stock at $100 and it's now $120. Use "Percentage Change" to see that you made a 20% profit.</li>
                    <li><strong>Health:</strong> You want to lose 5% of your body weight. Calculate exactly how many kilograms or pounds that is.</li>
                </ul>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. How do I calculate a discount manually?</h3>
                        <p>A. To calculate a discount, convert the percentage to a decimal (e.g., 20% = 0.20) and multiply it by the original price. Subtract this amount from the original price to get the final cost.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. What is the difference between percentage change and percentage point change?</h3>
                        <p>A. Percentage change measures the relative difference between two numbers. Percentage point change is the absolute difference between two percentages. For example, moving from 10% to 12% is a 20% increase (relative), but a 2 percentage point increase (absolute).</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Is this calculator accurate for financial use?</h3>
                        <p>A. Yes, it uses standard mathematical formulas. However, for complex financial reporting involving compound interest or specific tax laws, we recommend specialized financial software.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
