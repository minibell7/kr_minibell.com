
import React from 'react';
import styles from './FAQSection.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
    className?: string;
}

export default function FAQSection({ items, className }: FAQSectionProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section className={`${styles.seoSection} ${className || ''}`}>
                <h2>자주 묻는 질문 (FAQ)</h2>
                <div className={styles.faqList}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.faqItem}>
                            <h3>{item.question}</h3>
                            <p>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
