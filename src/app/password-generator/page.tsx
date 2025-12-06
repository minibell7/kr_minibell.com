import type { Metadata } from 'next';
import styles from './page.module.css';
import PasswordClient from './PasswordClient';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
    title: '안전한 비밀번호 생성기 | 강력한 랜덤 암호 추천',
    description: '해킹 불가능한 강력하고 복잡한 비밀번호를 즉시 생성하세요. 길이 설정, 특수문자 포함 여부를 선택하여 나만의 안전한 암호를 만들 수 있습니다.',
    keywords: ['비밀번호생성기', '랜덤비밀번호', '안전한암호', '패스워드생성', '강력한비밀번호', '보안'],
    openGraph: {
        title: '안전한 비밀번호 생성기 | 미니벨 유틸리티',
        description: '내 계정을 지키는 가장 쉬운 방법, 강력한 암호 만들기.',
        type: 'website',
    }
};

export default function PasswordGeneratorPage() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>안전한 비밀번호 생성기</h1>
            <p className={styles.description}>
                해킹 위험을 차단하는 강력하고 복잡한 랜덤 비밀번호를 생성합니다.
            </p>

            <PasswordClient />

            <section className={styles.seoSection}>
                <h2>왜 복잡한 비밀번호가 필요한가요?</h2>
                <p>
                    "123456"이나 "password" 같은 쉬운 비밀번호는 해커들의 먹잇감이 되기 쉽습니다. **무차별 대입 공격(Brute Force Attack)**을 방어하려면 영문 대소문자, 숫자, 특수문자가 섞인 길고 복잡한 비밀번호를 사용해야 합니다.
                </p>

                <h2>안전한 비밀번호 만드는 법</h2>
                <ul>
                    <li><strong>길이가 생명:</strong> 비밀번호는 길수록 안전합니다. 보안 전문가들은 최소 12자리 이상을 권장합니다.</li>
                    <li><strong>다양한 문자 혼합:</strong> 숫자, 기호, 대문자를 섞으면 경우의 수가 기하급수적으로 늘어나 해독이 어려워집니다.</li>
                    <li><strong>유추 불가능성:</strong> 생일, 전화번호, 이름 등 개인정보가 포함된 암호는 피해야 합니다.</li>
                </ul>

                <FAQSection items={[
                    {
                        question: "Q. 온라인에서 비밀번호를 만들어도 안전한가요?",
                        answer: "A. 네, 100% 안전합니다. 이 도구는 클라이언트(브라우저) 내부에서만 작동하며, 생성된 비밀번호는 서버로 전송되거나 저장되지 않습니다. 오직 여러분만 볼 수 있습니다."
                    },
                    {
                        question: "Q. 이렇게 복잡한 걸 어떻게 외우나요?",
                        answer: "A. 외우려고 하지 마세요! 비밀번호 관리자(Password Manager) 앱을 사용하여 안전하게 저장하는 것이 좋습니다. 모든 사이트마다 다른 비밀번호를 쓰는 것이 보안의 핵심입니다."
                    },
                    {
                        question: "Q. 특수문자가 왜 중요한가요?",
                        answer: "A. 비밀번호의 '복잡도(Entropy)'를 높여주기 때문입니다. 같은 길이여도 특수문자가 섞이면 해킹 프로그램이 정답을 찾는 데 걸리는 시간이 몇천 배로 늘어납니다."
                    }
                ]} />
            </section>
        </div>
    );
}
