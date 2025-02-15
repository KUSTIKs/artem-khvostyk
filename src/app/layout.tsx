import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import { Footer } from '#src/components/common/footer/footer';
import { Header } from '#src/components/common/header/header';
import { StructuredData } from '#src/components/core/structured-data/structured-data';
import { AppProviders } from '#src/components/providers/app-providers';
import { metadata, structuredData } from '#src/constants/ceo';

import '../styles/globals.css';
import '../styles/reset.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <StructuredData data={structuredData} />
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
