import styles from './page.module.css';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import { getFeaturedProjects } from '@/lib/projects';
import Link from 'next/link';


// Simple Typing Animation Component
const TypingText = ({ text }: { text: string }) => {
  return (
    <h1 className={styles.title}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            opacity: 0,
            animation: `fadeInUp 0.1s ease-out forwards ${index * 0.05}s`,
            display: 'inline-block',
            minWidth: char === ' ' ? '0.3em' : 'auto'
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default function Home() {
  const allProjects = getFeaturedProjects();

  // Filter projects by section
  const financeHealthTools = allProjects.filter(p => p.section === 'finance-health');
  const dailyEssentialsTools = allProjects.filter(p => p.section === 'daily-essentials');
  const creatorTools = allProjects.filter(p => p.section === 'creator-tools');
  const funArcadeTools = allProjects.filter(p => p.section === 'fun-arcade');
  const featuredApps = allProjects.filter(p => p.section === 'featured-app');

  // Helper for compact list item (Mobile)
  const CompactItem = ({ project }: { project: any }) => (
    <Link href={project.url} className="glass-panel" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      borderRadius: '16px',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'transform 0.2s'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ fontSize: '1.5rem' }}>
          {project.tags.includes('Lotto') ? '🎱' :
            project.tags.includes('YouTube') ? '📹' :
              project.tags.includes('Image') ? '🖼️' :
                project.tags.includes('QR Code') ? '📱' :
                  project.tags.includes('Text') ? '📝' :
                    project.tags.includes('Date') ? '📅' :
                      project.tags.includes('Math') ? '🔢' :
                        project.tags.includes('Unit') ? '⚖️' :
                          project.tags.includes('Focus') ? '🍅' :
                            project.tags.includes('Fortune') ? '🥠' :
                              project.tags.includes('Zodiac') ? '🐉' :
                                project.tags.includes('Finance') ? '💰' :
                                  project.tags.includes('Health') ? '💪' : '🛠️'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <span style={{ fontWeight: '700', fontSize: '1rem' }}>{project.title}</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
            {project.description}
          </span>
        </div>
      </div>
      <div style={{ color: 'var(--text-secondary)' }}>›</div>
    </Link>
  );

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/hero-bg.png"
            alt="Abstract Hero Background"
            width={1000}
            height={1000}
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <TypingText text="웹 유틸리티 모음" />
        <p className={styles.subtitle}>
          모두를 위한 무료 웹 도구
        </p>
      </section>

      {/* Section 1: Finance & Health */}
      <section className={styles.section} style={{ animationDelay: '0.2s' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>금융 및 건강</h2>
          <p className={styles.sectionDesc}>재정과 건강 관리를 위한 스마트한 도구들</p>
        </div>
        <div className={`${styles.grid} ${styles.utilityGrid}`}>
          {financeHealthTools.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className={`${styles.compactList} ${styles.utilityList}`}>
          {financeHealthTools.map((project) => (
            <CompactItem key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Section 2: Daily Essentials */}
      <section className={styles.section} style={{ animationDelay: '0.4s' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>생활 필수품</h2>
          <p className={styles.sectionDesc}>매일의 일상에 꼭 필요한 유틸리티</p>
        </div>
        <div className={`${styles.grid} ${styles.utilityGrid}`}>
          {dailyEssentialsTools.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className={`${styles.compactList} ${styles.utilityList}`}>
          {dailyEssentialsTools.map((project) => (
            <CompactItem key={project.id} project={project} />
          ))}
        </div>
      </section>



      {/* Section 3: Creator Tools */}
      <section className={styles.section} style={{ animationDelay: '0.6s' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>크리에이터 도구</h2>
          <p className={styles.sectionDesc}>콘텐츠 제작 효율을 높여주는 도구들</p>
        </div>
        <div className={`${styles.grid} ${styles.utilityGrid}`}>
          {creatorTools.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className={`${styles.compactList} ${styles.utilityList}`}>
          {creatorTools.map((project) => (
            <CompactItem key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Section 4: Fun & Arcade */}
      <section className={styles.section} style={{ animationDelay: '0.8s' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>재미 & 아케이드</h2>
          <p className={styles.sectionDesc}>게임, 운세, 그리고 심리 테스트</p>
        </div>
        <div className={`${styles.grid} ${styles.utilityGrid}`}>
          {funArcadeTools.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className={`${styles.compactList} ${styles.utilityList}`}>
          {funArcadeTools.map((project) => (
            <CompactItem key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Section 5: Featured Apps (Personal Projects) */}
      <section className={styles.section} style={{ animationDelay: '1.0s' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>추천 앱</h2>
          <p className={styles.sectionDesc}>열정으로 만든 특별한 프로젝트들</p>
        </div>
        <div className={styles.grid}>
          {featuredApps.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
