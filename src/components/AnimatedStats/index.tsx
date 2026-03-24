import type {ReactNode} from 'react';
import {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';

interface Stat {
  emoji: string;
  label: string;
  value: number;
  suffix: string;
}

const stats: Stat[] = [
  {
    emoji: '🎂',
    label: 'Age',
    value: 2,
    suffix: 'years',
  },
  {
    emoji: '📅',
    label: 'Days Alive',
    value: 730,
    suffix: 'days',
  },
  {
    emoji: '😊',
    label: 'Smiles',
    value: 1000,
    suffix: '+',
  },
  {
    emoji: '🎯',
    label: 'Milestones',
    value: 10,
    suffix: '+',
  },
];

interface AnimatedStatProps {
  stat: Stat;
  index: number;
}

function AnimatedStat({stat, index}: AnimatedStatProps): ReactNode {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {threshold: 0.5}
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.value;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      start = Math.floor(end * progress);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, stat.value]);

  return (
    <div
      ref={ref}
      className={styles.statCard}
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <div className={styles.emoji}>{stat.emoji}</div>
      <div className={styles.value}>
        {count}
        <span className={styles.suffix}>{stat.suffix}</span>
      </div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  );
}

export default function AnimatedStats(): ReactNode {
  return (
    <section className={styles.statsContainer}>
      <div className="container">
        <h2 className={styles.statsTitle}>📊 Vivin's Journey by Numbers</h2>
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <AnimatedStat key={idx} stat={stat} index={idx} />
          ))}
        </div>
        <p className={styles.subtitle}>Growing and making memories every single day!</p>
      </div>
    </section>
  );
}
