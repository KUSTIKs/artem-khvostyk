import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Link from 'next/link';

import { Button } from '#src/components/core/button/button';
import { contactLink } from '#src/constants/links';
import type { HomePageContentSchema } from '#src/types/sanity';
import { HeroIllustration } from '../hero-illustration/hero-illustration';

import classes from './hero-section.module.scss';

type Props = Pick<HomePageContentSchema, 'title'>;

const HeroSection = ({ title }: Props) => {
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <HeroIllustration className={classes.illustration} />
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.actions}>
          <Button asChild>
            <Link href={contactLink}>Get in touch</Link>
          </Button>
          <Button variant="outlined" asChild>
            <Link href="/about">
              Read more
              <VisuallyHidden asChild>
                <span> about me</span>
              </VisuallyHidden>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
