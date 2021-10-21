import Image from 'next/image';

import { Container, Paragraph, Subtitle } from '@/components';

import styles from './styles.module.css';

export default function NannyShare() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.image} data-aos-delay="100" data-aos="zoom-in">
          <Image
            width={216}
            height={96}
            quality={100}
            objectFit="cover"
            alt="Nanny Share Daily Diary"
            title="Nanny Share Daily Diary"
            src="/images/home/nanny-share.png"
          />
        </div>

        <Subtitle className={styles.subtitle}>
          Coming soon: Nanny Share Daily Diary!
        </Subtitle>

        <Paragraph className={styles.paragraph}>
          With the Hapu daily diary your nanny will be able to update you and
          your sharers with photos and commentary of the day. You and sharers
          will receive notifications and you’ll be able to login to view the
          daily adventures fo your little ones. We can’t wait!
        </Paragraph>
      </Container>
    </section>
  );
}
