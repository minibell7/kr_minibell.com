import type { Metadata } from 'next';
import styles from './page.module.css';
import FortuneClient from './FortuneClient';

export const metadata: Metadata = {
    title: '디지털 포춘쿠키 | 오늘의 무료 운세 & 행운의 메시지',
    description: '바삭한 포춘쿠키를 깨서 오늘의 운세와 조언을 확인해보세요. 매일매일 새로운 희망과 동기부여 메시지가 당신을 기다립니다.',
    keywords: ['포춘쿠키', '오늘의운세', '무료운세', '행운의메시지', '명언', '조언'],
    openGraph: {
        title: '디지털 포춘쿠키 | 미니벨 유틸리티',
        description: '오늘 당신에게 찾아온 행운의 메시지를 확인하세요!',
        type: 'website',
    }
};

export default function FortuneCookiePage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>디지털 포춘쿠키</h1>
            <p className={styles.description}>
                쿠키를 클릭해서 오늘의 행운 메시지를 확인해보세요.
            </p>

            <FortuneClient />

            <section className={styles.seoSection}>
                <h2>포춘쿠키의 유래</h2>
                <p>
                    바삭한 과자 속에 점괘가 적힌 종이(Fortune slip)가 들어있는 <strong>포춘쿠키</strong>는 주로 미국 중식당에서 후식으로 제공되면서 전 세계적으로 유명해졌습니다. 그 기원에 대해서는 19세기 일본의 사찰에서 팔던 과자에서 유래했다는 설과 중국계 미국 이민자들이 만들었다는 설 등 다양한 이야기가 있습니다.
                </p>

                <h2>왜 오늘의 운세를 볼까요?</h2>
                <p>
                    포춘쿠키 속 메시지는 때로는 따뜻한 위로를, 때로는 따끔한 충고를, 그리고 때로는 알 수 없는 신비로운 예언을 전해줍니다.
                </p>
                <ul>
                    <li><strong>긍정의 힘:</strong> 하루를 시작할 때 긍정적인 메시지를 읽으면 무의식적으로 좋은 일이 일어날 것 같은 기분을 느낄 수 있습니다. (플라시보 효과)</li>
                    <li><strong>잠깐의 휴식:</strong> 바쁜 일상 속에서 쿠키를 깨는 짧은 순간이나마 여유와 재미를 느낄 수 있습니다.</li>
                    <li><strong>고민 해결의 실마리:</strong> 고민이 있을 때 우연히 마주친 문장이 의외의 해결책이나 영감을 주기도 합니다.</li>
                </ul>

                <h2>사용 팁</h2>
                <ol>
                    <li>마음속으로 고민이나 바라는 점을 떠올리세요.</li>
                    <li>화면의 쿠키를 클릭(터치)하세요.</li>
                    <li>나타난 메시지를 읽고 오늘 하루 마음속에 간직해보세요.</li>
                    <li>친구들에게 공유해서 행운을 나눠보세요!</li>
                </ol>
            </section>
        </div>
    );
}
