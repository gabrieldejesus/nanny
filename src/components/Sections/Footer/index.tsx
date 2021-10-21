import Link from 'next/link';
import cn from 'classnames';
import { ElementType } from 'react';

import { Calendar } from '@/components/Icons';
import { Container, Paragraph, Subtitle } from '@/components';
import { Hapu } from '@/components/Logos';
import { Facebook, Instagram, Twitter } from '@/components/Icons';

import styles from './styles.module.css';
import animated from '@/styles/animated/styles.module.css';

export type SocialProps = {
  name: string;
  url: string;
  icon: ElementType;
};

const socialNetworks: SocialProps[] = [
  {
    name: 'Facebook',
    url: 'http://',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    url: 'http://',
    icon: Instagram,
  },
  {
    name: 'Twitter',
    url: 'http://',
    icon: Twitter,
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <Subtitle className={styles.subtitle}>
          Become a nanny share host
        </Subtitle>

        <Paragraph className={styles.paragraph}>
          Takes less than 5 minutes to get started
        </Paragraph>

        <Link href="/">
          <a className={styles.button} data-aos-delay="200" data-aos="fade-up">
            <Calendar className={styles.icon} />

            <div className={styles.texts}>
              <span className={styles.mainText}>Create Your Nanny Share</span>
              <span className={styles.secondaryText}>
                Takes less than 5 minutes
              </span>
            </div>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.link} data-aos-delay="200" data-aos="fade-up">
            Or browse local nanny-shares
          </a>
        </Link>

        <div className={styles.menu}>
          <Link href="/">
            <a className={styles.logo}>
              <Hapu />
            </a>
          </Link>

          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/">
                <a className={cn(styles.itemLink, animated.underline)}>
                  Share Your Nanny
                </a>
              </Link>
            </li>

            <li className={styles.item}>
              <Link href="/">
                <a className={cn(styles.itemLink, animated.underline)}>
                  Our Story
                </a>
              </Link>
            </li>

            <li className={styles.item}>
              <Link href="/">
                <a className={cn(styles.itemLink, animated.underline)}>Blog</a>
              </Link>
            </li>

            <li className={styles.item}>
              <Link href="/">
                <a className={cn(styles.itemLink, animated.underline)}>
                  Terms & Privacy
                </a>
              </Link>
            </li>
          </ul>

          <ul className={styles.socialNetworks}>
            {socialNetworks.map((social) => {
              const Icon = social.icon;

              return (
                <li key={social.name} className={styles.social}>
                  <a
                    target="_blank"
                    href={social.url}
                    className={styles.socialLink}
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <span className={styles.copy}>
          Copyright © 2017 Hapu PTY Limited All rights reserved
        </span>
      </Container>
    </footer>
  );
}
