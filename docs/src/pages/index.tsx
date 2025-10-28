import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import CodeBlock from '@theme/CodeBlock'
import { 
  Oval, 
  Bars, 
  Circles, 
  ThreeDots, 
  TailSpin, 
  RotatingLines,
  InfinitySpin,
  Hearts,
  CircularProgress,
  Audio 
} from 'react-loader-spinner'

import styles from './index.module.css'

function HeroSpinnerShowcase() {
  const spinners = [
    { Component: Oval, props: { height: "60", width: "60", color: "#ffffff", visible: true } },
    { Component: Bars, props: { height: "60", width: "60", color: "#ffffff", visible: true } },
    { Component: Circles, props: { height: "60", width: "60", color: "#ffffff", visible: true } },
    { Component: ThreeDots, props: { height: "60", width: "60", color: "#ffffff", visible: true } },
    { Component: TailSpin, props: { height: "60", width: "60", color: "#ffffff", visible: true } },
    { Component: RotatingLines, props: { strokeColor: "#ffffff", strokeWidth: "5", animationDuration: "0.75", width: "60", visible: true } },
    { Component: Audio, props: { width: "60", color: "#ffffff", visible: true } },
    { Component: Hearts, props: { height: "60", width: "60", color: "#ffffff", visible: true } },
    { Component: CircularProgress, props: { height: "60", width: "60", color: "#ffffff", visible: true } },
  ]

  return (
    <div className={styles.heroSpinners}>
      {spinners.map((spinner, index) => (
        <div key={index} className={styles.heroSpinner}>
          <spinner.Component {...spinner.props} />
        </div>
      ))}
    </div>
  )
}

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              Beautiful React Spinners
            </Heading>
            <p className={styles.heroSubtitle}>
              A collection of loading spinners with React.js based on Halogen. 
              Lightweight, customizable, and TypeScript ready.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <strong>35+</strong>
                <span>Spinners</span>
              </div>
              <div className={styles.stat}>
                <strong>TypeScript</strong>
                <span>Ready</span>
              </div>
              <div className={styles.stat}>
                <strong>Zero</strong>
                <span>Dependencies</span>
              </div>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro"
              >
                Get Started
              </Link>
              <Link
                className="button button--secondary button--lg margin-left--md"
                to="https://github.com/mhnpd/react-loader-spinner"
              >
                View on GitHub
              </Link>
            </div>
          </div>
          <div className={styles.heroDemo}>
            <HeroSpinnerShowcase />
          </div>
        </div>
      </div>
    </header>
  )
}

function InstallationSection() {
  return (
    <section className={`${styles.installSection} container`}>
      <div className="row">
        <div className="col col--12">
          <div className="text--center">
            <h2>Quick Installation & Import</h2>
            <p>Get started in seconds with your preferred package manager</p>
          </div>
        </div>
      </div>
      <div className="row margin-top--lg">
        <div className="col col--4">
          <div className={styles.installationCard}>
            <h3>📦 NPM</h3>
            <CodeBlock language="bash">
              npm install react-loader-spinner
            </CodeBlock>
          </div>
        </div>
        <div className="col col--4">
          <div className={styles.installationCard}>
            <h3>🧶 Yarn</h3>
            <CodeBlock language="bash">
              yarn add react-loader-spinner
            </CodeBlock>
          </div>
        </div>
        <div className="col col--4">
          <div className={styles.installationCard}>
            <h3>⚡ PNPM</h3>
            <CodeBlock language="bash">
              pnpm add react-loader-spinner
            </CodeBlock>
          </div>
        </div>
      </div>
      <div className="row margin-top--xl">
        <div className="col col--12">
          <div className={styles.installationCard}>
            <h3>🚀 Usage Example</h3>
            <CodeBlock language="jsx" title="MyComponent.jsx">
{`import { Oval } from 'react-loader-spinner'

function MyComponent() {
  return (
    <Oval
      height={80}
      width={80}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  )
}`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  )
}

function ShowcaseSection() {
  const primaryColor = "#ffffff" // White color for spinners
  const secondaryColor = "#f0f0f0" // Light gray secondary
  
  const showcaseSpinners = [
    { 
      name: 'Oval', 
      Component: () => <Oval height="60" width="60" color={primaryColor} secondaryColor={secondaryColor} visible={true} />
    },
    { 
      name: 'Bars', 
      Component: () => <Bars height="60" width="60" color={primaryColor} visible={true} />
    },
    { 
      name: 'Circles', 
      Component: () => <Circles height="60" width="60" color={primaryColor} visible={true} />
    },
    { 
      name: 'Three Dots', 
      Component: () => <ThreeDots height="60" width="60" color={primaryColor} visible={true} />
    },
    { 
      name: 'Tail Spin', 
      Component: () => <TailSpin height="60" width="60" color={primaryColor} visible={true} />
    },
    { 
      name: 'Hearts', 
      Component: () => <Hearts height="60" width="60" color={primaryColor} visible={true} />
    },
    { 
      name: 'Rotating Lines', 
      Component: () => <RotatingLines strokeColor={primaryColor} strokeWidth="5" animationDuration="0.75" width="60" visible={true} />
    },
    { 
      name: 'Infinity Spin', 
      Component: () => <InfinitySpin width="60" color={primaryColor} />
    },
    { 
      name: 'Circular Progress', 
      Component: () => <CircularProgress height="60" width="60" color={primaryColor} secondaryColor={secondaryColor} visible={true} />
    },
    { 
      name: 'Audio', 
      Component: () => <Audio height="60" width="60" color={primaryColor} visible={true} />
    },
  ]

  return (
    <section className={styles.showcaseSection}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <h2>Choose from 35+ Beautiful Spinners</h2>
          <p>Each spinner is fully customizable with props for colors, size, and animation speed</p>
        </div>
        <div className={styles.showcaseGrid}>
          {showcaseSpinners.map((spinner, index) => (
            <div key={index} className={styles.showcaseItem}>
              <div className={styles.showcaseSpinner}>
                <spinner.Component />
              </div>
              <h4>{spinner.name}</h4>
            </div>
          ))}
        </div>
        <div className="text--center margin-top--lg">
          <Link
            className="button button--outline button--primary"
            to="/docs/components/audio"
          >
            View All Spinners
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <Layout
      title="React Loader Spinner - Beautiful Loading Spinners for React"
      description="A collection of beautiful, customizable loading spinners for React applications. TypeScript ready, lightweight, and easy to use."
    >
      <HomepageHeader />
      <main>
        <InstallationSection />
        <ShowcaseSection />
      </main>
    </Layout>
  )
}
