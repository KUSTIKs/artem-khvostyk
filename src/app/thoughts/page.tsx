import type { Metadata } from 'next';

import classes from './thoughts.module.scss';

const metadata: Metadata = {
  title: 'Thoughts',
};

const ThoughtsPage = () => {
  return (
    <main>
      <div className={classes.container}>
        <h1 className={classes.title}>Thoughts</h1>
        <p className={classes.message}>No thoughts for now</p>
      </div>
    </main>
  );
};

export default ThoughtsPage;
export { metadata };
