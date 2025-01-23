import Link from 'next/link';

import { Button } from '#src/components/core/button/button';
import { contactLink } from '#src/constants/links';

import classes from './about.module.scss';

const AboutPage = () => {
  return (
    <main>
      <div className={classes.container}>
        <h1 className={classes.title}>About</h1>
        <div className={classes.content}>
          <p>
            Dolor sit amet consectetur adipisicing elit. Nam quis iusto nesciunt
            rerum tempore impedit ducimus.
          </p>
          <p>
            Sit amet consectetur adipisicing elit. Ab, reprehenderit dolorem
            voluptates quibusdam tempore distinctio eos quo incidunt. Voluptate
            mollitia labore ullam! Ea sapiente obcaecati odio labore blanditiis
            aut aperiam, commodi dolor repellendus magnam.
          </p>
          <p>
            Consectetur adipisicing elit. Voluptatem inventore ducimus animi
            voluptatum voluptate voluptas, ullam dolore similique sint, ipsam
            dolorem recusandae doloribus velit! Explicabo excepturi inventore
            facilis eum quod.
          </p>
        </div>
        <Button variant="outlined" asChild>
          <Link href={contactLink}>Get in touch</Link>
        </Button>
      </div>
    </main>
  );
};

export default AboutPage;
