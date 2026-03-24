import type {ReactNode} from 'react';
import styles from './styles.module.css';

interface AnimatedImage {
  src: string;
  alt: string;
  title: string;
}

const animatedImages: AnimatedImage[] = [
  {
    src: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    alt: 'Mountain',
    title: '🏔️ Adventure',
  },
  {
    src: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    alt: 'Tree',
    title: '🌳 Nature',
  },
  {
    src: require('@site/static/img/undraw_docusaurus_react.svg').default,
    alt: 'React',
    title: '⚛️ Technology',
  },
];

export default function AnimatedGallery(): ReactNode {
  return (
    <section className={styles.galleryContainer}>
      <div className="container">
        <h2 className={styles.galleryTitle}>✨ Animated Gallery</h2>
        <div className={styles.gallery}>
          {animatedImages.map((image, idx) => (
            <div key={idx} className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.animatedImage}
                />
                <div className={styles.overlay}></div>
              </div>
              <p className={styles.imageTitle}>{image.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
