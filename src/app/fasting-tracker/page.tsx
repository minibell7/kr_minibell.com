import React from 'react';
import FastingClient from './FastingClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Intermittent Fasting Tracker | 16:8 Fasting Timer',
    description: 'Simple and free 16:8 intermittent fasting timer. Track your fasting and eating windows with a beautiful, easy-to-use interface. No login required.',
};

export default function FastingTrackerPage() {
    return (
        <main style={{ minHeight: '100vh', padding: '4rem 2rem' }}>
            <FastingClient />

            <section style={{ maxWidth: '800px', margin: '4rem auto', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                    Why Intermittent Fasting?
                </h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Intermittent fasting (IF) is an eating pattern that cycles between periods of fasting and eating. It doesn't specify which foods you should eat but rather <em>when</em> you should eat them. The most popular method is the <strong>16:8 method</strong>.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    Benefits of 16:8 Fasting
                </h3>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li><strong>Weight Loss:</strong> Helps reduce calorie intake and boosts metabolism.</li>
                    <li><strong>Insulin Sensitivity:</strong> Lowers blood sugar levels and improves insulin resistance.</li>
                    <li><strong>Cellular Repair:</strong> Triggers autophagy, where cells remove old and dysfunctional proteins.</li>
                    <li><strong>Brain Health:</strong> May increase the brain hormone BDNF and aid the growth of new nerve cells.</li>
                </ul>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    How to Use This Tracker
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    1. <strong>Start Fasting:</strong> Click the button when you finish your last meal of the day.<br />
                    2. <strong>Track Progress:</strong> The timer will show you how long you've been fasting. The ring fills up as you approach your 16-hour goal.<br />
                    3. <strong>End Fasting:</strong> Once you reach 16 hours (or your personal goal), click "End Fasting" and enjoy your eating window!
                </p>

                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', marginTop: '2rem' }}>
                    <strong style={{ color: 'var(--accent-primary)' }}>Note:</strong> This timer saves your start time in your browser's local storage, so you can close the page and come back later without losing your progress.
                </div>
            </section>
        </main>
    );
}
