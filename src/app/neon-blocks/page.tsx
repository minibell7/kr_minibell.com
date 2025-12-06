import BlocksClient from './BlocksClient';
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: '네온 블록 (테트리스) | 무료 추억의 퍼즐 게임',
    description: '사이버펑크 네온 스타일로 재탄생한 고전 블록 퍼즐 게임입니다. 설치 없이 웹에서 바로 즐기세요. 모바일 터치 조작 지원.',
    keywords: ['테트리스', '블록게임', '무료게임', '고전게임', '퍼즐게임', '네온게임', '웹게임'],
    openGraph: {
        title: '네온 블록 | 미니벨 아케이드',
        description: '지금 바로 도전하여 최고 점수를 기록하세요!',
        type: 'website',
    }
};

export default function BlocksPage() {
    return (
        <div className={styles.pageWrapper}>
            <BlocksClient />

            <section className={styles.seoSection}>
                <h2>네온 블록(Neon Blocks) 소개</h2>
                <p>
                    <strong>네온 블록</strong>은 80년대를 풍미했던 전설적인 블록 퍼즐 게임을 현대적인 사이버펑크 감성으로 재해석한 게임입니다. 떨어지는 블록(테트로미노)들을 빈틈없이 끼워 맞춰 라인을 삭제하고 점수를 획득하세요.
                </p>

                <h2>게임 규칙</h2>
                <ul>
                    <li><strong>목표:</strong> 블록들을 가로 한 줄로 꽉 채우면 해당 라인이 사라지고 점수를 얻습니다.</li>
                    <li><strong>콤보:</strong> 한 번에 여러 줄을 없애면('테트리스') 더 높은 점수를 받습니다.</li>
                    <li><strong>레벨 업:</strong> 점수가 쌓이면 레벨이 오르고 블록이 떨어지는 속도가 빨라집니다.</li>
                    <li><strong>게임 오버:</strong> 블록이 화면 꼭대기까지 쌓이면 게임이 끝납니다.</li>
                </ul>

                <h2>조작 방법</h2>
                <ul>
                    <li><strong>이동:</strong> 방향키(←, →) 또는 A, D</li>
                    <li><strong>회전:</strong> 위쪽 방향키(↑) 또는 W</li>
                    <li><strong>빠르게 내리기(Soft Drop):</strong> 아래쪽 방향키(↓) 또는 S</li>
                    <li><strong>한방에 내리기(Hard Drop):</strong> 스페이스바</li>
                    <li><strong>모바일:</strong> 화면 하단의 가상 버튼을 사용하세요.</li>
                </ul>

                <h2>고득점 팁</h2>
                <p>
                    블록을 평평하게 쌓으면서 긴 막대(I 블록)를 넣을 수 있는 한 칸을 비워두세요. I 블록이 나왔을 때 꽂아 넣으면 한 번에 4줄을 없애는 쾌감을 느낄 수 있습니다!
                </p>
            </section>
        </div>
    );
}
