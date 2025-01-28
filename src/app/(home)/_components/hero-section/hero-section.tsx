import Link from 'next/link';

import { Button } from '#src/components/core/button/button';
import { contactLink } from '#src/constants/links';
import type { HomePageContent } from '#src/types/sanity';
import { HeroIllustration } from '../hero-illustration/hero-illustration';

import classes from './hero-section.module.scss';

type Props = Pick<HomePageContent, 'title'>;

const HeroSection = ({ title }: Props) => {
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <HeroIllustration className={classes.illustration} />
        <h1 className={classes.text}>{title}</h1>
        <div className={classes.actions}>
          <Button asChild>
            <Link href={contactLink}>Get in touch</Link>
          </Button>
          <Button variant="outlined" asChild>
            <Link href="/about">Read more</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
