import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const contributeLink = 'https://github.com/SudoMagicCode/TouchDesigner-StyleGuide/discussions/4'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Why Use a TouchDesigner Style Guide 🤔
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageContribute() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroContribute)}>
      <div className="container">
        <h1 className="hero__title">Want to Contribute?</h1>
        <p className="hero__subtitle">Suggest edits, or start your own style guide</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={contributeLink}>
            Start Contributing
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <HomepageContribute />
    </Layout>
  );
}
