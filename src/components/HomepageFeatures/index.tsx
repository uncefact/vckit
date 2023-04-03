import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Set Up and Configure',
    Svg: require('@site/static/img/setup.svg').default,
    description: (
      <>
        VC Kit can be deployed with a single command, and is easily configurable to issue any document - all you need is a JSON schema to get started. 
      </>
    ),
  },
  {
    title: 'Interoperable',
    Svg: require('@site/static/img/interoperable.svg').default,
    description: (
      <>
        VC Kit is interoperable with other Verifiable Credential platforms. For more on interoperability see (TBA)
      </>
    ),
  },
  {
    title: 'Built on Open Standards',
    Svg: require('@site/static/img/standards.svg').default,
    description: (
      <>
        VC Kit is built to manage Verifiable Credentials conformant to the W3C Verifiable Credentials Data Model, using standard vocabulary and schemas published by UN/CEFACT. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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
  );
}
