import React from 'react';
import FastingClient from './FastingClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '간헐적 단식 타이머 (16:8) | 무료 단식 추적기',
    description: '가장 인기 있는 16:8 간헐적 단식을 도와주는 무료 타이머입니다. 단식 시간과 식사 가능 시간을 직관적으로 보여주며, 별도 가입 없이 진행 상황을 저장할 수 있습니다.',
    keywords: ['간헐적단식', '단식타이머', '16대8단식', '다이어트어플', '단식추적기', '금식타이머'],
};

export default function FastingTrackerPage() {
    return (
        <main style={{ minHeight: '100vh', padding: '4rem 2rem' }}>
            <FastingClient />

            <section style={{ maxWidth: '800px', margin: '4rem auto', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                    간헐적 단식(Intermittent Fasting)이란?
                </h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    간헐적 단식은 '무엇을' 먹느냐보다 <strong>'언제'</strong> 먹느냐에 집중하는 식이요법입니다. 정해진 시간 동안만 식사를 하고, 나머지 시간은 공복을 유지하여 신체가 지방을 태우도록 유도합니다. 가장 대중적인 방법은 하루 24시간 중 <strong>16시간 단식하고 8시간 동안 식사하는 16:8 방식</strong>입니다.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    16:8 단식의 효과
                </h3>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li><strong>체중 감량:</strong> 전체적인 칼로리 섭취가 줄고 지방 연소가 촉진됩니다.</li>
                    <li><strong>인슐린 저항성 개선:</strong> 공복 상태에서 혈당이 낮아지고 인슐린 민감도가 좋아집니다.</li>
                    <li><strong>피부 개선 및 해독:</strong> 소화기관이 쉴 수 있는 시간을 주어 체내 독소 배출을 돕습니다.</li>
                    <li><strong>집중력 향상:</strong> 식곤증이 사라지고 정신이 맑아지는 효과가 있습니다.</li>
                </ul>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
                    사용 방법
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    1. <strong>단식 시작:</strong> 저녁 식사를 마친 후 '단식 시작' 버튼을 누르세요.<br />
                    2. <strong>시간 체크:</strong> 타이머가 흐르는 동안 물이나 아메리카노 외에는 섭취를 자제하세요.<br />
                    3. <strong>단식 종료:</strong> 목표 시간(16시간)이 채워지면 알림을 보고 식사를 시작하세요!
                </p>

                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', marginTop: '2rem' }}>
                    <strong style={{ color: 'var(--accent-primary)' }}>참고:</strong> 타이머 기록은 브라우저에 자동 저장되므로, 창을 닫아도 시간이 계속 흐릅니다. 언제든 다시 와서 확인하세요.
                </div>
            </section>
        </main>
    );
}
