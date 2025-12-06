import type { Metadata } from 'next';
import styles from './page.module.css';
import SalaryClient from './SalaryClient';

export const metadata: Metadata = {
    title: 'Free Salary Converter | Hourly to Yearly Calculator',
    description: 'Convert your salary between hourly, daily, weekly, bi-weekly, monthly, and yearly rates. See your true take-home potential.',
    keywords: ['salary converter', 'hourly to yearly', 'paycheck calculator', 'wage converter', 'income calculator'],
    openGraph: {
        title: 'Free Salary Converter | minibell.com',
        description: 'Convert hourly wages to yearly salary instantly.',
        type: 'website',
    }
};

export default function SalaryConverterPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Salary Converter</h1>
            <p className={styles.description}>
                Instantly convert between hourly, monthly, and yearly income.
            </p>

            <SalaryClient />

            <section className={styles.seoSection}>
                <h2>Why Use a Salary Converter?</h2>
                <p>
                    Understanding your income in different timeframes is essential for financial planning. Whether you're negotiating a new job offer that pays hourly, or trying to budget your monthly expenses based on an annual salary, a <strong>Salary Converter</strong> bridges the gap.
                </p>
                <p>
                    It helps you answer questions like: "Is $25/hour enough to cover my $3,000 monthly rent?" or "What does a $60,000 salary look like in my weekly paycheck?"
                </p>

                <h2>How to Use</h2>
                <ol>
                    <li><strong>Enter Amount:</strong> Type in your current or expected pay rate.</li>
                    <li><strong>Select Frequency:</strong> Choose whether that amount is Hourly, Daily, Weekly, Bi-Weekly, Monthly, or Yearly.</li>
                    <li><strong>Adjust Hours:</strong> If you work more or less than the standard 40 hours a week, adjust the settings.</li>
                    <li><strong>View Results:</strong> Instantly see the equivalent values for all other timeframes in the table below.</li>
                </ol>

                <h2>Common Conversions (Based on 40hr/week)</h2>
                <ul>
                    <li><strong>$15/hour:</strong> Approx. $31,200/year</li>
                    <li><strong>$20/hour:</strong> Approx. $41,600/year</li>
                    <li><strong>$25/hour:</strong> Approx. $52,000/year</li>
                    <li><strong>$50,000/year:</strong> Approx. $24.04/hour</li>
                    <li><strong>$100,000/year:</strong> Approx. $48.08/hour</li>
                </ul>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. Does this include taxes?</h3>
                        <p>A. No, this calculator shows <strong>Gross Income</strong> (before taxes and deductions). Your actual "take-home" pay will be lower depending on your local tax laws, insurance, and retirement contributions.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. How many work hours are in a year?</h3>
                        <p>A. A standard full-time job (40 hours/week) is typically calculated as 2,080 hours per year (40 hours × 52 weeks).</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. What is "Bi-Weekly" pay?</h3>
                        <p>A. Bi-weekly means you get paid every two weeks. This results in 26 paychecks per year. It is one of the most common pay schedules in the US.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
