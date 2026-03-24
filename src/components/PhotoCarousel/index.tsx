import type {ReactNode} from 'react';
import {useState, useEffect} from 'react';
import styles from './styles.module.css';

interface PhotoSlide {
  id: number;
  emoji: string;
  title: string;
  description: string;
}

const slides: PhotoSlide[] = [
  {
    id: 1,
    emoji: '👶',
    title: 'Baby Vivin',
    description: 'A beautiful newborn, March 4, 2022',
  },
  {
    id: 2,
    emoji: '🎂',
    title: 'First Birthday',
    description: 'Celebrating the first year of joy',
  },
  {
    id: 3,
    emoji: '🎉',
    title: 'Special Moments',
    description: 'Growing and learning every day',
  },
  {
    id: 4,
    emoji: '😊',
    title: 'Smiling Memories',
    description: 'Creating precious family moments',
  },
  {
    id: 5,
    emoji: '🌟',
    title: 'Shining Star',
    description: 'A bright and beautiful journey',
  },
];

export default function PhotoCarousel(): ReactNode {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  return (
    <section className={styles.carouselContainer}>
      <div className="container">
        <h2 className={styles.carouselTitle}>📷 Vivin's Photo Memories</h2>
        
        <div 
          className={styles.carouselWrapper}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className={styles.slides}>
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`${styles.slide} ${idx === currentSlide ? styles.active : ''}`}
              >
                <div className={styles.slideContent}>
                  <div className={styles.emoji}>{slide.emoji}</div>
                  <h3 className={styles.slideTitle}>{slide.title}</h3>
                  <p className={styles.slideDescription}>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className={`${styles.navButton} ${styles.prev}`}
            onClick={handlePrevSlide}
            aria-label="Previous slide"
          >
            ❮
          </button>
          <button
            className={`${styles.navButton} ${styles.next}`}
            onClick={handleNextSlide}
            aria-label="Next slide"
          >
            ❯
          </button>

          {/* Dots */}
          <div className={styles.dots}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === currentSlide ? styles.activeDot : ''}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slide Counter */}
        <div className={styles.counter}>
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </section>
  );
}
