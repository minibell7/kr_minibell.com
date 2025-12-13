import SudokuClient from './SudokuClient';
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: '네온 스도쿠 (Neon Sudoku) | 무료 두뇌 퍼즐 게임',
    description: '사이버펑크 네온 스타일의 스도쿠 게임을 즐겨보세요. 난이도별 도전, 실시간 실수 체크, 모바일 최적화. 무료 웹 스도쿠.',
    keywords: ['스도쿠', 'Sudoku', '무료스도쿠', '퍼즐게임', '두뇌게임', '웹게임', '숫자퍼즐'],
    openGraph: {
        title: '네온 스도쿠 | 미니벨 아케이드',
        description: '당신의 논리력을 시험하세요. 네온 빛 속에서 즐기는 클래식 스도쿠.',
        type: 'website',
    }
};

export default function SudokuPage() {
    return (
        <div style={{ padding: '0 1rem 4rem', maxWidth: '800px', margin: '0 auto', color: '#ccc' }}>
            <h1 style={{ textAlign: 'center', color: '#00ffff', marginBottom: '2rem', marginTop: '2rem' }}>
                NEON SUDOKU
            </h1>

            <SudokuClient />

            <section style={{ marginTop: '4rem', lineHeight: '1.6' }}>
                <h2 style={{ color: '#fff', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>게임 소개</h2>
                <p>
                    <strong>네온 스도쿠</strong>는 고전적인 스도쿠 퍼즐을 스타일리시한 사이버펑크 디자인으로 재해석한 게임입니다.
                    단순하고 직관적인 인터페이스로 오직 문제 해결에만 집중할 수 있습니다.
                    쉬움(Easy)부터 어려움(Hard)까지, 당신의 두뇌를 깨워보세요.
                </p>

                <h3 style={{ color: '#fff', marginTop: '2rem' }}>게임 규칙</h3>
                <ul style={{ paddingLeft: '1.2rem' }}>
                    <li><strong>기본 목표:</strong> 9x9 격자의 모든 칸을 1부터 9까지의 숫자로 채워야 합니다.</li>
                    <li><strong>제약 조건:</strong>
                        <ul>
                            <li>각 <strong>행(가로줄)</strong>에는 1~9가 중복 없이 하나씩 들어가야 합니다.</li>
                            <li>각 <strong>열(세로줄)</strong>에는 1~9가 중복 없이 하나씩 들어가야 합니다.</li>
                            <li>각 <strong>3x3 박스</strong>(굵은 테두리 안)에는 1~9가 중복 없이 하나씩 들어가야 합니다.</li>
                        </ul>
                    </li>
                    <li><strong>게임 오버:</strong> 실수는 최대 3번까지 허용됩니다. 3번 틀리면 시스템이 종료(Game Over)됩니다.</li>
                </ul>

                <h3 style={{ color: '#fff', marginTop: '2rem' }}>기능 안내</h3>
                <ul style={{ paddingLeft: '1.2rem' }}>
                    <li><strong>난이도 선택:</strong> 게임 도중 언제든지 난이도를 변경하고 새 게임을 시작할 수 있습니다.</li>
                    <li><strong>실시간 피드백:</strong> 숫자를 입력하면 즉시 정답 여부를 확인할 수 있습니다.</li>
                    <li><strong>키보드 지원:</strong> PC에서는 방향키로 이동하고 숫자키로 입력할 수 있습니다.</li>
                </ul>
            </section>
        </div>
    );
}
