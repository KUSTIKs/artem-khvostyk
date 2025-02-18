import type { Metadata } from 'next';
import type { Person, WithContext } from 'schema-dts';

const structuredData: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Artem Khvostyk',
  alternateName: 'KUSTIK',
  disambiguatingDescription: 'Software developer',
  url: 'https://www.kustik.xyz',
  image: 'https://www.kustik.xyz/artem-khvostyk.png',
  sameAs: [
    'https://www.linkedin.com/in/artem-khvostyk/',
    'https://x.com/artem_khvostyk',
    'https://github.com/KUSTIKs',
    'https://read.cv/artemkhvostyk',
    'https://www.codewars.com/users/KUSTIKs',
  ],
};

const metadata: Metadata = {
  title: {
    template: '%s | Kustik',
    default: 'Kustik | Personal Website',
  },
  description:
    "Developer with a growing interest in design. Explore my projects and if you're feeling creative, leave a drawing in the guestbook.",
  openGraph: {
    title: 'Artem Khvostyk | KUSTIK - Personal Website',
    description:
      "Developer with a growing interest in design. Explore my projects and if you're feeling creative, leave a drawing in the guestbook.",
    url: 'https://kustik.xyz',
    type: 'website',
    images: 'https://kustik.xyz/preview.png',
  },
  twitter: {
    title: 'Artem Khvostyk | KUSTIK - Personal Website',
    description:
      "Developer with a growing interest in design. Explore my projects and if you're feeling creative, leave a drawing in the guestbook.",
    card: 'summary_large_image',
    siteId: '1655961957118222336',
    creatorId: '1655961957118222336',
    images: 'https://kustik.xyz/preview.png',
  },
};

export { structuredData, metadata };
