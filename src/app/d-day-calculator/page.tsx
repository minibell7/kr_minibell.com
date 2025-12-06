import type { Metadata } from 'next';
import styles from './page.module.css';
import DDayClient from './DDayClient';

export const metadata: Metadata = {
    title: 'D-Day Calculator | Date Counter & Anniversary Checker',
    description: 'Calculate days remaining or passed since a special date. Perfect for couples, exams, birthdays, and project deadlines. Features "Today is Day 1" option.',
    keywords: ['d-day calculator', 'date counter', 'days since', 'countdown', 'anniversary calculator', 'love days'],
    openGraph: {
        title: 'D-Day Calculator | minibell.com',
        description: 'Check your D-Day instantly!',
        type: 'website',
    }
};

export default function DDayPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>D-Day Calculator</h1>
            <p className={styles.description}>
                Count the days until or since your special event.
            </p>

            <DDayClient />

            <section className={styles.seoSection}>
                <h2>Why Use a D-Day Calculator?</h2>
                <p>
                    Life is full of special moments worth counting down to or remembering. Whether it's the excitement of an upcoming vacation, the nervousness of a big exam, or the joy of a romantic anniversary, keeping track of time adds meaning to these events. A <strong>D-Day Calculator</strong> simplifies this by doing the math for you.
                </p>
                <p>
                    Instead of manually counting days on a calendar, our tool instantly tells you exactly how many days are left until a future date (D-) or how many days have passed since a past date (D+). It's perfect for couples tracking their relationship milestones, students counting down to the SATs, or anyone waiting for a special occasion.
                </p>

                <h2>Key Features</h2>
                <ul>
                    <li><strong>Versatile Counting:</strong> Supports both countdowns (future dates) and anniversaries (past dates).</li>
                    <li><strong>"Day 1" Option:</strong> Includes a toggle to include the start date as Day 1, a common practice in East Asian cultures for relationship anniversaries.</li>
                    <li><strong>Automatic Milestones:</strong> For past events, it automatically calculates significant future milestones like the 100th, 200th, 365th (1 year), and 1000th day.</li>
                    <li><strong>Simple & Clean Interface:</strong> No clutter, just the dates and numbers you need.</li>
                </ul>

                <h2>How to Calculate Anniversaries Correctly</h2>
                <p>
                    Calculating anniversaries can be tricky depending on cultural context. In many Western cultures, an anniversary is celebrated exactly one year after the event (e.g., married on Jan 1st, 1st anniversary is next Jan 1st). However, for counting "days together," some cultures count the first day as Day 1.
                </p>
                <p>
                    <strong>Example:</strong> If you started dating on January 1st:
                </p>
                <ul>
                    <li><strong>Standard Calculation:</strong> January 2nd is "1 day" since.</li>
                    <li><strong>Inclusive Calculation (Day 1):</strong> January 1st is Day 1, so January 2nd is Day 2.</li>
                </ul>
                <p>Our tool lets you choose the method that fits your needs with a simple checkbox.</p>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. What does "D-Day" mean?</h3>
                        <p>A. Historically, D-Day referred to the start of a military operation. Today, it's widely used to refer to the due date or scheduled date of any important event. "D-7" means 7 days left, while "D+100" means 100 days have passed.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Can I calculate my baby's age in days?</h3>
                        <p>A. Absolutely! Enter your baby's birth date as the target date. The "D+" number will show you exactly how many days old they are today.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. How do I track a diet or habit streak?</h3>
                        <p>A. Set the start date of your diet or habit. The calculator will show you your current streak in days. Seeing the number grow can be a great motivator!</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
