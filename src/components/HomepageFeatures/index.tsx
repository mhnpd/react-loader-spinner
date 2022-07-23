import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description?: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Typescript Support',
    Svg: require('@site/static/img/typescript-support.svg').default,
  },
  {
    title: 'Customizable SVG Loaders',
    Svg: require('@site/static/img/customizable.svg').default,
    description: (
      <p>
        react-spinner-loader provides customizable React SVG spinner component
        which can be implemented for async await operation before data loads to
        the view.
      </p>
    ),
  },
  {
    title: 'Light Weight',
    Svg: require('@site/static/img/light-weight.svg').default,
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

export default function HomepageFeatures(): JSX.Element {
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
