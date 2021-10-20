import { Button } from 'reakit';
import Link from 'next/link';
import cn from 'classnames';

import { Container } from '@/components';
import { Logo } from '@/components/Logos';

import styles from './styles.module.css';
import animated from '@/styles/animated/styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.menu}>
          <Link href="/">
            <a className={styles.logo}>
              <Logo />
            </a>
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="/">
                  <a className={cn(styles.link, animated.underline)}>
                    Create Your Nanny Share
                  </a>
                </Link>
              </li>

              <li className={styles.item}>
                <Link href="/">
                  <a className={cn(styles.link, animated.underline)}>
                    Browse Shares
                  </a>
                </Link>
              </li>

              <li className={styles.item}>
                <Link href="/">
                  <a className={cn(styles.link, animated.underline)}>
                    Our Story
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.buttons}>
          <Button className={styles.button}>Become a Nanny Share Host</Button>

          <Link href="/">
            <a className={cn(styles.link, animated.underline)}>Sign In</a>
          </Link>
        </div>
      </Container>
    </header>
  );
}
