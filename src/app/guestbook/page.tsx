import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import type { Metadata } from 'next';

import { SignedIn } from '#src/components/auth/auth';
import { getQueryClient } from '#src/utils/query-client';
import { AuthAlert } from './_components/auth-alert/auth-alert';
import { DrawSection } from './_components/draw-section/draw-section';
import { DrawingsGallery } from './_components/drawings-gallery/drawings-gallery';
import { getDrawingsQueryOptions } from './_utils/query-options';

import classes from './guestbook.module.scss';

const metadata: Metadata = {
  title: 'Guestbook',
};

const GuestbookPage = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(getDrawingsQueryOptions);

  return (
    <main>
      <div className={classes.container}>
        <h1 className={classes.title}>Guestbook</h1>
        <AuthAlert />
        <SignedIn>
          <DrawSection />
        </SignedIn>

        <HydrationBoundary state={dehydrate(queryClient)}>
          <DrawingsGallery />
        </HydrationBoundary>
      </div>
    </main>
  );
};

export default GuestbookPage;
export { metadata };
