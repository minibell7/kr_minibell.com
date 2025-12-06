import type { Metadata } from 'next';
import styles from './page.module.css';
import OGGeneratorClient from './OGGeneratorClient';

export const metadata: Metadata = {
    title: '오픈 그래프(OG) 태그 생성기 | 카카오톡/링크 미리보기 설정',
    description: '카카오톡, 페이스북, 슬랙에 링크 공유 시 뜨는 이미지와 제목을 직접 만들어보세요. 메타 태그(Meta Tag)를 자동으로 생성하여 클릭률을 높여줍니다.',
    keywords: ['오픈그래프', 'OG태그', '메타태그생성', '링크미리보기', '썸네일설정', '카카오톡링크이미지', 'SEO도구'],
    openGraph: {
        title: '오픈 그래프(OG) 태그 생성기 | 미니벨 유틸리티',
        description: '내 링크가 공유될 때 어떻게 보일까? 미리 확인하고 설정하세요.',
        type: 'website',
    }
};

export default function OGGeneratorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>오픈 그래프(OG) 태그 생성기</h1>
            <p className={styles.description}>
                링크 공유 시 보여질 썸네일 이미지와 제목, 설명을 미리 보고 코드를 생성하세요.
            </p>

            <OGGeneratorClient />

            <section className={styles.seoSection}>
                <h2>내 링크가 '매력적'으로 보이나요?</h2>
                <p>
                    친구에게 카카오톡이나 문자, 슬랙으로 링크를 보냈는데, 썸네일 이미지가 깨지거나 엉뚱한 제목이 뜬 적이 있나요? 이는 **오픈 그래프(Open Graph)** 설정이 제대로 안 되어 있기 때문입니다.
                </p>
                <p>
                    잘 정리된 미리보기 카드는 사람들의 호기심을 자극하여 **클릭률(CTR)을 확실히 높여줍니다.** 내 블로그 글, 쇼핑몰 상품, 포트폴리오 사이트를 알릴 때 필수적인 설정입니다.
                </p>

                <h2>주요 태그 설명</h2>
                <ul>
                    <li><code>og:image</code> (이미지): 가장 중요합니다! 사람들의 시선을 끄는 고화질 이미지(1200x630 권장)를 설정하세요.</li>
                    <li><code>og:title</code> (제목): 클릭하고 싶어지는 간결한 제목을 입력하세요.</li>
                    <li><code>og:description</code> (설명): 제목으로 다 못 한 이야기를 1~2줄로 요약해서 보여줍니다.</li>
                </ul>

                <h2>사용 방법</h2>
                <ol>
                    <li><strong>정보 입력:</strong> 제목, 설명, 그리고 썸네일로 띄울 이미지 주소(URL)를 입력합니다.</li>
                    <li><strong>실시간 미리보기:</strong> 입력하는 즉시 아래 카드 미리보기 화면에 반영됩니다.</li>
                    <li><strong>코드 복사:</strong> 생성된 HTML 코드를 복사합니다.</li>
                    <li><strong>적용:</strong> 내 웹사이트의 <code>&lt;head&gt;</code> 태그 안에 붙여넣기만 하면 끝!</li>
                </ol>

                <h2>자주 묻는 질문 (FAQ)</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. 카카오톡에 이미지를 바꿨는데 반영이 안 돼요!</h3>
                        <p>A. 카카오톡이나 페이스북은 한 번 가져간 이미지를 서버에 임시 저장(캐시)해둡니다. 각 서비스의 '캐시 삭제 도구(Debugger)'를 이용해 초기화하거나, 이미지 파일명을 바꿔서 다시 시도해보세요.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. 이미지 주소는 어디서 가져오나요?</h3>
                        <p>A. 내 서버나 블로그에 업로드된 이미지 위에서 우클릭 후 '이미지 주소 복사'를 하면 됩니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
