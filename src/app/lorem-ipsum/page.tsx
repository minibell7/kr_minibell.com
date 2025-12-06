import type { Metadata } from 'next';
import styles from './page.module.css';
import LoremClient from './LoremClient';

export const metadata: Metadata = {
    title: '로렘 입숨 생성기 | 디자인용 더미 텍스트 (줄글 생성)',
    description: '웹/앱 디자인, 문서 편집 시 필요한 채움글(Lorem Ipsum)을 원하는 길이만큼 생성하세요. 문단 수, 단어 수 조절이 가능합니다.',
    keywords: ['로렘입숨', '더미텍스트', '채움글', '예시글', '디자인텍스트', 'LoremIpsum'],
    openGraph: {
        title: '로렘 입숨 생성기 | 미니벨 유틸리티',
        description: '디자인 시안에 넣을 텍스트가 고민이신가요? 1초 만에 채워드립니다.',
        type: 'website',
    }
};

export default function LoremIpsumPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>로렘 입숨 생성기 (Lorem Ipsum)</h1>
            <p className={styles.description}>
                디자인 시안이나 문서 작업에 필요한 '의미 없는 텍스트'를 생성합니다.
            </p>

            <LoremClient />

            <section className={styles.seoSection}>
                <h2>로렘 입숨(Lorem Ipsum)이란?</h2>
                <p>
                    <strong>로렘 입숨</strong>은 출판이나 그래픽 디자인 분야에서 폰트, 레이아웃, 디자인 등을 미리 보기 위해 사용하는 **가짜 텍스트(Dummy Text)**입니다.
                </p>
                <p>
                    "여기에 내용을 입력하세요"라는 문구를 반복해서 쓰면 사람들의 시선이 글자 내용으로 쏠리게 됩니다. 반면 로렘 입숨은 라틴어처럼 보이지만 실제로는 뜻이 없는 단어들의 나열이기 때문에, 사람들이 **디자인 그 자체에만 집중**할 수 있게 도와줍니다.
                </p>

                <h2>유래가 무엇인가요?</h2>
                <p>
                    기원전 45년경 키케로의 저서 "최고선악론"의 일부 구절을 1500년대의 한 인쇄공이 섞어서 만든 것이 시초입니다. 무려 2000년이 넘는 역사를 가진 근본 있는(?) 가짜 텍스트입니다.
                </p>

                <h2>사용 방법</h2>
                <ol>
                    <li><strong>길이 설정:</strong> 필요한 문단의 개수나 단어 수를 입력하세요.</li>
                    <li><strong>단위 선택:</strong> '문단(Paragraphs)' 단위로 긴 글을 만들거나, '단어(Words)' 단위로 짧은 문장을 만들 수 있습니다.</li>
                    <li><strong>복사:</strong> 생성 버튼을 누른 후 '복사하기'를 클릭하여 내 작업물에 붙여넣으세요.</li>
                </ol>

                <h2>자주 묻는 질문 (FAQ)</h2>
                <div className={styles.faqList}>
                    <div className={styles.faqItem}>
                        <h3>Q. 진짜 라틴어인가요?</h3>
                        <p>A. 원본은 라틴어 문학이지만, 현재 사용되는 로렘 입숨은 단어들을 무작위로 뒤섞고 변형했기 때문에 문법적으로 해석이 불가능한 '넌센스' 텍스트입니다.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Q. 한글 로렘 입숨은 없나요?</h3>
                        <p>A. 한글의 경우 '다람쥐 헌 쳇바퀴에 타고파' 같은 문장을 사용하거나, 애국가 가사를 쓰기도 합니다. 이 도구는 현재 글로벌 표준인 영문 로렘 입숨을 제공합니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
