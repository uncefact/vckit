import React from 'react';
import GitHubButton from 'react-github-btn';

import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';

import VckitLogoSVG from '../../static/img/homepage/logo-cropped.svg';
import styles from './styles.module.css';

const textContent = {
  intro: `
    vc-kit provides an example of how verifiable credentials technology can be implemented for international trade. The platform includes a set of libraries and a complete reference implementation designed to facilitate the adoption of verifiable credential solutions in the international trade ecosystem. vc-kit can be integrated with existing systems either as a library or as a standalone application.
  `,
  cloudAgnostic: `
  vc-kit is cloud agnostic, providing flexibility in deployment options. It can be deployed on any cloud provider or even on-premises, giving implementors the freedom to choose the deployment option that best suits their business needs and budget.
  `,
  business: `
  Verifiable credentials conforming to global standards enable secure exchange of data between organizations, streamlining processes for businesses. They automate verification, reducing the need for manual data entry and authentication, saving time and resources while reducing the risk of errors and fraud. Verifiable credentials provide greater control and ownership over data, allowing businesses to securely share only necessary information with specific stakeholders.
  `,
  regulators: `
  Verifiable credentials conforming to global standards can enhance transparency for regulators. Such credentials offer a secure and auditable method for businesses to share data with regulators. Verifiable credentials enable regulators to easily verify the authenticity and validity of shared data, reducing the need for error-prone and time-consuming manual processes. The greater transparency afforded by verifiable credentials enables regulators to identify and address issues more efficiently, leading to a more effective and trustworthy regulatory environment.
  `,
  consmers: `
  The verifiable ecosystem's transparency and traceability capabilities in the context of international supply chains can bolster trust in the community by ensuring stakeholders have an accurate understanding of the origin and movement of goods. By creating an immutable record of a product's journey from creation to final destination using verifiable credentials, every step can be verified and recorded by trusted parties. This can prevent counterfeit goods, minimize fraud risk, and give consumers confidence in the authenticity and ethical sourcing of their purchases. Additionally, increased transparency can promote regulatory compliance and ethical standards, holding all parties accountable for their actions.
  `,
};

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('@site/static/img/undraw_open_source_-1-qxw.svg').default,
    description: (
      <>
        vc-kit is open source software, meaning it's free to use, modify, and
        distribute. You can customize it to your needs, and it's constantly
        being improved by a community of developers.
      </>
    ),
  },
  {
    title: 'Interoperable',
    Svg: require('@site/static/img/interoperable.svg').default,
    description: (
      <>
        Our goal is to facilitate interoperability among diverse international
        trade stakeholders by enabling seamless integration with existing
        systems and standards, streamlining processes, increasing efficiency,
        and promoting trust and transparency in transactions.
      </>
    ),
  },
  {
    title: 'Built on Open Standards',
    Svg: require('@site/static/img/standards.svg').default,
    description: (
      <>
        Built on open standards, vc-kit ensures compatibility with established
        technologies, protocols, and frameworks, enabling seamless integration,
        enhancing interoperability, and promoting innovation in the
        international trade ecosystem.
      </>
    ),
  },
];

function Heading({text}) {
  return <h2 className="Heading">{text}</h2>;
}

function ActionButton({href, type = 'primary', target, children}) {
  return (
    <a className={`ActionButton ${type}`} href={href} target={target}>
      {children}
    </a>
  );
}

function HomeCallToAction() {
  return (
    <>
      <ActionButton
        type="primary"
        href={useBaseUrl('docs/demos')}
        target="_self">
        Get Started
      </ActionButton>
      <ActionButton
        type="secondary"
        href={
          'https://unece.org/sites/default/files/2022-07/WhitePaper_VerifiableCredentials-CBT.pdf'
        }
        target="_self">
        Read the whitepaper
      </ActionButton>
    </>
  );
}

function GitHubStarButton() {
  return (
    <div className="github-button">
      <GitHubButton
        href="https://github.com/uncefact/project-vckit"
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star uncefact/project-vckit on GitHub">
        Star
      </GitHubButton>
    </div>
  );
}

export function Section({
  element = 'section',
  children,
  className,
  background = 'light',
}) {
  const El = element;
  return (
    <El
      className={
        className
          ? `Section ${className} ${background}`
          : `Section ${background}`
      }>
      {children}
    </El>
  );
}

function TwoColumns({columnOne, columnTwo, reverse}) {
  return (
    <div className={`TwoColumns ${reverse ? 'reverse' : ''}`}>
      <div className={`column first ${reverse ? 'right' : 'left'}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? 'left' : 'right'}`}>
        {columnTwo}
      </div>
    </div>
  );
}

function HeaderHero() {
  return (
    <Section className="HeaderHero">
      <div className="socialLinks">
        {/* <TwitterButton accountName="reactnative" /> */}
        <GitHubStarButton />
      </div>
      <TwoColumns
        reverse
        columnOne={<VckitLogoSVG />}
        columnTwo={
          <>
            <h1 className="title">
              UN/CEFACT
              <br />
              Verifiable Credentials Toolkit
            </h1>
            <p className="tagline">
              Traceability for cross border supply chains
            </p>
            <div className="buttons">
              <HomeCallToAction />
            </div>
          </>
        }
      />
    </Section>
  );
}

function Feature({title, Svg, description}) {
  return (
    <div className="col col--4">
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <Heading text={title} />
        <p>{description}</p>
      </div>
    </div>
  );
}
function Features() {
  return (
    <Section className="Features" background="light">
      <div className="content">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </Section>
  );
}

const Index = () => {
  return (
    <Layout
      description="A verifiable credentials reference implementation"
      wrapperClassName="homepage">
      <Head>
        <title>
          vc-kit - Verifiable credentials for cross border trade facilitation
        </title>
        <meta
          property="og:title"
          content="vc-kit - Verifiable credentials for cross border trade facilitation"
        />
        <meta
          property="twitter:title"
          content="vc-kit - Verifiable credentials for cross border trade facilitation"
        />
        <script type="module" src="./rapidoc-min.js"></script>
      </Head>
      <HeaderHero />
      <Features />
    </Layout>
  );
};

export default Index;
