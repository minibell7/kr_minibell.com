import type { Metadata } from 'next';
import styles from './page.module.css';
import FaviconGeneratorClient from './FaviconGeneratorClient';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
    title: '무료 파비콘 생성기 | 이미지로 아이콘(PNG) 만들기',
    description: 'JPG, PNG 이미지를 파비콘(Favicon)으로 변환하세요. 16x16, 32x32 등 웹사이트와 앱에 필요한 모든 사이즈를 한번에 100% 무료로 생성합니다.',
    keywords: ['파비콘생성', '아이콘만들기', '웹사이트아이콘', '파비콘변환', '무료파비콘', 'PNG변환'],
    openGraph: {
        title: '무료 파비콘 생성기 | 미니벨 유틸리티',
        description: '내 사이트의 얼굴, 파비콘을 3초 만에 만들어보세요.',
        type: 'website',
    }
};

export default function FaviconGeneratorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>무료 파비콘 생성기</h1>
            <p className={styles.description}>
                이미지 파일만 올리면 웹사이트에 필요한 모든 크기의 파비콘을 자동으로 생성합니다.
            </p>

            <FaviconGeneratorClient />

            <section className={styles.seoSection}>
                <h2>파비콘(Favicon)이란?</h2>
                <p>
                    **"Favorite Icon"**의 줄임말로, 웹 브라우저 탭, 즐겨찾기 목록, 주소창 옆에 표시되는 작은 아이콘을 말합니다. 작지만 사용자에게 사이트의 브랜드 이미지를 각인시키는 중요한 요소입니다. 멋진 로고가 있어도 파비콘이 없으면 기본 '지구본' 모양으로 떠서 전문성이 떨어져 보일 수 있습니다.
                </p>

                <h2>왜 이 도구를 써야 하나요?</h2>
                <p>
                    포토샵으로 일일이 크기를 조절할 필요가 없습니다. 원본 이미지 하나만 업로드하면, 웹 표준과 모바일 앱에 필요한 **표준 사이즈 4종**을 즉시 생성해드립니다.
                </p>

                <h2>지원하는 사이즈</h2>
                <ul>
                    <li><strong>16x16 px:</strong> 브라우저 탭, 주소창용 표준 사이즈</li>
                    <li><strong>32x32 px:</strong> 고해상도 디스플레이, 작업 표시줄용</li>
                    <li><strong>192x192 px:</strong> 안드로이드 홈 화면 바로가기 아이콘 (PWA)</li>
                    <li><strong>512x512 px:</strong> 앱스토어 및 로딩 화면용 고화질 아이콘</li>
                </ul>

                <h2>파비콘 적용 방법</h2>
                <ol>
                    <li><strong>이미지 준비:</strong> 정사각형(1:1 비율) 로고나 아이콘 이미지를 준비하세요. (배경이 투명한 PNG 권장)</li>
                    <li><strong>업로드:</strong> 위 박스를 클릭하거나 파일을 드래그하여 업로드합니다.</li>
                    <li><strong>다운로드:</strong> 생성된 파일 중 필요한 사이즈를 다운로드합니다.</li>
                    <li><strong>코드 추가:</strong> 웹사이트의 <code>&lt;head&gt;</code> 태그 안에 아래와 같이 코드를 추가합니다.
                        <br /><code>&lt;link rel="icon" href="/favicon.png" /&gt;</code>
                    </li>
                </ol>

                <FAQSection items={[
                    {
                        question: "Q. 어떤 파일을 올릴 수 있나요?",
                        answer: "A. JPG, PNG, GIF 등 대부분의 이미지 파일을 지원합니다. 하지만 가장 깨끗한 결과를 위해 **배경이 투명한 고화질 PNG** 파일을 추천합니다."
                    },
                    {
                        question: "Q. ICO 파일은 안 만드나요?",
                        answer: "A. 과거에는 ICO 파일이 필수였지만, 최신 모던 브라우저들은 모두 **PNG 형식**의 파비콘을 완벽하게 지원합니다. PNG가 화질과 투명도 처리에 훨씬 유리합니다."
                    }
                ]} />
            </section>
        </div>
    );
}
