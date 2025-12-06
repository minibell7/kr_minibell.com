import type { Metadata } from 'next';
import styles from './page.module.css';
import ThumbnailClient from './ThumbnailClient';

export const metadata: Metadata = {
    title: '무료 유튜브 썸네일 다운로더 | 고화질(HD, 4K) 이미지 추출',
    description: '유튜브 영상 주소만 있으면 썸네일을 1초 만에 추출하여 다운로드할 수 있습니다. HD(1280x720) 고화질을 지원하며 설치 없이 무료로 이용하세요.',
    keywords: ['유튜브썸네일', '썸네일다운로드', '유튜브이미지저장', '썸네일추출', '고화질썸네일', '유튜브커버'],
    openGraph: {
        title: '무료 유튜브 썸네일 다운로더 | 미니벨 유틸리티',
        description: '내가 원하는 유튜브 영상의 썸네일을 원본 화질로 저장하세요.',
        type: 'website',
    }
};

export default function YoutubeThumbnailPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>유튜브 썸네일 다운로더</h1>
            <p className={styles.description}>
                영상 URL만 입력하면 고화질 썸네일을 즉시 추출하여 저장할 수 있습니다.
            </p>

            <ThumbnailClient />

            <section className={styles.seoSection}>
                <h2>유튜브 썸네일이 필요하신가요?</h2>
                <p>
                    디자인 참고용, 블로그 리뷰 작성, 혹은 소장용으로 유튜브 영상의 썸네일 이미지가 필요할 때가 있습니다. 캡처 도구를 쓰면 화질이 떨어지고 플레이어 UI가 같이 찍히기도 합니다.
                </p>
                <p>
                    <strong>미니벨 썸네일 다운로더</strong>는 유튜브 서버에 저장된 **원본 이미지 파일**을 직접 찾아내어 가장 깨끗한 화질로 저장할 수 있게 도와줍니다.
                </p>

                <h2>제공하는 화질 종류</h2>
                <p>영상의 업로드 품질에 따라 최대 4가지 해상도를 제공합니다:</p>
                <ul>
                    <li><strong>최대 해상도 (HD):</strong> 1280x720 픽셀. 원본과 동일한 가장 선명한 화질입니다. (고화질 업로드 영상만 존재)</li>
                    <li><strong>표준 화질 (SD):</strong> 640x480 픽셀. 블로그 본문이나 작은 이미지로 쓰기 좋습니다.</li>
                    <li><strong>고품질 (HQ):</strong> 480x360 픽셀.</li>
                    <li><strong>중간 품질 (MQ):</strong> 320x180 픽셀. 미리보기용으로 적합합니다.</li>
                </ul>

                <h2>사용 방법</h2>
                <ol>
                    <li><strong>주소 복사:</strong> 유튜브 앱이나 웹페이지에서 '공유' 버튼을 눌러 링크를 복사합니다.</li>
                    <li><strong>붙여넣기:</strong> 위 입력창에 주소를 붙여넣고 '썸네일 추출' 버튼을 누릅니다.</li>
                    <li><strong>다운로드:</strong> 원하는 화질의 '다운로드' 버튼을 클릭하여 저장합니다.</li>
                </ol>

                <h2>주의사항 (저작권)</h2>
                <p>
                    썸네일 이미지의 저작권은 해당 영상의 제작자에게 있습니다.
                </p>
                <ul>
                    <li><strong>개인 소장/참고:</strong> 문제없습니다.</li>
                    <li><strong>인용/리뷰:</strong> 출처를 밝히고 정당한 범위 내에서 사용하는 것은 '공정이용'에 해당할 수 있습니다.</li>
                    <li><strong>무단 도용:</strong> 타인의 썸네일을 내 영상인 것처럼 속이거나 상업적으로 무단 사용하는 것은 저작권 침해입니다.</li>
                </ul>

                <h2>자주 묻는 질문 (FAQ)</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. 쇼츠(Shorts) 영상도 되나요?</h3>
                        <p>A. 네! 일반 영상뿐만 아니라 유튜브 쇼츠 링크를 넣어도 동일하게 썸네일을 추출할 수 있습니다.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. HD 화질 버튼이 안 보여요!</h3>
                        <p>A. 원본 영상 자체가 낮은 화질로 업로드되었거나, 썸네일을 저화질로 설정한 경우에는 유튜브 서버에 HD 이미지가 존재하지 않을 수 있습니다. 이 경우 추출 가능한 가장 높은 화질을 보여드립니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
