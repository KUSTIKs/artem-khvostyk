import { RiBrushLine } from '@remixicon/react';

import { SignedIn, SignedOut } from '#src/components/auth/auth';
import { Button } from '#src/components/core/button/button';
import { CreateDrawingDialog } from '#src/components/dialogs/create-drawing-dialog/create-drawing-dialog';
import { ConnectGithubAlert } from './_components/connect-github-alert/connect-github-alert';
import { SignOutAlert } from './_components/sign-out-alert/sign-out-alert';

import classes from './guestbook.module.scss';

const GuestbookPage = () => {
  return (
    <main>
      <div className={classes.container}>
        <h1 className={classes.title}>Guestbook</h1>
        <SignedOut>
          <ConnectGithubAlert />
        </SignedOut>
        <SignedIn>
          <SignOutAlert />
          <div className={classes.actions}>
            <CreateDrawingDialog>
              <Button variant="outlined">
                <RiBrushLine />
                Draw
              </Button>
            </CreateDrawingDialog>
          </div>
        </SignedIn>
        <div className={classes.content}>
          <p className={classes.message}>No guests were here</p>
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
