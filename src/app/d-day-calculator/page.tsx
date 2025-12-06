import type { Metadata } from 'next';
import styles from './page.module.css';
import DDayClient from './DDayClient';

export const metadata: Metadata = {
    title: '디데이 계산기 (D-Day) | 날짜수 계산, 기념일 챙기기',
    description: '수능, 전역일, 커플 기념일, 백일 계산까지! 오늘부터 1일 옵션을 지원하는 똑똑한 디데이 계산기입니다.',
    keywords: ['디데이계산기', '날짜계산기', '기념일계산', '전역일계산기', '수능디데이', '커플앱'],
    openGraph: {
        title: '디데이 계산기 (D-Day) | 미니벨 유틸리티',
        description: '놓치기 쉬운 기념일, 1초 만에 계산하세요.',
        type: 'website',
    }
};

export default function DDayPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>디데이 계산기 (D-Day)</h1>
            <p className={styles.description}>
                중요한 일정까지 며칠 남았는지, 특별한 날로부터 며칠이 지났는지 확인하세요.
            </p>

            <DDayClient />

            <section className={styles.seoSection}>
                <h2>디데이 계산기 활용법</h2>
                <p>
                    <strong>디데이(D-Day)</strong> 기능은 시험, 여행, 결혼식 등 기다려지는 미래의 날짜(D-)를 세거나, 연인과의 만남, 아기 탄생일, 금연 시작일 등 과거의 소중한 날짜(D+)를 기록하는 데 유용합니다.
                </p>

                <h2>주요 기능</h2>
                <ul>
                    <li><strong>D-Day (남은 날짜):</strong> 수능, 자격증 시험, 여행 출발일 등 목표일까지 남은 시간을 카운트다운합니다.</li>
                    <li><strong>D+Day (지난 날짜):</strong> 사귄 날짜, 아기 개월 수, 다이어트 시작일 등 경과된 시간을 계산합니다.</li>
                    <li><strong>오늘부터 1일:</strong> 한국 커플 문화에 맞춰 시작일을 1일로 포함하여 계산하는 옵션을 제공합니다.</li>
                    <li><strong>자동 기념일 추천:</strong> 100일, 200일, 1주년 등 챙겨야 할 기념일을 자동으로 알려줍니다.</li>
                </ul>

                <h2>자주 묻는 질문 (FAQ)</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. '오늘부터 1일' 옵션은 언제 쓰나요?</h3>
                        <p>A. 주로 **커플 기념일**을 챙길 때 사용합니다. 만난 당일을 1일로 계산해야 100일 기념일 날짜가 정확하게 맞습니다.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. 만나이 계산도 되나요?</h3>
                        <p>A. 네, 생년월일을 입력하면 태어난 지 며칠이 지났는지(D+) 바로 확인할 수 있습니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
