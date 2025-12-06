import type { Metadata } from 'next';
import styles from './page.module.css';
import LoremClient from './LoremClient';

export const metadata: Metadata = {
    title: 'Free Lorem Ipsum Generator | Dummy Text for Designers',
    description: 'Generate standard Lorem Ipsum dummy text for your design projects. Customize paragraph or word count. Copy to clipboard instantly.',
    keywords: ['lorem ipsum generator', 'dummy text', 'placeholder text', 'latin text', 'design tool'],
    openGraph: {
        title: 'Free Lorem Ipsum Generator | minibell.com',
        description: 'Generate dummy text for your designs instantly.',
        type: 'website',
    }
};

export default function LoremIpsumPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Lorem Ipsum Generator</h1>
            <p className={styles.description}>
                Generate standard placeholder text for your design and development projects.
            </p>

            <LoremClient />

            <section className={styles.seoSection}>
                <h2>What is Lorem Ipsum?</h2>
                <p>
                    <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                    It is used because it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. This allows designers to focus on the visual layout rather than the content itself.
                </p>

                <h2>Where does it come from?</h2>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. It comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero.
                </p>

                <h2>How to Use This Tool</h2>
                <ol>
                    <li><strong>Set Count:</strong> Choose how many paragraphs or words you need.</li>
                    <li><strong>Select Type:</strong> Toggle between "Paragraphs" (for blocks of text) and "Words" (for shorter strings).</li>
                    <li><strong>Generate:</strong> Click the button to create your text.</li>
                    <li><strong>Copy:</strong> Use the "Copy to Clipboard" button to grab the text and paste it into your project.</li>
                </ol>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. Is Lorem Ipsum real Latin?</h3>
                        <p>A. Yes, but it's scrambled. The original passage translates to "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Why not just use "Test Test Test"?</h3>
                        <p>A. Repeating the same word creates unnatural patterns in the text block. Lorem Ipsum simulates the variety of word lengths and sentence structures found in real language, giving a more accurate preview of the final design.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Is this tool free?</h3>
                        <p>A. Yes, completely free and unlimited. Generate as much text as you need.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
