import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../lib/projects';
import styles from './FeaturedAppCard.module.css';

interface FeaturedAppCardProps {
    project: Project;
}

export default function FeaturedAppCard({ project }: FeaturedAppCardProps) {
    const accentColor = project.accentColor || '#ffffff';

    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            style={{
                '--accent-color': accentColor,
            } as any}
        >
            <div className={styles.bgImageContainer}>
                {project.imageUrl ? (
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                ) : (
                    <div style={{ width: '100%', height: '100%', background: '#333' }} />
                )}
                {/* Gradient Overlay for better text readability and aesthetic tint */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to top, rgba(0,0,0,0.8), transparent)`,
                    mixBlendMode: 'multiply'
                }} />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: accentColor,
                    opacity: 0.1,
                    mixBlendMode: 'overlay'
                }} />
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.badges}>
                        <span className={styles.badge} style={{ background: accentColor, color: '#fff' }}>
                            NEW
                        </span>
                        {project.tags.includes('AI') && (
                            <span className={styles.badge}>AI Powered</span>
                        )}
                    </div>
                </div>

                <h3 className={styles.title}>
                    {project.title}
                </h3>

                <p className={styles.description}>
                    {project.description}
                </p>

                <div className={styles.cta} style={{ color: accentColor }}>
                    앱 실행하기
                    <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className={styles.glowBorder} />
        </a>
    );
}
