import type { Metadata } from 'next';
import styles from './page.module.css';
import PomodoroClient from './PomodoroClient';

export const metadata: Metadata = {
    title: 'Pomodoro Timer | Focus & Study Timer',
    description: 'Boost your productivity with this free online Pomodoro Timer. 25 minutes work, 5 minutes break. Simple, effective, and distraction-free.',
    keywords: ['pomodoro timer', 'study timer', 'focus timer', 'tomato timer', 'productivity tool', 'online timer'],
    openGraph: {
        title: 'Pomodoro Timer | minibell.com',
        description: 'Stay focused with the Pomodoro technique.',
        type: 'website',
    }
};

export default function PomodoroPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Pomodoro Timer</h1>
            <p className={styles.description}>
                Stay focused and productive with the Pomodoro technique.
            </p>

            <PomodoroClient />

            <section className={styles.seoSection}>
                <h2>What is the Pomodoro Technique?</h2>
                <p>
                    In an era of constant notifications and multitasking, maintaining focus is harder than ever. The <strong>Pomodoro Technique</strong> is a time management method developed by Francesco Cirillo in the late 1980s that turns time into a valuable ally rather than an enemy. It uses a timer to break work into focused intervals, traditionally 25 minutes in length, separated by short breaks.
                </p>
                <p>
                    Our <strong>Free Online Pomodoro Timer</strong> is designed to help you implement this technique effortlessly. Whether you are studying for an exam, coding a new feature, or writing a report, this tool will help you stay on track and avoid burnout.
                </p>

                <h2>How to Use This Timer</h2>
                <ol>
                    <li><strong>Choose a Task:</strong> Pick one specific thing you want to accomplish.</li>
                    <li><strong>Start the Timer:</strong> Click "Start" to begin a 25-minute work session (a "Pomodoro"). Focus only on the task.</li>
                    <li><strong>Work Until It Rings:</strong> Ignore distractions. If a thought pops up, write it down and get back to work.</li>
                    <li><strong>Take a Short Break:</strong> When the timer ends, take a 5-minute break. Stretch, walk around, or grab a drink.</li>
                    <li><strong>Repeat:</strong> After 4 Pomodoros, take a longer break (15-30 minutes) to recharge your brain.</li>
                </ol>

                <h2>Why It Works</h2>
                <ul>
                    <li><strong>Combats Procrastination:</strong> Starting a task is often the hardest part. Committing to just 25 minutes feels manageable.</li>
                    <li><strong>Prevents Burnout:</strong> Regular breaks keep your mind fresh and prevent mental fatigue.</li>
                    <li><strong>Improves Focus:</strong> Knowing the clock is ticking creates a sense of urgency that sharpens concentration.</li>
                </ul>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. Why 25 minutes?</h3>
                        <p>A. 25 minutes is considered the "sweet spot" for sustained focus. It's long enough to get deep work done but short enough to delay gratification. However, you can adjust the intervals if you find a different rhythm works better for you.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. What should I do during the break?</h3>
                        <p>A. Step away from your screen! The goal is to disconnect. Do some light stretching, look out a window, or meditate. Avoid checking social media or email, as this uses the same mental resources as work.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. Is this timer customizable?</h3>
                        <p>A. Yes! You can adjust the work duration, short break, and long break times in the settings to fit your personal workflow.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
