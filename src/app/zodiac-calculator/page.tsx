import type { Metadata } from 'next';
import styles from './page.module.css';
import ZodiacClient from './ZodiacClient';

export const metadata: Metadata = {
    title: '별자리/띠 계산기 | 내 서양 별자리와 12지신 찾기',
    description: '생년월일만 입력하면 나의 서양 별자리(황도 12궁)와 띠(12지신)를 즉시 알려드립니다. 각 별자리와 띠가 가진 성격과 특징도 확인해보세요.',
    keywords: ['별자리계산기', '띠계산기', '12지신', '별자리찾기', '내별자리', '황도12궁', '무료운세'],
    openGraph: {
        title: '별자리 & 띠 계산기 | 미니벨 유틸리티',
        description: '나는 무슨 별자리일까? 내 띠는 정확히 뭘까? 지금 바로 확인하세요.',
        type: 'website',
    }
};

export default function ZodiacCalculatorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>별자리 & 띠 계산기</h1>
            <p className={styles.description}>
                생년월일을 입력하여 나의 별자리와 띠를 한번에 확인하세요.
            </p>

            <ZodiacClient />

            <section className={styles.seoSection}>
                <h2>동서양 점성술의 만남</h2>
                <p>
                    사람들은 아주 오래전부터 하늘의 별과 달력을 통해 자신의 운명과 성격을 이해하려 노력했습니다. 이 계산기는 서양의 <strong>황도 12궁(Zodiac)</strong>과 동양의 <strong>12지신(띠)</strong>을 동시에 알려주는 통합 도구입니다.
                </p>

                <h2>서양의 별자리 (Sun Signs)</h2>
                <p>
                    태양이지나가는 길(황도)에 있는 12개의 별자리 중, 당신이 태어난 순간 태양이 머물던 위치를 말합니다. 보통 개인의 성격과 자아를 나타낸다고 합니다.
                </p>
                <ul>
                    <li><strong>불의 별자리 (양, 사자, 사수):</strong> 열정적이고 에너지가 넘칩니다.</li>
                    <li><strong>땅의 별자리 (황소, 처녀, 염소):</strong> 현실적이고 신중하며 성실합니다.</li>
                    <li><strong>공기의 별자리 (쌍둥이, 천칭, 물병):</strong> 지적이고 소통을 중요시합니다.</li>
                    <li><strong>물의 별자리 (게, 전갈, 물고기):</strong> 감수성이 풍부하고 직관적입니다.</li>
                </ul>

                <h2>동양의 12지신 (띠)</h2>
                <p>
                    한국을 포함한 동아시아 문화권에서는 태어난 해에 따라 동물을 상징으로 삼는 '띠' 문화가 있습니다. 12년 주기로 순환하며, 각 동물마다 고유한 성향을 가진다고 믿습니다.
                </p>
                <ul>
                    <li><strong>자축인묘진사오미신유술해:</strong> 쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양, 원숭이, 닭, 개, 돼지 순서로 이어집니다.</li>
                    <li><strong>주의사항:</strong> 띠는 원래 '입춘(2월 4일경)'을 기준으로 바뀌지만, 현대에는 편의상 양력 1월 1일이나 음력 설날을 기준으로 하기도 합니다. 이 계산기는 가장 보편적인 <strong>양력 연도</strong>를 기준으로 계산합니다.</li>
                </ul>

                <h2>재미로 보는 궁합</h2>
                <p>
                    별자리와 띠는 친구, 연인, 동료와의 궁합을 볼 때도 자주 사용됩니다. 물론 과학적인 근거보다는 오랜 문화적 통계와 믿음에 기반한 것이니, 좋은 결과는 기분 좋게 받아들이고 나쁜 결과는 재미로 넘기는 지혜가 필요합니다!
                </p>
            </section>
        </div>
    );
}
