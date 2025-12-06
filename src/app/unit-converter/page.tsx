import type { Metadata } from 'next';
import styles from './page.module.css';
import UnitClient from './UnitClient';

export const metadata: Metadata = {
    title: 'Unit Converter | Length, Weight, Area, Temperature',
    description: 'Convert between common units of measurement. Length (m, ft, inch), Weight (kg, lb), Area (pyeong, m2), and Temperature (C, F).',
    keywords: ['unit converter', 'length converter', 'weight converter', 'pyeong to m2', 'celsius to fahrenheit', 'measurement converter'],
    openGraph: {
        title: 'Unit Converter | minibell.com',
        description: 'Convert units instantly!',
        type: 'website',
    }
};

export default function UnitConverterPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Unit Converter</h1>
            <p className={styles.description}>
                Convert Length, Weight, Area, and Temperature units.
            </p>

            <UnitClient />

            <section className={styles.seoSection}>
                <h2>Why Use a Unit Converter?</h2>
                <p>
                    In a globalized world, we constantly encounter different systems of measurement. You might be following a recipe that uses grams while your scale uses ounces, or checking the weather in a country that uses Celsius when you're used to Fahrenheit. A <strong>Unit Converter</strong> bridges this gap, allowing you to instantly translate measurements into terms you understand.
                </p>
                <p>
                    Our tool is designed to be a comprehensive solution for everyday conversions. Whether you are a student, a traveler, a cook, or a professional, having a reliable converter at your fingertips saves time and prevents confusion.
                </p>

                <h2>Supported Conversion Categories</h2>
                <ul>
                    <li>
                        <strong>Length & Distance:</strong> Convert between Metric (meters, kilometers) and Imperial (feet, inches, miles). Perfect for understanding height, travel distances, or screen sizes.
                    </li>
                    <li>
                        <strong>Weight & Mass:</strong> Switch between kilograms/grams and pounds/ounces. Essential for cooking, shipping, and tracking body weight.
                    </li>
                    <li>
                        <strong>Area:</strong> Convert square meters to square feet, acres, or even "Pyeong" (a traditional Korean unit). Useful for real estate and land measurement.
                    </li>
                    <li>
                        <strong>Temperature:</strong> Instantly convert Celsius to Fahrenheit or Kelvin. Crucial for travel planning, science class, and cooking.
                    </li>
                </ul>

                <h2>Understanding "Pyeong" (평)</h2>
                <p>
                    One unique feature of our converter is the inclusion of the <strong>Pyeong</strong>. This unit is widely used in South Korea for measuring apartment and house sizes.
                </p>
                <ul>
                    <li><strong>1 Pyeong ≈ 3.3058 m²</strong></li>
                    <li><strong>1 Pyeong ≈ 35.58 ft²</strong></li>
                </ul>
                <p>
                    If you are looking at Korean real estate listings, knowing how to convert Pyeong to square meters is essential for understanding the actual size of a property.
                </p>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. Why are there different measurement systems?</h3>
                        <p>A. Historically, different regions developed their own systems. The Metric system (International System of Units) is the global standard, but the Imperial system persists in the US and a few other places due to tradition and industrial inertia.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Is 0°C the same as 0°F?</h3>
                        <p>A. No. 0°C is the freezing point of water, which equals 32°F. 0°F is much colder, approximately -17.78°C. This is why temperature conversion is not as simple as multiplying by a factor; it requires an offset.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. How accurate are these conversions?</h3>
                        <p>A. Our tool uses precise mathematical conversion factors (e.g., 1 inch = 2.54 cm exactly). Results are rounded to a reasonable number of decimal places for readability, but they are highly accurate for all practical purposes.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
