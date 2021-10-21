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
          <h1
            className={styles.title}
            data-aos-delay="100"
            data-aos="fade-right"
          >
            Easily create or join a local nanny share with Hapu
          </h1>

          <h2
            className={styles.subtitle}
            data-aos-delay="200"
            data-aos="fade-right"
          >
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and
            create new flexible, affordable solutions in childcare.
          </h2>

          <Link href="/">
            <a
              className={styles.link}
              data-aos-delay="300"
              data-aos="fade-right"
            >
              <Play className={styles.play} />
              See hapu in action (27 seconds)
            </a>
          </Link>
        </div>

        <div className={styles.image} data-aos-delay="100" data-aos="zoom-in">
          <Image
            width={316}
            height={290}
            quality={100}
            objectFit="cover"
            src="/images/home/image-hero.png"
            alt="An example of jane and kate joining your nanny share"
            title="An example of jane and kate joining your nanny share"
          />
        </div>
      </Container>
    </section>
  );
}
