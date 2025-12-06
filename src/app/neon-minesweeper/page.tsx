import MinesweeperClient from './MinesweeperClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Neon Minesweeper - mini-bell.com',
    description: 'Classic Minesweeper with a Cyberpunk Neon twist.',
};

import styles from './page.module.css';

export default function MinesweeperPage() {
    return (
        <div className={styles.pageWrapper}>
            <MinesweeperClient />

            <section className={styles.seoSection}>
                <h2>About Neon Minesweeper</h2>
                <p>
                    <strong>Neon Minesweeper</strong> brings the classic logic puzzle into the future. Originally popularized as a standard tool on early operating systems, Minesweeper has frustrated and delighted players for decades. Our version retains the core mechanics—deducing the location of hidden mines—but wraps it in a sleek, dark-mode interface with neon accents.
                </p>
                <p>
                    It's a game of pure logic and probability. One wrong click, and it's game over. Do you have the patience and the brainpower to clear the board?
                </p>

                <h2>How to Play</h2>
                <ul>
                    <li><strong>The Objective:</strong> Clear the entire board without detonating any mines.</li>
                    <li><strong>The Numbers:</strong> Clicking a safe square reveals a number. This number tells you exactly how many mines are touching that square (horizontally, vertically, or diagonally).</li>
                    <li><strong>Flagging:</strong> If you suspect a square contains a mine, right-click (or long-press on mobile) to place a flag. This prevents you from accidentally clicking it.</li>
                    <li><strong>Winning:</strong> You win when all safe squares are revealed.</li>
                </ul>

                <h2>Difficulty Levels</h2>
                <ul>
                    <li><strong>Easy:</strong> A small grid with fewer mines. Perfect for beginners learning the patterns.</li>
                    <li><strong>Medium:</strong> A larger grid with a moderate density of mines. A balanced challenge.</li>
                    <li><strong>Hard:</strong> A large grid packed with mines. Only for the experts!</li>
                </ul>

                <h2>Strategy Guide</h2>
                <ul>
                    <li><strong>Start in the Middle:</strong> The corners are often tricky. Starting in the center usually opens up a larger safe area.</li>
                    <li><strong>The "1-2-1" Pattern:</strong> If you see a 1-2-1 pattern along a straight edge, the two 1s always have mines next to them, and the 2 shares those mines.</li>
                    <li><strong>The "1-2-2-1" Pattern:</strong> Similar to above, this often indicates a specific mine placement. Learning these patterns is key to speed.</li>
                    <li><strong>Guessing:</strong> Sometimes, you will be forced to guess. Try to calculate the probability based on the remaining mines and covered squares.</li>
                </ul>

                <h2>Why Play Minesweeper?</h2>
                <p>
                    Minesweeper is an excellent exercise for logical reasoning and pattern recognition. It trains your brain to process information quickly and make decisions based on evidence. It's the perfect "brain break" during a busy day.
                </p>
            </section>
        </div>
    );
}
