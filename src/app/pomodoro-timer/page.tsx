import type { Metadata } from 'next';
import styles from './page.module.css';
import PomodoroClient from './PomodoroClient';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
    title: '무료 뽀모도로 타이머 | 집중력 향상 공부 타이머 (25분)',
    description: '25분 집중, 5분 휴식! 뽀모도로 기법을 활용한 무료 온라인 타이머입니다. 공부, 업무, 코딩 등 집중력이 필요할 때 루틴을 만들어보세요. 알림음 제공.',
    keywords: ['뽀모도로타이머', '공부타이머', '집중력타이머', '토마토타이머', '온라인타이머', '시간관리', '스터디타이머'],
    openGraph: {
        title: '무료 뽀모도로 타이머 | 미니벨 유틸리티',
        description: '25분 집중, 5분 휴식. 뽀모도로 타이머로 생산성을 높이세요.',
        type: 'website',
    }
};

export default function PomodoroPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>뽀모도로 집중 타이머</h1>
            <p className={styles.description}>
                25분 집중하고 5분 쉬는 뽀모도로 기법으로 효율적인 하루를 만드세요.
            </p>

            <PomodoroClient />

            <section className={styles.seoSection}>
                <h2>뽀모도로 기법이란?</h2>
                <p>
                    <strong>뽀모도로(Pomodoro) 기법</strong>은 1980년대 후반 프란체스코 시릴로가 제안한 시간 관리 방법론으로, 타이머를 이용해 25분간 집중해서 일하고 5분간 쉬는 주기를 반복하는 것입니다. '뽀모도로'는 이탈리아어로 토마토를 뜻하는데, 시릴로가 토마토 모양의 요리용 타이머를 사용한 데서 유래했습니다.
                </p>

                <h2>왜 효과적일까요?</h2>
                <ul>
                    <li><strong>미루는 습관 타파:</strong> "딱 25분만 하자"는 마음가짐은 거대한 작업에 대한 부담감을 줄여주어 시작하기 쉽게 만듭니다.</li>
                    <li><strong>번아웃 방지:</strong> 주기적인 휴식은 뇌의 피로를 풀어주어 장시간 작업에도 지치지 않게 도와줍니다.</li>
                    <li><strong>집중력 강화:</strong> 타이머가 돌아가는 동안은 오직 한 가지 일에만 몰입하게 되어 생산성이 폭발적으로 증가합니다.</li>
                </ul>

                <h2>사용 방법</h2>
                <ol>
                    <li><strong>집중 (25분):</strong> '시작' 버튼을 누르고 25분 동안은 스마트폰도 보지 말고 오직 할 일에만 집중하세요.</li>
                    <li><strong>알림:</strong> 시간이 다 되면 알림이 울립니다. 하던 일을 멈추세요.</li>
                    <li><strong>휴식 (5분):</strong> '휴식' 버튼을 누르고 5분간 스트레칭을 하거나 물을 마시며 뇌를 쉬게 하세요.</li>
                    <li><strong>반복:</strong> 4세트(약 2시간)를 반복한 후에는 15~30분 정도 길게 휴식하는 것이 좋습니다.</li>
                </ol>

                <FAQSection items={[
                    {
                        question: "Q. 꼭 25분이어야 하나요?",
                        answer: "A. 25분이 표준이지만, 자신의 스타일에 맞게 30분, 50분 등 집중 시간을 늘려도 좋습니다. 핵심은 '집중'과 '휴식'을 분리하는 것입니다."
                    },
                    {
                        question: "Q. 알림 소리가 나나요?",
                        answer: "A. 네, 타이머가 종료되면 짧은 알림음이 재생됩니다. (브라우저 정책상 소리 자동 재생이 차단된 경우, 화면 터치 후 다시 시도해주세요.)"
                    }
                ]} />
            </section>
        </div>
    );
}
