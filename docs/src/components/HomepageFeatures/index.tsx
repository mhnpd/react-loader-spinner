import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: string
  highlight?: string
}

const FeatureList: FeatureItem[] = [
  {
    title: 'TypeScript Ready',
    Svg: require('@site/static/img/typescript-support.svg').default,
    description:
      'Built with TypeScript from the ground up. Get full type safety and IntelliSense support in your IDE.',
    highlight: 'Full Type Safety'
  },
  {
    title: 'Highly Customizable',
    Svg: require('@site/static/img/customizable.svg').default,
    description:
      'Every spinner is fully customizable with props for colors, sizes, animation speed, and styling.',
    highlight: 'Endless Possibilities'
  },
  {
    title: 'Zero Dependencies',
    Svg: require('@site/static/img/light-weight.svg').default,
    description:
      'Lightweight library with no external dependencies. Tree-shakable imports for optimal bundle size.',
    highlight: 'Bundle Optimized'
  },
]

function Feature({ title, Svg, description, highlight }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureContent}>
          <h3 className={styles.featureTitle}>{title}</h3>
          {highlight && <span className={styles.featureHighlight}>{highlight}</span>}
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <h2>Why Choose React Loader Spinner?</h2>
          <p>Built for modern React applications with developer experience in mind</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
