import { useEffect } from 'react';
import Router from 'next/router';
import { AppProps } from 'next/app';
import { Provider as ReakitProvider } from 'reakit';
import { ToastContainer, Slide } from 'react-toastify';
import nprogress from 'nprogress';
import AOS from 'aos';

import 'react-toastify/dist/ReactToastify.min.css';
import 'aos/dist/aos.css';

import '@/styles/css/global.css';

Router.events.on(`routeChangeStart`, () => nprogress.start());
Router.events.on(`routeChangeComplete`, () => {
  document.body.style.overflow = `unset`;
  nprogress.done();
});
Router.events.on(`routeChangeError`, () => nprogress.done());

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      disable: `mobile`,
      easing: `ease-out-cubic`,
      offset: 50,
      duration: 250,
      once: true,
    });
  }, []);

  return (
    <ReakitProvider>
      <ToastContainer transition={Slide} position="bottom-left" />
      <Component {...pageProps} />
    </ReakitProvider>
  );
}
