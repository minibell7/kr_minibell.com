import type { Metadata } from 'next';
import styles from './page.module.css';
import TipClient from './TipClient';

export const metadata: Metadata = {
    title: 'Free Tip Calculator | Calculate Gratuity & Split Bills',
    description: 'Calculate tip amounts and split bills instantly. Easy-to-use tip calculator for restaurants, taxis, and services. Mobile friendly.',
    keywords: ['tip calculator', 'gratuity calculator', 'bill splitter', 'restaurant tip', 'tip percentage'],
    openGraph: {
        title: 'Free Tip Calculator | minibell.com',
        description: 'Calculate tips and split bills instantly.',
        type: 'website',
    }
};

export default function TipCalculatorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Tip Calculator</h1>
            <p className={styles.description}>
                Instantly calculate tip amounts and split the bill among friends.
            </p>

            <TipClient />

            <section className={styles.seoSection}>
                <h2>Why Use a Tip Calculator?</h2>
                <p>
                    Dining out with friends or grabbing a taxi should be a pleasant experience, but figuring out the tip at the end can sometimes be awkward or confusing. Mental math isn't for everyone, especially after a big meal! A <strong>Tip Calculator</strong> ensures you leave the right amount of gratuity without the headache.
                </p>
                <p>
                    Our tool not only calculates the tip based on your desired percentage but also helps you <strong>split the bill</strong> evenly among your group. No more arguing over who owes what.
                </p>

                <h2>How to Use</h2>
                <ol>
                    <li><strong>Enter Bill Amount:</strong> Type in the total cost of your service or meal.</li>
                    <li><strong>Select Tip %:</strong> Choose a standard percentage (15%, 18%, 20%) or use the slider for a custom amount.</li>
                    <li><strong>Number of People:</strong> If you are sharing the cost, adjust the number of people.</li>
                    <li><strong>See Results:</strong> Instantly see the Tip Amount, Total Bill, and exactly how much each person needs to pay.</li>
                </ol>

                <h2>Tipping Etiquette Guide (USA)</h2>
                <ul>
                    <li><strong>Sit-down Restaurants:</strong> 15-20% is standard. 20%+ for excellent service.</li>
                    <li><strong>Buffets:</strong> 10-15% for servers who clear plates and refill drinks.</li>
                    <li><strong>Taxis / Rideshare:</strong> 15-20% of the fare.</li>
                    <li><strong>Food Delivery:</strong> 15-20% (minimum $3-$5 recommended).</li>
                    <li><strong>Bartenders:</strong> $1-$2 per drink or 15-20% of the tab.</li>
                </ul>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. Is the tip calculated on the tax?</h3>
                        <p>A. Technically, etiquette suggests calculating the tip on the <em>pre-tax</em> subtotal. However, many people simply tip on the final total for convenience. Our calculator works with whatever number you enter.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. What if the service was bad?</h3>
                        <p>A. In the US, tipping is a significant part of a server's income. If service was poor, 10-15% is often still left, perhaps with a polite word to the manager. Leaving $0 is considered very rude unless the experience was egregious.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. How do I split the bill?</h3>
                        <p>A. Simply use the "+" button in the "Number of People" section. The "Cost Per Person" line will show you exactly what each share is.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
