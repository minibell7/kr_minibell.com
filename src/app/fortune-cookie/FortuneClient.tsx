'use client';

import { useState } from 'react';
import styles from './page.module.css';

const FORTUNES = [
    "당신의 인생에 곧 아름답고 지혜로운 인연이 찾아올 것입니다.",
    "진정한 친구는 어떤 방패보다 강력한 보호막입니다.",
    "새로운 시작이 당신을 기다리고 있습니다.",
    "친절을 베푸세요. 그것은 반드시 당신에게 돌아옵니다.",
    "오늘 당신에게 생각지 못한 행운이 찾아옵니다.",
    "포기하지 마세요. 목표가 바로 눈앞에 있습니다.",
    "당신의 미소는 누군가에게 큰 힘이 됩니다.",
    "변화를 두려워하지 마세요. 더 좋은 기회가 오고 있습니다.",
    "자신을 믿으세요. 당신은 생각보다 훨씬 강한 사람입니다.",
    "오늘의 노력이 내일의 결실을 맺을 것입니다.",
    "잠시 휴식을 취하는 것도 훌륭한 전략입니다.",
    "작은 행복들이 모여 큰 기쁨이 됩니다.",
    "당신의 직관을 믿으세요. 정답은 이미 당신 안에 있습니다.",
    "어려운 시기가 지나가고 곧 평온이 찾아올 것입니다.",
    "배움에는 늦은 때가 없습니다. 지금 시작하세요.",
    "가족이나 친구에게 사랑한다고 말해보세요. 기적이 일어납니다.",
    "행운은 준비된 자에게 찾아옵니다.",
    "당신의 창의력이 빛을 발할 때입니다.",
    "과거에 얽매이지 말고 현재를 즐기세요.",
    "당신은 충분히 사랑받을 자격이 있습니다.",
    "뜻밖의 소식이 즐거움을 줄 것입니다.",
    "천 리 길도 한 걸음부터 시작됩니다.",
    "긍정적인 마음가짐이 모든 것을 바꿉니다.",
    "당신의 재능이 곧 인정받게 될 것입니다.",
    "건강이 최고의 재산입니다. 오늘 하루 몸을 챙기세요.",
    "좋은 소식이 우편이나 메시지로 도착할 것입니다.",
    "실패는 성공으로 가는 과정일 뿐입니다.",
    "겸손과 성실함이 당신의 가치를 높여줄 것입니다.",
    "오늘은 모험을 떠나기에 좋은 날입니다.",
    "당신의 꿈을 절대 포기하지 마세요.",
];

export default function FortuneClient() {
    const [isBroken, setIsBroken] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const openCookie = () => {
        if (isBroken) {
            // Reset
            setIsBroken(false);
            setMessage(null);
        } else {
            // Break
            setIsBroken(true);
            const randomMsg = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
            setTimeout(() => {
                setMessage(randomMsg);
            }, 500);
        }
    };

    return (
        <div className={styles.container}>
            <div
                className={`${styles.cookieCard} glass-panel`}
                onClick={openCookie}
                role="button"
                tabIndex={0}
            >
                <div className={`${styles.cookie} ${isBroken ? styles.broken : ''}`}>
                    <span className={styles.emoji}>{isBroken ? '🥠' : '🥠'}</span>
                </div>

                <div className={`${styles.message} ${message ? styles.visible : ''}`}>
                    <p>"{message}"</p>
                </div>

                <p className={styles.instruction}>
                    {isBroken ? '다시 하려면 클릭하세요' : '쿠키를 클릭(터치)해서 열어보세요!'}
                </p>
            </div>
        </div>
    );
}
