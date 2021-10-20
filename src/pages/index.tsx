import { Header, SEO } from '@/components';
import { AvailableNow, Hero, ShareYourHome } from '@/components/Sections';

import styles from '@/styles/pages/home.module.css';

export default function Home() {
  return (
    <>
      <SEO />

      <div className={styles.bg}>
        <Header />

        <Hero />
      </div>

      <AvailableNow />

      <ShareYourHome />
    </>
  );
}
