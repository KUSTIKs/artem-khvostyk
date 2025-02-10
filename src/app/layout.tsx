import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Footer } from '#src/components/common/footer/footer';
import { Header } from '#src/components/common/header/header';
import { AppProviders } from '#src/components/providers/app-providers';

import '../styles/globals.css';
import '../styles/reset.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const metadata: Metadata = {
  title: 'Artem Khvostyk',
  description:
    "Developer with a growing interest in design. Explore my projects and if you're feeling creative, leave a drawing in the guestbook.",
  openGraph: {
    title: 'Artem Khvostyk',
    description:
      "Developer with a growing interest in design. Explore my projects and if you're feeling creative, leave a drawing in the guestbook.",
    url: 'https://kustik.xyz',
    type: 'website',
    images: 'https://kustik.xyz/preview.png',
  },
  twitter: {
    title: 'Artem Khvostyk',
    description:
      "Developer with a growing interest in design. Explore my projects and if you're feeling creative, leave a drawing in the guestbook.",
    card: 'summary_large_image',
    siteId: '1655961957118222336',
    creatorId: '1655961957118222336',
    images: 'https://kustik.xyz/preview.png',
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>
          <Header />
          {children}
          <Footer />
        </AppProviders>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
