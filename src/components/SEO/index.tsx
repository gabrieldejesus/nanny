import Head from 'next/head';
import urljoin from 'url-join';
import isAbsoluteUrl from 'is-absolute-url';

import { SEOProps } from '@/types';

const config = {
  siteTitle: `Easily create or join a local nanny share with Hapu`,
  siteDescription: `Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.`,
};

export default function SEO({
  title,
  path,
  image,
  description,
  shouldIndexPage,
}: SEOProps) {
  const { siteTitle, siteDescription } = config;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL as string;

  const headTitle = title || siteTitle;
  const auxDescription = description || siteDescription;
  const url = urljoin(siteUrl, path || ``);

  const thumb =
    image && isAbsoluteUrl(image)
      ? image
      : urljoin(siteUrl, image || `/images/og/default.png`);

  return (
    <Head>
      {/* Base */}
      <meta charSet="UTF-8" />
      <title>{headTitle}</title>
      <meta name="description" content={auxDescription} />
      <meta name="image" content={thumb} />
      {!shouldIndexPage && <meta name="robots" content="noindex" />}

      {/* General */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="canonical"
        href={url}
        data-baseprotocol="https:"
        data-basehost="nanny.gabrieldejesus.dev"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="var(--primary)" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="msapplication-TileColor" content="var(--primary)" />
      <meta name="google" content="notranslate" />

      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={headTitle} />
      <meta property="og:description" content={auxDescription} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={headTitle} />
      <meta property="og:image" content={thumb} />
      <meta property="og:image:secure_url" content={thumb} />
      <meta
        property="og:image:alt"
        content="Easily create or join a local nanny share with Hapu"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={headTitle} />
      <meta name="twitter:site" content="@hapunui" />
      <meta name="twitter:creator" content="@hapunui" />
      <meta name="twitter:image" content={thumb} />
      <meta name="twitter:image:src" content={thumb} />
      <meta
        name="twitter:image:alt"
        content="Easily create or join a local nanny share with Hapu"
      />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
    </Head>
  );
}
