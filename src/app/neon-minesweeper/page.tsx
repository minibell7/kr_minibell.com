import MinesweeperClient from './MinesweeperClient';
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: '네온 지뢰찾기 | 클래식 두뇌 퍼즐 게임',
    description: '윈도우 기본 게임으로 유명한 지뢰찾기를 네온 스타일로 즐기세요. 논리와 추리력을 발휘해 지뢰를 피하고 모든 칸을 여세요.',
    keywords: ['지뢰찾기', '마인스위퍼', '고전게임', '두뇌게임', '퍼즐게임', '무료웹게임'],
    openGraph: {
        title: '네온 지뢰찾기 | 미니벨 아케이드',
        description: '지뢰를 피해 모든 칸을 열 수 있을까요? 당신의 두뇌를 시험해보세요.',
        type: 'website',
    }
};

export default function MinesweeperPage() {
    return (
        <div className={styles.pageWrapper}>
            <MinesweeperClient />

            <section className={styles.seoSection}>
                <h2>네온 지뢰찾기(Minesweeper) 소개</h2>
                <p>
                    <strong>네온 지뢰찾기</strong>는 과거 윈도우 PC의 기본 게임으로 사랑받았던 지뢰찾기를 현대적인 감각으로 재해석한 것입니다. 숫자를 단서로 숨겨진 지뢰의 위치를 찾아내는 팽팽한 긴장감을 느껴보세요.
                </p>

                <h2>게임 방법</h2>
                <ul>
                    <li><strong>목표:</strong> 지뢰가 없는 안전한 칸을 모두 열어야 합니다. 하나라도 지뢰를 건드리면 게임 오버!</li>
                    <li><strong>숫자의 의미:</strong> 칸을 열었을 때 나오는 숫자는 해당 칸을 둘러싼 8개의 칸(가로, 세로, 대각선)에 들어있는 **지뢰의 개수**입니다.</li>
                    <li><strong>깃발 꽂기:</strong> 지뢰가 확실해 보이는 곳은 우클릭(모바일은 길게 터치)하여 깃발을 꽂아 표시하세요.</li>
                </ul>

                <h2>난이도 안내</h2>
                <ul>
                    <li><strong>초급(Easy):</strong> 9x9 행렬에 지뢰 10개. 가볍게 몸풀기용.</li>
                    <li><strong>중급(Medium):</strong> 16x16 행렬에 지뢰 40개. 본격적인 두뇌 싸움.</li>
                    <li><strong>고급(Hard):</strong> 30x16 행렬에 지뢰 99개. 극한의 난이도!</li>
                </ul>

                <h2>공략 팁</h2>
                <ul>
                    <li><strong>가운데부터 공략:</strong> 모서리보다는 중앙을 먼저 여는 것이 확률적으로 안전한 영역을 넓힐 가능성이 큽니다.</li>
                    <li><strong>1-2-1 패턴:</strong> 일직선상에 1-2-1이 보인다면 양쪽 1 옆에는 반드시 지뢰가 있습니다. 이러한 패턴을 익히면 속도가 빨라집니다.</li>
                    <li><strong>찍기(운):</strong> 논리적으로 알 수 없는 상황이 오면 확률을 계산해 과감하게 찍어야 할 수도 있습니다. 행운을 빕니다!</li>
                </ul>
            </section>
        </div>
    );
}
