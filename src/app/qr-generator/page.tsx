import type { Metadata } from 'next';
import styles from './page.module.css';
import QRGeneratorClient from './QRGeneratorClient';

export const metadata: Metadata = {
    title: '무료 QR 코드 생성기 | 링크, 와이파이, 명함 QR 만들기',
    description: '설치 없이 웹에서 바로 QR 코드를 만드세요. URL, 텍스트, 와이파이 접속용 QR을 고화질 PNG로 즉시 다운로드할 수 있습니다. 100% 무료.',
    keywords: ['QR코드생성', '큐알코드만들기', '무료QR', '링크공유', 'QR코드스캔', '와이파이QR'],
    openGraph: {
        title: '무료 QR 코드 생성기 | 미니벨 유틸리티',
        description: '3초 만에 나만의 QR 코드를 만들어보세요.',
        type: 'website',
    }
};

export default function QRGeneratorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>무료 QR 코드 생성기</h1>
            <p className={styles.description}>
                URL이나 텍스트를 입력하면 즉시 고화질 QR 코드가 생성됩니다.
            </p>

            <QRGeneratorClient />

            <section className={styles.seoSection}>
                <h2>QR 코드, 어디에 쓰나요?</h2>
                <p>
                    <strong>QR 코드(Quick Response Code)</strong>는 스마트폰 카메라로 스캔만 하면 긴 웹사이트 주소(URL)를 입력할 필요 없이 바로 연결해주는 편리한 도구입니다. 명함, 전단지, 식당 메뉴판, 청첩장, 심지어 와이파이 접속까지 다양한 곳에 활용되고 있습니다.
                </p>

                <h2>미니벨 QR 생성기의 장점</h2>
                <ul>
                    <li><strong>100% 영구 무료:</strong> 생성된 QR 코드는 만료 기간이 없으며 평생 무료로 작동합니다.</li>
                    <li><strong>개인정보 보호:</strong> 서버에 데이터를 저장하지 않고 브라우저에서 바로 생성되므로 안전합니다.</li>
                    <li><strong>고화질 다운로드:</strong> 인쇄용으로도 손색없는 고화질 이미지로 저장할 수 있습니다.</li>
                    <li><strong>설치 불필요:</strong> 앱 다운로드 없이 웹에서 바로 실행됩니다.</li>
                </ul>

                <h2>다양한 활용 아이디어</h2>
                <ul>
                    <li><strong>매장/가게:</strong> 와이파이 비밀번호 정보를 담은 QR 코드를 벽에 붙여두세요.</li>
                    <li><strong>명함:</strong> 종이 명함에 내 포트폴리오나 링크드인 프로필로 연결되는 QR을 넣어보세요.</li>
                    <li><strong>이벤트:</strong> 청첩장이나 행사 포스터에 구글 지도 장소 링크를 담아보세요.</li>
                </ul>

                <h2>자주 묻는 질문 (FAQ)</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. QR 코드에 유효기간이 있나요?</h3>
                        <p>A. 아니요! 여기서 만든 QR 코드는 '정적(Static)' 코드이므로 정보가 이미지 자체에 담겨 있어 영구적으로 작동합니다.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. 상업적으로 써도 되나요?</h3>
                        <p>A. 네, 개인/기업 모두 제한 없이 무료로 상업적 이용이 가능합니다.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. 스캔이 잘 안돼요!</h3>
                        <p>A. QR 코드가 너무 작거나 흐릿하면 인식이 안 될 수 있습니다. 또한 배경색과 코드색의 대비(흰 배경에 검은 코드 권장)가 뚜렷해야 잘 인식됩니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
