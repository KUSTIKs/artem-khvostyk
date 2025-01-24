import { DrawingCard } from '#src/components/common/drawing-card/drawing-card';
import { ConnectGithubAlert } from './_components/connect-github-alert/connect-github-alert';

import classes from './guestbook.module.scss';

const GuestbookPage = () => {
  return (
    <main>
      <div className={classes.container}>
        <h1 className={classes.title}>Guestbook</h1>
        <ConnectGithubAlert />
        <div className={classes.content}>
          {/* <p className={classes.message}>No guests were here</p> */}
          <div className={classes.drawings}>
            <DrawingCard
              author="Scott Strickland"
              title="Masterpiece"
              date={new Date()}
              drawingSrc=""
            />
            <DrawingCard
              author="Scott Strickland"
              title="Masterpiece"
              date={new Date()}
              drawingSrc=""
            />
            <DrawingCard
              author="Scott Strickland"
              title="Masterpiece"
              date={new Date()}
              drawingSrc=""
            />
            <DrawingCard
              author="Scott Strickland"
              title="Masterpiece"
              date={new Date()}
              drawingSrc=""
            />
            <DrawingCard
              author="Scott Strickland"
              title="Masterpiece"
              date={new Date()}
              drawingSrc=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuestbookPage;
