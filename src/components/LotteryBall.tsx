import styles from './LotteryBall.module.css';

interface LotteryBallProps {
    number: number;
    color?: string;
    isSpecial?: boolean;
}

export default function LotteryBall({ number, color, isSpecial = false }: LotteryBallProps) {
    return (
        <div
            className={`${styles.ball} ${isSpecial ? styles.special : ''}`}
            style={{ backgroundColor: color }}
        >
            <span className={styles.number}>{number}</span>
        </div>
    );
}
