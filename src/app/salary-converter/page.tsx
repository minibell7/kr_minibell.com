import type { Metadata } from 'next';
import styles from './page.module.css';
import SalaryClient from './SalaryClient';

export const metadata: Metadata = {
    title: '급여 계산기 | 연봉 실수령액 계산 & 시급 변환',
    description: '내 연봉의 실제 월령액은 얼마일까? 시급, 월급, 연봉을 자유롭게 변환하고 세전/세후 예상 금액을 확인해보세요. 2025년 최저시급 적용.',
    keywords: ['급여계산기', '연봉계산기', '실수령액', '시급계산기', '월급계산기', '2025최저시급'],
    openGraph: {
        title: '급여 & 연봉 계산기 | 미니벨 유틸리티',
        description: '연봉 3000만원, 내 통장엔 얼마가 들어올까? 지금 바로 확인하세요.',
        type: 'website',
    }
};

export default function SalaryConverterPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>급여 계산기</h1>
            <p className={styles.description}>
                연봉, 월급, 시급을 입력하여 예상 실수령액과 환산 금액을 확인하세요.
            </p>

            <SalaryClient />

            <section className={styles.seoSection}>
                <h2>알아두면 쓸모있는 급여 상식</h2>
                <p>
                    <strong>통상임금(209시간)이란?</strong><br />
                    대한민국 근로기준법상 주 40시간(하루 8시간) 근무자의 월 소정근로시간은 <strong>209시간</strong>입니다. (주휴시간 포함)<br />
                    <em>(40시간 + 8시간) × 365일 ÷ 7일 ÷ 12개월 ≒ 209시간</em>
                </p>

                <h2>2025년 최저시급</h2>
                <p>
                    2025년 최저시급은 <strong>10,030원</strong>입니다. 이를 월급(209시간 기준)으로 환산하면 <strong>2,096,270원</strong>입니다.
                </p>

                <h2>세전 vs 세후 (예상 공제율)</h2>
                <ul className={styles.taxInfoList}>
                    <li><strong>4대보험:</strong> 국민연금(4.5%), 건강보험(약 3.5%), 장기요양(건보료의 약 12%), 고용보험(0.9%) 등 약 9%~10%가 기본 공제됩니다.</li>
                    <li><strong>소득세:</strong> 급여 구간과 부양가족 수에 따라 근로소득 간이세액표를 기준으로 원천징수됩니다.</li>
                </ul>

                <div className={styles.disclaimer}>
                    <strong>주의사항:</strong> 이 계산기는 일반적인 근로자를 기준으로 한 <strong>단순 예상치</strong>입니다. 실제 급여는 회사 내규, 비과세 식대, 부양가족 수, 연말정산 결과에 따라 달라질 수 있습니다.
                </div>
            </section>
        </div>
    );
}
