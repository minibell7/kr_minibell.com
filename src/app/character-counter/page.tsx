import type { Metadata } from 'next';
import styles from './page.module.css';
import CounterClient from './CounterClient';

export const metadata: Metadata = {
    title: '글자수 세기 | 자기소개서, 이력서, 공백포함/제외 계산기',
    description: '자기소개서, 에세이, 블로그 글쓰기 시 글자수를 실시간으로 확인하세요. 공백 포함/제외 글자수, 단어 수, 줄 수를 한눈에 볼 수 있습니다.',
    keywords: ['글자수세기', '글자수계산기', '자소서글자수', '공백제외', '단어수세기', '네이버글자수'],
    openGraph: {
        title: '글자수 세기 | 미니벨 유틸리티',
        description: '공백 포함/제외 글자수를 실시간으로 확인하세요.',
        type: 'website',
    }
};

export default function CharacterCounterPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>실시간 글자수 세기</h1>
            <p className={styles.description}>
                입력하는 즉시 공백 포함/제외 글자수와 단어 수, 줄 수를 계산합니다.
            </p>

            <CounterClient />

            <section className={styles.seoSection}>
                <h2>왜 글자수 세기가 필요한가요?</h2>
                <p>
                    <strong>자기소개서(자소서)</strong> 작성이나 이력서 제출 시, 대부분의 기업은 '1000자 이내'와 같은 분량 제한을 둡니다. 또한 트위터(X), 인스타그램 같은 SNS나 블로그 포스팅 시에도 최적의 길이를 맞추는 것이 중요합니다.
                </p>

                <h2>제공하는 기능</h2>
                <ul>
                    <li><strong>실시간 분석:</strong> 타이핑하거나 붙여넣는 즉시 숫자가 업데이트됩니다. 버튼을 누를 필요가 없습니다.</li>
                    <li><strong>4가지 핵심 지표:</strong> 공백 포함 글자수, 공백 제외 글자수, 단어 수, 줄 수(엔터 기준)를 동시에 제공합니다.</li>
                    <li><strong>100% 보안:</strong> 입력한 내용은 서버로 전송되지 않고 오직 사용자의 브라우저에서만 처리됩니다. 중요한 자소서 내용을 안심하고 붙여넣으세요.</li>
                </ul>

                <h2>플랫폼별 글자수 가이드</h2>
                <p>각 플랫폼마다 권장하거나 제한하는 글자수가 다릅니다:</p>
                <ul>
                    <li><strong>자기소개서:</strong> 보통 문항당 500~1000자 (공백 포함 기준이 많음)</li>
                    <li><strong>네이버 블로그:</strong> 상위 노출을 위해 보통 1500~2000자 권장</li>
                    <li><strong>인스타그램:</strong> 최대 2200자 (권장은 125~150자)</li>
                    <li><strong>트위터(X):</strong> 한글 기준 140자 (영문 280자)</li>
                    <li><strong>유튜브 제목:</strong> 60자 이내 권장 (잘림 방지)</li>
                </ul>

                <h2>자주 묻는 질문 (FAQ)</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. 공백 포함과 제외의 차이는?</h3>
                        <p>A. '공백 포함'은 띄어쓰기(스페이스바)와 줄바꿈(엔터)도 글자 수로 칩니다. '공백 제외'는 오직 눈에 보이는 글자만 셉니다. 자소서 제출처의 기준을 꼭 확인하세요.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. 맞춤법 검사도 되나요?</h3>
                        <p>A. 현재 이 도구는 글자수 계산 기능에 집중하고 있습니다. 맞춤법 검사는 추후 업데이트 예정입니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
