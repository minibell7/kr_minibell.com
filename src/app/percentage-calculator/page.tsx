import type { Metadata } from 'next';
import styles from './page.module.css';
import PercentageClient from './PercentageClient';

export const metadata: Metadata = {
    title: '퍼센트 계산기 | 백분율, 할인율, 증감율 계산',
    description: '전체 값의 몇 퍼센트인지, 얼마가 할인되었는지, 작년 대비 얼마나 증가했는지 헷갈릴 때! 무료 퍼센트 계산기로 즉시 해결하세요.',
    keywords: ['퍼센트계산기', '백분율계산법', '할인율계산기', '수익률계산', '증감율'],
    openGraph: {
        title: '퍼센트 계산기 | 미니벨 유틸리티',
        description: '할인, 연봉 인상, 주식 수익률 계산 한방에!',
        type: 'website',
    }
};

export default function PercentagePage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>퍼센트 계산기</h1>
            <p className={styles.description}>
                할인율, 비율, 증감율 등 헷갈리는 퍼센트 계산을 쉽게 해결하세요.
            </p>

            <PercentageClient />

            <section className={styles.seoSection}>
                <h2>퍼센트 계산기 활용법</h2>
                <p>
                    일상생활에서 퍼센(%) 계산은 필수입니다. **쇼핑할 때 할인된 가격**, **주식 투자 수익률**, **작년 대비 매출 증가율** 등 다양한 상황에서 이 계산기가 도움이 됩니다. 복잡한 공식 없이 숫자만 입력하면 답이 나옵니다.
                </p>

                <h2>제공하는 3가지 모드</h2>
                <ul>
                    <li>
                        <strong>비율 값 계산 (전체의 몇 %는 얼마?):</strong>
                        <br /><em>"50,000원의 20% 할인은 얼마인가?"</em> 등을 구할 때 사용합니다. 쇼핑할 때 가장 유용합니다.
                    </li>
                    <li>
                        <strong>비율(%) 계산 (얼마가 전체의 몇 %인가?):</strong>
                        <br /><em>"100점 만점에 85점이면 몇 퍼센트인가?"</em> 성적이나 달성률을 확인할 때 씁니다.
                    </li>
                    <li>
                        <strong>증감율 계산 (얼마에서 얼마로 변하면 몇 %?):</strong>
                        <br /><em>"내 연봉이 3000에서 3500으로 오르면 몇 % 인상인가?"</em> 성장률, 수익률 분석에 필수입니다.
                    </li>
                </ul>

                <h2>자주 묻는 질문 (FAQ)</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. 퍼센트 포인트(%p)는 다른가요?</h3>
                        <p>A. 네, 다릅니다. '퍼센트'는 비율의 변화를 말하고, '퍼센트 포인트'는 퍼센트 **수치 자체의 차이**를 말합니다. (예: 금리가 3%에서 4%가 되면, 1%p 상승한 것이지만 비율로는 33.3% 상승한 것입니다.)</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
