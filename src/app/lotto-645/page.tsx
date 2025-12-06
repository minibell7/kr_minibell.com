import { Metadata } from 'next';
import LottoClient from './LottoClient';

export const metadata: Metadata = {
    title: '로또 6/45 생성기 | 무료 로또 번호 추천',
    description: '이번 주 행운의 로또 번호를 무료로 생성하세요. 꿈 해몽 키워드로 번호를 추천받을 수도 있습니다.',
    keywords: ['로또', '로또번호생성기', '로또645', '로또명당', '무료로또'],
};

export default function LottoPage() {
    return <LottoClient />;
}
