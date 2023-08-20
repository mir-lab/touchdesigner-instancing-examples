import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'For Everyone',
    Svg: require('@site/static/img/front-page/for-everyone.svg').default,
    description: (
      <>
        No matter your background or experience level, these Style Guides are 
        references you can start using right away.
      </>
    ),
  },
  {
    title: 'Write Clean Code',
    Svg: require('@site/static/img/front-page/clean-code.svg').default,
    description: (
      <>
        Well organized projects make it easier for your future self, and for 
        other developers on your team. Using a unified style can make it easier
        to pick up old projects faster, or build projects with other team members.
      </>
    ),
  },
  {
    title: 'Real World Standards',
    Svg: require('@site/static/img/front-page/real-world.svg').default,
    description: (
      <>
        Standard practices from professionals working with TouchDesigner 
        for projects of all sizes. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
  );
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
  );
}
