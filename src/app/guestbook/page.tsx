import { RiBrushLine } from '@remixicon/react';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import { SignedIn } from '#src/components/auth/auth';
import { Button } from '#src/components/core/button/button';
import { CreateDrawingDialog } from '#src/components/dialogs/create-drawing-dialog/create-drawing-dialog';
import { getQueryClient } from '#src/utils/query-client';
import { AuthAlert } from './_components/auth-alert/auth-alert';
import { DrawingsGallery } from './_components/drawings-gallery/drawings-gallery';
import { getDrawingsQueryOptions } from './_utils/query-options';

import classes from './guestbook.module.scss';

const GuestbookPage = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(getDrawingsQueryOptions);

  return (
    <main>
      <div className={classes.container}>
        <h1 className={classes.title}>Guestbook</h1>
        <AuthAlert />
        <SignedIn>
          <div className={classes.actions}>
            <CreateDrawingDialog>
              <Button variant="outlined">
                <RiBrushLine />
                Draw
              </Button>
            </CreateDrawingDialog>
          </div>
        </SignedIn>

        <HydrationBoundary state={dehydrate(queryClient)}>
          <DrawingsGallery />
        </HydrationBoundary>
      </div>
    </main>
  );
};

export default GuestbookPage;
