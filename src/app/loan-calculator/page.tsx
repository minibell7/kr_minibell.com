import type { Metadata } from 'next';
import styles from './page.module.css';
import LoanClient from './LoanClient';

export const metadata: Metadata = {
    title: 'Free Loan Calculator | Monthly Payment & Interest',
    description: 'Calculate monthly loan payments, total interest, and amortization. Perfect for car loans, mortgages, and personal loans. Simple and free.',
    keywords: ['loan calculator', 'mortgage calculator', 'car loan calculator', 'monthly payment', 'interest calculator'],
    openGraph: {
        title: 'Free Loan Calculator | minibell.com',
        description: 'Calculate monthly payments and interest instantly.',
        type: 'website',
    }
};

export default function LoanCalculatorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Loan Calculator</h1>
            <p className={styles.description}>
                Estimate your monthly payments and total interest costs.
            </p>

            <LoanClient />

            <section className={styles.seoSection}>
                <h2>Why Use a Loan Calculator?</h2>
                <p>
                    Borrowing money is a significant financial commitment. Whether you're buying a new car, purchasing a home, or taking out a personal loan, understanding the true cost of the loan is crucial. A <strong>Loan Calculator</strong> helps you see beyond the "sticker price" and understand how interest rates and loan terms affect your monthly budget.
                </p>
                <p>
                    By adjusting the loan amount, interest rate, and term length, you can find a payment plan that fits your financial situation comfortably.
                </p>

                <h2>How to Use</h2>
                <ol>
                    <li><strong>Loan Amount:</strong> Enter the total amount you plan to borrow (principal).</li>
                    <li><strong>Interest Rate:</strong> Enter the annual interest rate (APR) offered by the lender.</li>
                    <li><strong>Loan Term:</strong> Enter the number of years you have to pay back the loan.</li>
                    <li><strong>Analyze:</strong> Instantly see your estimated Monthly Payment, Total Interest paid over the life of the loan, and the Total Cost.</li>
                </ol>

                <h2>Understanding the Results</h2>
                <ul>
                    <li><strong>Monthly Payment:</strong> This is the amount you must pay every month to pay off the loan by the end of the term.</li>
                    <li><strong>Total Interest:</strong> This is the "cost" of borrowing. It's money paid to the lender on top of the original loan amount.</li>
                    <li><strong>Total Cost:</strong> Principal + Interest. This is the actual amount of money leaving your pocket.</li>
                </ul>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. Does this calculator work for mortgages?</h3>
                        <p>A. Yes, it uses the standard amortization formula used for fixed-rate mortgages, auto loans, and personal loans. However, it does not include extra costs like property taxes, insurance, or HOA fees often associated with mortgages.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. How can I lower my monthly payment?</h3>
                        <p>A. You can lower your payment by: 1) Borrowing less, 2) Securing a lower interest rate (improve your credit score), or 3) Extending the loan term (though this increases total interest paid).</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. What is APR?</h3>
                        <p>A. APR stands for Annual Percentage Rate. It represents the yearly cost of the loan, including interest and fees, expressed as a percentage.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
