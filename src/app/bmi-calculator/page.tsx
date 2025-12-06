import type { Metadata } from 'next';
import styles from './page.module.css';
import BMIClient from './BMIClient';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
    title: '비만도 계산기 (BMI) | 다이어트 필수 체크',
    description: '키와 몸무게만으로 비만도를 무료로 측정하세요. 정상, 과체중, 비만 여부를 즉시 확인하고 건강한 다이어트 계획을 세우세요.',
    keywords: ['비만도계산기', 'BMI계산기', '다이어트', '비만측정', '정상체중', '기초대사량'],
    openGraph: {
        title: '무료 비만도 계산기 (BMI) | 미니벨 유틸리티',
        description: '내 비만도는 정상일까? 3초 만에 결과 확인하기',
        type: 'website',
    }
};

export default function BMICalculatorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>비만도 계산기 (BMI)</h1>
            <p className={styles.description}>
                키와 몸무게를 입력하여 나의 비만도와 건강 상태를 확인해보세요.
            </p>

            <BMIClient />

            <section className={styles.seoSection}>
                <h2>BMI(체질량지수)란?</h2>
                <p>
                    <strong>BMI (Body Mass Index)</strong>는 체중(kg)을 신장(m)의 제곱으로 나눈 값으로, 비만도를 판정하는 가장 널리 쓰이는 국제 표준입니다. 체지방을 직접 측정하지는 않지만, 체지방량과 상관관계가 높아 건강 위험을 예측하는 지표로 활용됩니다.
                </p>

                <h2>비만도 판정 기준 (대한비만학회)</h2>
                <ul>
                    <li><strong>저체중:</strong> 18.5 미만</li>
                    <li><strong>정상:</strong> 18.5 ~ 22.9</li>
                    <li><strong>과체중 (비만 전단계):</strong> 23 ~ 24.9</li>
                    <li><strong>비만 1단계:</strong> 25 ~ 29.9</li>
                    <li><strong>비만 2단계:</strong> 30 ~ 34.9</li>
                    <li><strong>고도비만:</strong> 35 이상</li>
                </ul>
                <p className={styles.note}>
                    * 서구권 기준과 달리 한국인은 BMI 25 이상부터 비만으로 정의합니다. (아시아 태평양 기준)
                </p>

                <FAQSection items={[
                    {
                        question: "Q. BMI는 누구에게나 정확한가요?",
                        answer: "A. 아닙니다. 근육량이 많은 운동선수나 임신부, 노약자의 경우 BMI만으로는 정확한 비만도를 판정하기 어렵습니다. 체성분 분석(인바디)을 함께 하는 것이 좋습니다."
                    },
                    {
                        question: "Q. 정상 체중을 유지하려면 어떻게 해야 하나요?",
                        answer: "A. 규칙적인 식사와 주 3회 이상의 유산소 운동이 필수적입니다. 단순히 체중을 줄이는 것보다 근육량을 유지하면서 체지방을 줄이는 것이 중요합니다."
                    },
                    {
                        question: "Q. 고도비만이면 바로 운동해도 되나요?",
                        answer: "A. 갑작스러운 고강도 운동은 관절에 무리를 줄 수 있습니다. 식단 조절과 가벼운 걷기부터 시작하여 전문의와 상담하는 것을 권장합니다."
                    }
                ]} />
            </section>
        </div>
    );
}
