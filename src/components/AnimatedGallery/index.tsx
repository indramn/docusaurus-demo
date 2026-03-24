import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
}

const animatedGalleryItems: GalleryItem[] = [
  {
    type: 'image',
    src: '/img/undraw_docusaurus_mountain.svg',
    alt: 'Mountain',
    title: '🏔️ Adventure',
  },
  {
    type: 'image',
    src: '/img/undraw_docusaurus_tree.svg',
    alt: 'Tree',
    title: '🌳 Nature',
  },
  {
    type: 'image',
    src: '/img/undraw_docusaurus_react.svg',
    alt: 'React',
    title: '⚛️ Technology',
  },
  {
    type: 'image',
    src: '/img/IMG_7239.jpg',
    alt: 'Custom Upload',
    title: '🖼️ Vivin’s Photo (IMG_7239)',
  },
  {
    type: 'video',
    src: '/videos/Video_1.mp4',
    alt: 'Video 1',
    title: '🎬 Video_1',
  },
  {
    type: 'video',
    src: '/videos/Video_2.mp4',
    alt: 'Video 2',
    title: '🎬 Video_2',
  },
];

export default function AnimatedGallery(): ReactNode {
  const resolveBaseUrl = useBaseUrl;

  return (
    <section className={styles.galleryContainer}>
      <div className="container">
        <h2 className={styles.galleryTitle}>✨ Animated Gallery</h2>
        <div className={styles.gallery}>
          {animatedGalleryItems.map((item, idx) => {
            const itemSrc = resolveBaseUrl(item.src);

            return (
              <div key={idx} className={styles.imageCard}>
                <div className={styles.imageWrapper}>
                  {item.type === 'image' ? (
                    <img
                      src={itemSrc}
                      alt={item.alt}
                      className={styles.animatedImage}
                    />
                  ) : (
                    <video
                      className={styles.animatedImage}
                      controls
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={itemSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <div className={styles.overlay}></div>
                </div>
                <p className={styles.imageTitle}>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
