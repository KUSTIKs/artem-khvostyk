import Image from 'next/image';
import Link from 'next/link';

import { Button } from '#src/components/core/button/button';

import classes from './hero-section.module.scss';

const HeroSection = () => {
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <Image
          src="/hero-illustration.svg"
          alt="development process"
          height={32}
          width={256}
          draggable={false}
          className={classes.illustration}
        />
        <h1 className={classes.text}>
          Web Developer with a growing interest in design.
        </h1>
        <div className={classes.actions}>
          <Button asChild>
            <Link href="/contact">Get in touch</Link>
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
