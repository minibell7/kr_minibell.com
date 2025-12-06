import type { Metadata } from 'next';
import styles from './page.module.css';
import LoanClient from './LoanClient';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
    title: '대출 이자 계산기 | 원리금균등상환, 월 납입금 계산',
    description: '대출 금액, 금리, 기간만 입력하면 월 납입금과 총 이자를 계산해드립니다. 전세자금대출, 주택담보대출, 신용대출 상환 계획을 세워보세요.',
    keywords: ['대출계산기', '이자계산기', '원리금균등상환', '월납입금', '주택담보대출계산', '전세대출이자'],
    openGraph: {
        title: '대출 이자 계산기 | 미니벨 유틸리티',
        description: '내가 갚아야 할 월 이자는 얼마일까?',
        type: 'website',
    }
};

export default function LoanCalculatorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>대출 이자 계산기</h1>
            <p className={styles.description}>
                월 예상 납입금과 총 이자 비용을 미리 계산하여 현명한 금융 생활을 준비하세요.
            </p>

            <LoanClient />

            <section className={styles.seoSection}>
                <h2>대출 계산기 활용 팁</h2>
                <p>
                    대출을 받기 전, 금리에 따른 총 이자 비용을 반드시 확인해야 합니다. 0.1%의 금리 차이도 장기 상환 시에는 큰 금액 차이가 날 수 있습니다. 이 계산기는 가장 일반적인 **원리금 균등 상환** 방식을 기준으로 단순화된 결과를 제공합니다.
                </p>

                <h2>주요 용어 설명</h2>
                <ul>
                    <li><strong>대출 원금 (Principal):</strong> 은행에서 빌리는 순수 금액입니다.</li>
                    <li><strong>연 이자율 (Interest Rate):</strong> 1년 동안 내야 하는 이자의 비율(%)입니다.</li>
                    <li><strong>대출 기간 (Term):</strong> 돈을 빌려 갚기로 한 총 기간(년)입니다.</li>
                    <li><strong>총 상환 금액:</strong> 원금에 총 이자를 더한, 실제로 갚아야 할 전체 금액입니다.</li>
                </ul>

                <FAQSection items={[
                    {
                        question: "Q. 원리금 균등 상환이 뭔가요?",
                        answer: "A. 대출 기간 동안 매달 원금과 이자를 합쳐서 **동일한 금액**을 갚아나가는 방식입니다. 계획적인 지출 관리가 가능해 가장 많이 쓰이는 방식입니다."
                    },
                    {
                        question: "Q. 전세 자금 대출도 계산되나요?",
                        answer: "A. 전세 대출의 경우 보통 '만기 일시 상환'(이자만 내다가 마지막에 원금 상환) 방식이 많습니다. 이 계산기는 원금도 같이 갚는 방식 기준이므로, 이 계산기의 '월 납입금' 결과에서 원금 부분을 제외하고 참고하셔야 할 수 있습니다."
                    }
                ]} />
            </section>
        </div>
    );
}
