import { RiBrushLine } from '@remixicon/react';

import { DrawingCard } from '#src/components/common/drawing-card/drawing-card';
import { Button } from '#src/components/core/button/button';
import { CreateDrawingDialog } from '#src/components/dialogs/create-drawing-dialog/create-drawing-dialog';
import { ConnectGithubAlert } from './_components/connect-github-alert/connect-github-alert';

import classes from './guestbook.module.scss';

const GuestbookPage = () => {
  return (
    <main>
      <div className={classes.container}>
        <h1 className={classes.title}>Guestbook</h1>
        {/* <ConnectGithubAlert /> */}
        <Button variant="outlined">
          <RiBrushLine />
          Draw
        </Button>
        <div className={classes.content}>
          <p className={classes.message}>No guests were here</p>
          <CreateDrawingDialog />
          {/* <div className={classes.drawings}>
            <DrawingCard
              author="Scott Strickland"
              title="Masterpiece"
              date={new Date()}
              drawingSrc=""
            />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default GuestbookPage;
