import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components';

import styles from './styles.module.css';

export default function AvailableNow() {
  return (
    <div className={styles.available}>
      <Container className={styles.container}>
        <div className={styles.avatar}>
          <Image
            width={56}
            height={56}
            quality={100}
            alt="Sarah"
            title="Sarah"
            objectFit="cover"
            src="/images/home/avatar.png"
          />
        </div>

        <Link href="/">
          <a className={styles.link}>
            Sarah’s day care available now in North Sydney
          </a>
        </Link>

        <strong className={styles.important}>
          Wednesday, Thursday, Friday - 7:30 - 5:30
        </strong>
      </Container>
    </div>
  );
}
