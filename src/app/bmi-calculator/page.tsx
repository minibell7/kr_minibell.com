import type { Metadata } from 'next';
import styles from './page.module.css';
import BMIClient from './BMIClient';

export const metadata: Metadata = {
    title: 'Free BMI Calculator | Body Mass Index Checker',
    description: 'Calculate your Body Mass Index (BMI) instantly. Supports Metric (kg/cm) and Imperial (lbs/ft) units. Check your health category.',
    keywords: ['BMI calculator', 'body mass index', 'weight checker', 'health calculator', 'obesity calculator'],
    openGraph: {
        title: 'Free BMI Calculator | minibell.com',
        description: 'Check your Body Mass Index instantly.',
        type: 'website',
    }
};

export default function BMICalculatorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>BMI Calculator</h1>
            <p className={styles.description}>
                Check your Body Mass Index (BMI) to assess your healthy weight range.
            </p>

            <BMIClient />

            <section className={styles.seoSection}>
                <h2>What is BMI?</h2>
                <p>
                    <strong>Body Mass Index (BMI)</strong> is a simple calculation using a person's height and weight. The formula is BMI = kg/m². It is widely used by healthcare professionals as a quick screening tool to categorize weight status: Underweight, Normal weight, Overweight, or Obese.
                </p>
                <p>
                    While BMI is not a direct measure of body fat, it is a useful indicator of potential health risks associated with being underweight or overweight.
                </p>

                <h2>BMI Categories</h2>
                <ul>
                    <li><strong>Underweight:</strong> BMI less than 18.5</li>
                    <li><strong>Normal weight:</strong> BMI 18.5 – 24.9</li>
                    <li><strong>Overweight:</strong> BMI 25 – 29.9</li>
                    <li><strong>Obesity:</strong> BMI 30 or greater</li>
                </ul>

                <h2>How to Use This Tool</h2>
                <ol>
                    <li><strong>Select Unit:</strong> Choose between Metric (Kilograms & Centimeters) or Imperial (Pounds & Feet/Inches).</li>
                    <li><strong>Enter Height:</strong> Input your height accurately.</li>
                    <li><strong>Enter Weight:</strong> Input your current weight.</li>
                    <li><strong>See Result:</strong> Your BMI score and category will appear instantly.</li>
                </ol>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. Is BMI accurate for everyone?</h3>
                        <p>A. No. BMI does not distinguish between muscle and fat. Athletes with high muscle mass may be classified as "overweight" despite having low body fat. It also may not be accurate for pregnant women or the elderly.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. What should I do if my BMI is high?</h3>
                        <p>A. A high BMI can be an indicator of high body fatness. If you are concerned about your weight, consult with a healthcare provider. They can perform further assessments and help you create a healthy lifestyle plan.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Why are there two unit systems?</h3>
                        <p>A. The Metric system is used globally, while the Imperial system is primarily used in the United States. We provide both to ensure everyone can use our tool easily.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
