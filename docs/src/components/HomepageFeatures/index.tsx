import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description?: string
}

const FeatureList: FeatureItem[] = [
  {
    title: 'TypeScript Compatibility',
    Svg: require('@site/static/img/typescript-support.svg').default,
    description:
      'Our library is meticulously crafted in TypeScript, ensuring seamless compatibility with all contemporary web browsers.',
  },
  {
    title: 'Highly Customizable',
    Svg: require('@site/static/img/customizable.svg').default,
    description:
      'You can effortlessly personalize the loader by supplying custom properties to the loader component.',
  },
  {
    title: 'Light Weight',
    Svg: require('@site/static/img/light-weight.svg').default,
    description:
      'This library is featherweight, devoid of any additional dependencies.',
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
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
  )
}
