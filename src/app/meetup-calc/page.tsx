import { Metadata } from 'next';
import MeetupClient from './MeetupClient';

export const metadata: Metadata = {
    title: 'N빵 더치페이 계산기 | 회식비 모임비 정산',
    description: '회식비, 여행 경비, 모임 회비를 인원수대로 정확하게 나누세요. 1원 단위 절사 등 스마트한 N/1 기능을 제공합니다.',
    keywords: ['더치페이', 'N빵', '회식비계산', '모임통장', '정산하기'],
};

export default function MeetupPage() {
    return <MeetupClient />;
}
