import Link from 'next/link';
import Image from 'next/image';

import { Container, Subtitle, Paragraph } from '@/components';

import styles from './styles.module.css';

export default function ShareYourHome() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Subtitle className={styles.subtitle}>
            Share your home, nanny and costs
          </Subtitle>

          <Paragraph className={styles.paragraph}>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu.{' '}
            <Link href="/">
              <a>Hapu means tribe</a>
            </Link>{' '}
            and it’s our foundational 3 tribal principles that empowers you to
            create and manage your own tribe. A tribe that together has the
            power to create new affordable solutions in childcare that work for
            you and your community.
          </Paragraph>

          <Link href="/">
            <a className={styles.link} data-aos-delay="200" data-aos="fade-up">
              Ready to get started?
            </a>
          </Link>
        </div>

        <div data-aos-delay="100" data-aos="zoom-in">
          <Image
            width={584}
            height={392}
            quality={100}
            objectFit="cover"
            src="/images/home/share-your-home.png"
            alt="An example of jane ongoing nanny share"
            title="An example of jane ongoing nanny share"
          />
        </div>
      </Container>
    </section>
  );
}
