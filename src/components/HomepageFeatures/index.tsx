import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dokumentace k administraci',
    Svg: require('@site/static/img/docs.svg').default,
    description: (
      <>
            Potřebujete poradit s nastavením v administraci Balíkuj? Naleznete zde popis
            jednotlivých sekcí a funkcní naší administrace.
      </>
    ),
  },
  {
    title: 'Dopravci',
    Svg: require('@site/static/img/carrier.svg').default,
    description: (
      <>
            Chcete posílat zásilky přes námi podporované dopravce? Naleznete zde informace,
            jak nastavit připojení k dopravci a mnoho dalšího.
      </>
    ),
  },
  {
    title: 'API rozhraní',
    Svg: require('@site/static/img/api.svg').default,
    description: (
      <>
            Chcete automatizovat funkce zásilek nebo objednávek ve svém systému? Nabízíme zde 
        informace, jak se jednoduše připojit do našeho API rozhraní.
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
        <Heading as="h3">{title}</Heading>
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
