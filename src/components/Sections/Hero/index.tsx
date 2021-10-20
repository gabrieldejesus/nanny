import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components';
import { Play } from '@/components/Icons';

import styles from './styles.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.headline}>
          <h1 className={styles.title}>
            Easily create or join a local nanny share with Hapu
          </h1>

          <h2 className={styles.subtitle}>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and
            create new flexible, affordable solutions in childcare.
          </h2>

          <Link href="/">
            <a className={styles.link}>
              <Play className={styles.play} />
              See hapu in action (27 seconds)
            </a>
          </Link>
        </div>

        <Image
          width={316}
          height={290}
          quality={100}
          objectFit="cover"
          src="/images/home/image-hero.png"
          alt="An example of jane and kate joining your nanny share"
          title="An example of jane and kate joining your nanny share"
        />
      </Container>
    </section>
  );
}
