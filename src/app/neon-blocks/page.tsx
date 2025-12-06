import BlocksClient from './BlocksClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Neon Blocks - mini-bell.com',
    description: 'Classic block puzzle game with a Cyberpunk Neon twist.',
};

import styles from './page.module.css';

export default function BlocksPage() {
    return (
        <div className={styles.pageWrapper}>
            <BlocksClient />

            <section className={styles.seoSection}>
                <h2>About Neon Blocks</h2>
                <p>
                    <strong>Neon Blocks</strong> is a modern, cyberpunk-inspired reimagining of the classic block puzzle game that took the world by storm in the 80s. We've kept the addictive gameplay you know and love—fitting falling tetrominoes together to clear lines—but gave it a fresh, glowing aesthetic that fits perfectly with the synthwave vibe.
                </p>
                <p>
                    Whether you're looking to kill a few minutes or chase a new high score, Neon Blocks offers a satisfying blend of strategy, speed, and visual flair.
                </p>

                <h2>Game Rules</h2>
                <ul>
                    <li><strong>The Goal:</strong> Rotate and move the falling blocks to create solid horizontal lines without gaps.</li>
                    <li><strong>Clearing Lines:</strong> When a line is completed, it disappears, and you earn points. Clearing multiple lines at once (a "Tetris") awards significantly more points.</li>
                    <li><strong>Game Over:</strong> The game ends when the stack of blocks reaches the top of the screen.</li>
                    <li><strong>Level Up:</strong> As you clear lines, the game speed increases, testing your reflexes and decision-making skills.</li>
                </ul>

                <h2>Controls</h2>
                <ul>
                    <li><strong>Arrow Keys / WASD:</strong> Move blocks left, right, or down.</li>
                    <li><strong>Up Arrow / W:</strong> Rotate the block.</li>
                    <li><strong>Spacebar:</strong> Hard drop (instantly place the block).</li>
                    <li><strong>Touch Controls:</strong> On mobile, use the on-screen buttons to move and rotate.</li>
                </ul>

                <h2>Tips for High Scores</h2>
                <ul>
                    <li><strong>Keep it Flat:</strong> Try to keep your stack as flat as possible. Avoid creating deep "wells" unless you have a long "I" piece ready to score a Tetris.</li>
                    <li><strong>Look Ahead:</strong> Use the "Next Piece" preview to plan your moves. Knowing what's coming allows you to set up combos.</li>
                    <li><strong>Master the Rotation:</strong> Learn how pieces rotate (especially near walls) to fit them into tight spots. This is often called "tucking" or "spinning."</li>
                </ul>

                <h2>Why Play Neon Blocks?</h2>
                <p>
                    Aside from being incredibly fun, block puzzle games are known to improve spatial awareness and cognitive function. It's a mental workout that feels like play. Plus, our version is completely free, runs in your browser, and requires no downloads.
                </p>
            </section>
        </div>
    );
}
