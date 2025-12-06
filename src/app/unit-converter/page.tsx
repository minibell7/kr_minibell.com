import type { Metadata } from 'next';
import styles from './page.module.css';
import UnitClient from './UnitClient';

export const metadata: Metadata = {
    title: '단위 변환기 | 길이, 무게, 넓이(평), 온도 변환',
    description: '길이(cm, inch), 무게(kg, lb), 넓이(평, m2), 온도(섭씨, 화씨) 등 다양한 단위를 쉽고 빠르게 변환하세요. 한국 실정에 맞는 평수 계산 기능 포함.',
    keywords: ['단위변환기', '평수계산기', '무게변환', '길이변환', '화씨섭씨변환', '미터법'],
    openGraph: {
        title: '단위 변환기 | 미니벨 유틸리티',
        description: '복잡한 단위 계산, 1초 만에 해결하세요!',
        type: 'website',
    }
};

export default function UnitConverterPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>단위 변환기</h1>
            <p className={styles.description}>
                길이, 무게, 넓이, 온도 단위를 간편하게 변환하세요.
            </p>

            <UnitClient />

            <section className={styles.seoSection}>
                <h2>자주 쓰는 단위 변환</h2>
                <p>
                    일상생활이나 해외 직구, 요리 레시피를 보다 보면 생소한 단위들을 마주하게 됩니다. 이 도구를 사용하여 익숙한 단위로 바로 확인해보세요.
                </p>

                <h3>주요 기능</h3>
                <ul>
                    <li>
                        <strong>길이/거리:</strong> 키 측정(cm ↔ feet), 가구 치수(mm ↔ inch), 주행 거리(km ↔ mile) 변환.
                    </li>
                    <li>
                        <strong>무게:</strong> 몸무게(kg ↔ lb), 요리 재료(g ↔ oz/lb) 변환.
                    </li>
                    <li>
                        <strong>넓이(면적):</strong> 부동산 필수 단위인 <strong>평(Pyeong)</strong>과 제곱미터(m²) 간의 정확한 변환.
                    </li>
                    <li>
                        <strong>온도:</strong> 해외 날씨 확인 시 화씨(°F)를 섭씨(°C)로 변환.
                    </li>
                </ul>

                <h2>'평'과 '제곱미터' (아파트 평수 계산)</h2>
                <p>
                    한국에서는 아파트나 집의 크기를 이야기할 때 여전히 '평' 단위를 많이 사용합니다.
                </p>
                <ul>
                    <li><strong>1평 ≒ 3.3058 m²</strong></li>
                    <li><strong>전용 84m²</strong>는 약 <strong>25.4평</strong> (보통 32-34평형 아파트의 실평수)</li>
                    <li><strong>전용 59m²</strong>는 약 <strong>17.8평</strong> (보통 24-25평형 아파트)</li>
                </ul>

                <h2>FAQ</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. 미국 직구 시 신발/옷 사이즈 단위는?</h3>
                        <p>A. 길이는 인치(inch)를 주로 사용합니다. 1인치는 2.54cm입니다.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. 오븐 요리할 때 화씨 350도는 몇 도인가요?</h3>
                        <p>A. 화씨 350°F는 섭씨 약 175~180°C 정도입니다. 에어프라이어나 오븐 사용 시 참고하세요.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
