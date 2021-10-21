import Link from 'next/link';
import Image from 'next/image';

import { Container, Paragraph, Separator, Subtitle } from '@/components';

import styles from './styles.module.css';

export default function Framework() {
  return (
    <div className={styles.section}>
      <Separator direction="top" />
      <Container className={styles.container}>
        <div className={styles.headline}>
          <Subtitle className={styles.subtitle}>
            A framework built for the long term
          </Subtitle>
          <Paragraph className={styles.paragraph}>
            Childcare is for the long term. And you need a framework you can
            count on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of
            participation.
          </Paragraph>

          <Link href="/">
            <a className={styles.link}>
              Read how Hapu’s tribal background defines our app{' '}
            </a>
          </Link>
        </div>

        <Image
          width={984}
          height={392}
          quality={100}
          objectFit="cover"
          src="/images/home/billing-history.png"
          alt="An example your billing history with days, times, amount paid, date and actions"
          title="An example your billing history with days, times, amount paid, date and actions"
        />
      </Container>
      <Separator direction="down" />
    </div>
  );
}
