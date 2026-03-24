import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '📸 My Pictures',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A collection of my beautiful moments and memories captured throughout my growth journey. Each picture tells a story of joy and discovery!
      </>
    ),
  },
  {
    title: '🎯 My Activities & Interests',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        From playing and exploring to learning new words and skills. I love discovering new things about the world every single day!
      </>
    ),
  },
  {
    title: '👨‍👩‍👧‍👦 My Family & Friends',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The people who make my life special and full of love. I enjoy quality time with my family and making new friends!
      </>
    ),
  },
  {
    title: '🎂 Personal Information',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Born on March 4, 2022, in Bhadrvathi. Learn more about my birth details, milestones, and achievements on my About page.
      </>
    ),
  },
  {
    title: '🏆 My Milestones',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Recording my journey through important moments - first smile, first words, first steps, and many more wonderful achievements!
      </>
    ),
  },
  {
    title: '🌍 Places I Visit',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Exploring beautiful locations and creating memories with loved ones. From parks to family gathering spots, each place is special!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>

    </section>
  );
}
