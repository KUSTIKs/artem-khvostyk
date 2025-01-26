'use client';

import { RiBrushLine } from '@remixicon/react';
import { useQuery } from '@tanstack/react-query';

import { SignedIn, SignedOut } from '#src/components/auth/auth';
import { Button } from '#src/components/core/button/button';
import { CreateDrawingDialog } from '#src/components/dialogs/create-drawing-dialog/create-drawing-dialog';
import { getDrawings } from '#src/services/drawings';
import { ConnectGithubAlert } from './_components/connect-github-alert/connect-github-alert';
import { SignOutAlert } from './_components/sign-out-alert/sign-out-alert';

import { DrawingCard } from '#src/components/common/drawing-card/drawing-card';
import classes from './guestbook.module.scss';

const GuestbookPage = () => {
  const { data: drawingsData, isSuccess } = useQuery({
    queryKey: ['drawings'],
    queryFn: getDrawings,
  });

  console.log({ drawingsData });

  const drawingsExist = isSuccess && drawingsData.drawings.length > 0;

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
          {drawingsData?.drawings.length === 0 && (
            <p className={classes.message}>No guests were here</p>
          )}

          {drawingsExist && (
            <div className={classes.drawings}>
              {drawingsData.drawings.map((drawing) => (
                <DrawingCard
                  key={drawing.id}
                  author={drawing.author.github_username}
                  title={drawing.name}
                  date={new Date(drawing.created_at)}
                  drawingSrc={drawing.image_url}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default GuestbookPage;
