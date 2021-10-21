import Image from 'next/image';
import Link from 'next/link';

import { Container, Paragraph, Subtitle } from '@/components';

import styles from './styles.module.css';

export default function PaymentsSimple() {
  return (
    <div className={styles.section}>
      <Container className={styles.container}>
        <div data-aos-delay="100" data-aos="zoom-in">
          <Image
            width={456}
            height={336}
            quality={100}
            objectFit="cover"
            src="/images/home/payments-simple.png"
            alt='An example of how the payment method shared between: "fixed amount" or "shared rates" is simplified'
            title='An example of how the payment method shared between: "fixed amount" or "shared rates" is simplified'
          />
        </div>

        <div className={styles.content}>
          <Subtitle className={styles.subtitle}>
            Shared payments made simple
          </Subtitle>

          <Paragraph className={styles.paragraph}>
            Sometimes it’s hard enough just sharing a restaurant bill. Try
            sharing that bill week in, week out and you might encounter more
            than a few snares. But not with Hapu. Simply set your rates and our
            automated payment system takes care of the rest. You need never talk
            money or who owes what.
          </Paragraph>

          <Link href="/">
            <a className={styles.link} data-aos-delay="200" data-aos="fade-up">
              Read how Bridget’s share (without Hapu) ended over $15
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
}
