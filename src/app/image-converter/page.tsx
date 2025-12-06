import type { Metadata } from 'next';
import styles from './page.module.css';
import ConverterClient from './ConverterClient';

export const metadata: Metadata = {
    title: '무료 WebP 변환기 | JPG/PNG를 WebP로 변환 (용량 줄이기)',
    description: '이미지 용량을 획기적으로 줄여주는 WebP 포맷으로 무료 변환하세요. JPG, PNG 파일을 화질 저하 없이 가볍게 만들어 웹사이트 속도를 높일 수 있습니다.',
    keywords: ['webp변환', '이미지용량줄이기', 'jpg to webp', 'png to webp', '이미지압축', '웹사이트최적화'],
    openGraph: {
        title: '무료 WebP 변환기 | 미니벨 유틸리티',
        description: '화질은 그대로, 용량은 절반으로! 이미지를 WebP로 변환하세요.',
        type: 'website',
    }
};

export default function ImageConverterPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>WebP 이미지 변환기</h1>
            <p className={styles.description}>
                JPG, PNG 이미지를 차세대 웹 표준 포맷인 WebP로 변환하여 용량을 줄이세요.
            </p>

            <ConverterClient />

            <section className={styles.seoSection}>
                <h2>왜 WebP로 변환해야 하나요?</h2>
                <p>
                    웹사이트 속도는 사용자 경험과 SEO(검색 엔진 최적화)에 결정적인 영향을 미칩니다. 무거운 이미지 파일은 로딩 속도를 느리게 만드는 주범입니다. <strong>WebP(웹피)</strong>는 구글이 개발한 최신 이미지 포맷으로, 기존 JPG나 PNG 대비 **30% 이상 더 작은 용량**으로 동일한 화질을 보여줍니다.
                </p>
                <p>
                    블로그나 홈페이지를 운영하신다면, 이미지를 WebP로 변환해서 올리는 것만으로도 페이지 로딩 속도가 빨라지고 구글 노출 순위에 긍정적인 영향을 줄 수 있습니다.
                </p>

                <h2>WebP의 장점</h2>
                <ul>
                    <li><strong>압도적인 압축률:</strong> 화질 저하를 거의 느끼지 못하면서 파일 크기를 획기적으로 줄여줍니다.</li>
                    <li><strong>투명도 지원:</strong> PNG처럼 배경 투명 처리가 가능하면서도 용량은 훨씬 작습니다.</li>
                    <li><strong>웹 표준:</strong> 크롬, 사파리, 엣지 등 모든 최신 브라우저가 완벽하게 지원합니다.</li>
                </ul>

                <h2>사용 방법</h2>
                <ol>
                    <li><strong>이미지 선택:</strong> 위 박스를 클릭하여 변환할 JPG나 PNG 파일을 선택하세요. (드래그 앤 드롭 가능)</li>
                    <li><strong>자동 변환:</strong> 브라우저에서 즉시 변환 작업이 진행됩니다.</li>
                    <li><strong>비교 및 다운로드:</strong> 원본 용량과 줄어든 용량을 비교해보고 '다운로드' 버튼을 누르세요.</li>
                </ol>

                <h2>자주 묻는 질문 (FAQ)</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. 화질이 나빠지지 않나요?</h3>
                        <p>A. WebP는 효율적인 압축 알고리즘을 사용하므로 눈으로 봤을 때 차이를 느끼기 어렵습니다. 웹용으로는 최적의 선택입니다.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. 내 사진이 서버에 저장되나요?</h3>
                        <p>A. 아니요! 이 변환기는 **100% 클라이언트 사이드**에서 작동합니다. 여러분의 사진은 서버로 전송되지 않고 오직 여러분의 브라우저 안에서만 처리되므로 개인정보 유출 걱정이 없습니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
