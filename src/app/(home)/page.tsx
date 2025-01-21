import { RiAddCircleLine } from '@remixicon/react';

import { Button } from '#src/components/core/button/button';

import styles from './home.module.css';

const HomePage = () => {
  return (
    <main className={styles.page}>
      <h1>Hello, world</h1>
      <Button>
        <RiAddCircleLine />
        Hello, world
      </Button>
      <Button variant="ghost">
        <RiAddCircleLine />
        Hello, world
      </Button>
      <Button variant="outlined">
        <RiAddCircleLine />
        Hello, world
      </Button>
    </main>
  );
};

export default HomePage;
