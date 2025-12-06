import Link from 'next/link';
import { Project } from '../lib/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
                {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                        {tag}
                    </span>
                ))}
            </div>
        </a>
    );
}
