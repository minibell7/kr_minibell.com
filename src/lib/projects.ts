export interface Project {
    id: string;
    title: string;
    description: string;
    url: string;
    tags: string[];
    featured: boolean;
    category: 'app' | 'utility' | 'content' | 'game';
    section?: 'finance-health' | 'daily-essentials' | 'creator-tools' | 'fun-arcade' | 'featured-app';
}

export const projects: Project[] = [
    // --- Section 1: Finance & Health ---
    {
        id: 'bmi-calculator',
        title: 'BMI 계산기',
        description: '신체 질량 지수(BMI)와 건강 상태를 확인하세요.',
        url: '/bmi-calculator',
        tags: ['Tool', 'Health', 'Fitness'],
        featured: true,
        category: 'utility',
        section: 'finance-health'
    },
    {
        id: 'salary-converter',
        title: '급여 계산기',
        description: '시급을 연봉으로, 또는 그 반대로 즉시 변환하세요.',
        url: '/salary-converter',
        tags: ['Tool', 'Finance', 'Income'],
        featured: true,
        category: 'utility',
        section: 'finance-health'
    },
    {
        id: 'loan-calculator',
        title: '대출 계산기',
        description: '월 상환액과 총 이자를 미리 계산해보세요.',
        url: '/loan-calculator',
        tags: ['Tool', 'Finance', 'Calc'],
        featured: true,
        category: 'utility',
        section: 'finance-health'
    },
    {
        id: 'fasting-tracker',
        title: '간헐적 단식 추적기',
        description: '16:8 단식 타이머와 진행 상황 추적. 상태가 자동 저장됩니다.',
        url: '/fasting-tracker',
        tags: ['Tool', 'Health', 'Timer'],
        featured: true,
        category: 'utility',
        section: 'finance-health'
    },
    // --- Section 2: Daily Essentials ---
    {
        id: 'unit-converter',
        title: '단위 변환기',
        description: '길이, 무게, 면적, 온도 단위를 간편하게 변환하세요.',
        url: '/unit-converter',
        tags: ['Tool', 'Unit', 'Convert'],
        featured: true,
        category: 'utility',
        section: 'daily-essentials'
    },
    {
        id: 'percentage-calculator',
        title: '퍼센트 계산기',
        description: '할인율, 비율, 증감률을 쉽게 계산하세요.',
        url: '/percentage-calculator',
        tags: ['Tool', 'Math', 'Calc'],
        featured: true,
        category: 'utility',
        section: 'daily-essentials'
    },
    {
        id: 'character-counter',
        title: '글자수 세기',
        description: '글자 수, 단어 수, 줄 수를 실시간으로 확인하세요.',
        url: '/character-counter',
        tags: ['Tool', 'Text', 'Writing'],
        featured: true,
        category: 'utility',
        section: 'daily-essentials'
    },
    {
        id: 'd-day-calculator',
        title: '디데이 계산기',
        description: '특별한 날짜까지 남은 기간이나 지난 기간을 계산하세요.',
        url: '/d-day-calculator',
        tags: ['Tool', 'Date', 'Anniversary'],
        featured: true,
        category: 'utility',
        section: 'daily-essentials'
    },
    {
        id: 'password-generator',
        title: '비밀번호 생성기',
        description: '강력하고 안전한 무작위 비밀번호를 생성하세요.',
        url: '/password-generator',
        tags: ['Tool', 'Security', 'Privacy'],
        featured: true,
        category: 'utility',
        section: 'daily-essentials'
    },
    {
        id: 'pomodoro-timer',
        title: '뽀모도로 타이머',
        description: '25분 집중, 5분 휴식으로 생산성을 높이세요.',
        url: '/pomodoro-timer',
        tags: ['Tool', 'Focus', 'Timer'],
        featured: true,
        category: 'utility',
        section: 'daily-essentials'
    },

    // --- Section 3: Creator Tools ---
    {
        id: 'youtube-thumbnail',
        title: '유튜브 썸네일 다운로더',
        description: '유튜브 영상에서 고화질 썸네일을 추출하세요.',
        url: '/youtube-thumbnail',
        tags: ['Tool', 'YouTube', 'Image'],
        featured: true,
        category: 'utility',
        section: 'creator-tools'
    },
    {
        id: 'qr-creator',
        title: 'QR 코드 생성기',
        description: '나만의 QR 코드를 즉시 생성하고 다운로드하세요.',
        url: '/qr-generator',
        tags: ['Tool', 'Utility', 'QR Code'],
        featured: true,
        category: 'utility',
        section: 'creator-tools'
    },
    {
        id: 'image-converter',
        title: 'WebP 이미지 변환기',
        description: '이미지를 WebP로 변환하여 성능을 최적화하세요.',
        url: '/image-converter',
        tags: ['Tool', 'Image', 'Performance'],
        featured: true,
        category: 'utility',
        section: 'creator-tools'
    },
    {
        id: 'lorem-ipsum',
        title: '로렘 입숨 생성기',
        description: '디자인 시안을 위한 더미 텍스트를 생성하세요.',
        url: '/lorem-ipsum',
        tags: ['Tool', 'Design', 'Text'],
        featured: true,
        category: 'utility',
        section: 'creator-tools'
    },
    {
        id: 'favicon-generator',
        title: '파비콘 생성기',
        description: '다양한 크기의 파비콘(PNG)을 생성하세요.',
        url: '/favicon-generator',
        tags: ['Tool', 'Image', 'Utility'],
        featured: true,
        category: 'utility',
        section: 'creator-tools'
    },
    {
        id: 'og-generator',
        title: '오픈 그래프 생성기',
        description: '소셜 미디어용 메타 태그와 미리보기 카드를 생성하세요.',
        url: '/og-generator',
        tags: ['Tool', 'SEO', 'Social'],
        featured: true,
        category: 'utility',
        section: 'creator-tools'
    },

    // --- Section 4: Fun & Arcade ---
    {
        id: 'lotto-645',
        title: '로또 6/45 생성기',
        description: '행운의 로또 번호를 무료로 생성하세요.',
        url: '/lotto-645',
        tags: ['Lotto', 'Korea', 'Lucky'],
        featured: true,
        category: 'utility',
        section: 'fun-arcade'
    },
    {
        id: 'meetup-calculator',
        title: 'N빵 더치페이 계산기',
        description: '회식비, 모임비를 공평하게 나누세요. 자투리 금액 처리까지!',
        url: '/meetup-calc',
        tags: ['Tool', 'Finance', 'Life'],
        featured: true,
        category: 'utility',
        section: 'finance-health'
    },
    {
        id: 'neon-blocks',
        title: '네온 블록스',
        description: '사이버펑크 스타일의 블록 퍼즐 게임을 즐기세요.',
        url: '/neon-blocks',
        tags: ['Game', 'Puzzle', 'Neon'],
        featured: true,
        category: 'game',
        section: 'fun-arcade'
    },
    {
        id: 'neon-minesweeper',
        title: '네온 지뢰찾기',
        description: '사이버펑크 네온 감성의 고전 지뢰찾기 게임.',
        url: '/neon-minesweeper',
        tags: ['Game', 'Puzzle', 'Neon'],
        featured: true,
        category: 'game',
        section: 'fun-arcade'
    },
    {
        id: 'zodiac-calculator',
        title: '별자리 계산기',
        description: '나의 서양 별자리와 띠를 확인해보세요.',
        url: '/zodiac-calculator',
        tags: ['Fun', 'Zodiac', 'Astrology'],
        featured: true,
        category: 'utility',
        section: 'fun-arcade'
    },
    {
        id: 'fortune-cookie',
        title: '디지털 포춘 쿠키',
        description: '쿠키를 깨서 오늘의 운세를 확인하세요.',
        url: '/fortune-cookie',
        tags: ['Fun', 'Fortune', 'Daily'],
        featured: true,
        category: 'utility',
        section: 'fun-arcade'
    },

    // --- Section 5: Featured Apps (Personal Projects) ---
    {
        id: 'dreamflow',
        title: '좀비체크',
        description: '조용히 지갑을 털어가는 잊혀진 \'좀비\' 구독을 찾아보세요. 100% 로컬 & 비공개 - 은행 연동 불필요. 기억 속의 자동 이체와 실제 지출을 비교하여 숨겨진 비용을 찾아냅니다. 문 닫은 가게 화재 보험료를 1.5년이나 냈던 실제 경험에서 탄생했습니다!',
        url: 'https://zombiecheck.mini-bell.com/',
        tags: ['PWA', 'Finance', 'Privacy'],
        featured: true,
        category: 'app',
        section: 'featured-app'
    },
    {
        id: 'soul-animal',
        title: '소울 애니멀',
        description: '저의 3번째 PWA 작품입니다. 당신의 진정한 영혼의 동물을 찾아주는 신비로운 심리 테스트. 16가지 독특한 아키타입과 아름다운 AI 생성 이미지를 만나보세요.',
        url: 'https://soulanimal.mini-bell.com/',
        tags: ['PWA', 'Fun', 'Mystical'],
        featured: true,
        category: 'app',
        section: 'featured-app'
    },
    {
        id: 'pet-bti',
        title: '펫 BTI',
        description: '비개발자로서 만든 첫 "Vibe Coding" 프로젝트입니다. 아이디어가 현실이 될 수 있다는 것을 증명하기 위해 AI와 함께 만들었습니다. 이 프로젝트는 의심을 확신으로 바꾸고 제 여정의 시작이 되었습니다.',
        url: 'https://pet-bti.mini-bell.com/',
        tags: ['PWA', 'Fun', 'AI'],
        featured: true,
        category: 'app',
        section: 'featured-app'
    },
    {
        id: 'zenith-brain-training',
        title: 'Zenith',
        description: '매일 두뇌를 깨우는 훈련을해보세요! 머리가 좋아지는 게임을 통해 6가지 능력을 개발시켜드립니다.',
        url: 'https://zenith.mini-bell.com/',
        tags: ['PWA', 'Brain', 'Puzzle'],
        featured: true,
        category: 'app',
        section: 'featured-app'
    },
    {
        id: 'flirting-test',
        title: '플러팅 능력 고사',
        description: '저의 4번째 PWA 작품입니다. 다양한 상황극을 통해 당신의 플러팅 실력과 연애 스타일을 진단해보세요.',
        url: 'https://flirting-kr.mini-bell.com/',
        tags: ['PWA', 'Fun', 'AI'],
        featured: true,
        category: 'app',
        section: 'featured-app'
    },
    {
        id: 'khair',
        title: 'K-hair',
        description: 'khair.mini-bell.com',
        url: 'https://khair.mini-bell.com/',
        tags: ['Web', 'Service'],
        featured: true,
        category: 'app',
        section: 'featured-app'
    },
    {
        id: 'dgair',
        title: 'DG-air',
        description: 'dgair.mini-bell.com',
        url: 'https://dgair.mini-bell.com/',
        tags: ['Web', 'Service'],
        featured: true,
        category: 'app',
        section: 'featured-app'
    },
    {
        id: 'cjair',
        title: 'CJ-air',
        description: 'cjair.mini-bell.com',
        url: 'https://cjair.mini-bell.com/',
        tags: ['Web', 'Service'],
        featured: true,
        category: 'app',
        section: 'featured-app'
    },

    // --- Content / Blogs ---
    {
        id: 'recipe-blog',
        title: '사장님을 위한 업소용 레시피',
        description: '식당 운영을 위한 실전 레시피와 노하우를 공유합니다.',
        url: 'https://facilitator-y.tistory.com/',
        tags: ['Blog', 'Recipe', 'Business'],
        featured: true,
        category: 'content'
    },
    {
        id: 'quiz-blog',
        title: '심심풀이 퀴즈',
        description: '휴식이 필요할 때 즐기는 다양한 상식 퀴즈.',
        url: 'https://5-hint-quiz.tistory.com/',
        tags: ['Blog', 'Quiz', 'Fun'],
        featured: true,
        category: 'content'
    }
];

export function getFeaturedProjects() {
    return projects.filter(project => project.featured);
}
