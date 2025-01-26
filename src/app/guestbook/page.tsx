'use client';

import { RiBrushLine, RiLoader2Line } from '@remixicon/react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { SignedIn } from '#src/components/auth/auth';
import { DrawingCard } from '#src/components/common/drawing-card/drawing-card';
import { DrawingCardSkeleton } from '#src/components/common/drawing-card/drawing-card-skeleton';
import { Button } from '#src/components/core/button/button';
import { CreateDrawingDialog } from '#src/components/dialogs/create-drawing-dialog/create-drawing-dialog';
import { drawingsPerPage } from '#src/constants/guestbook';
import { getDrawings } from '#src/services/drawings';
import { getPaginationRange } from '#src/utils/get-pagination-range';
import { AuthAlert } from './_components/auth-alert/auth-alert';

import classes from './guestbook.module.scss';

const GuestbookPage = () => {
  const { data, isSuccess, isLoading, fetchNextPage, isFetching, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['drawings'],
      queryFn: ({ pageParam }) => {
        return getDrawings({
          range: getPaginationRange(pageParam, drawingsPerPage),
        });
      },
      initialPageParam: 0,
      getNextPageParam: (lastPage, _allPages, lastPageParam) => {
        if (lastPage.drawings.length === 0) return;
        return lastPageParam + 1;
      },
    });

  const drawingsExist = isSuccess && data.pages[0].drawings.length > 0;

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
        <div className={classes.content}>
          {data?.pages.at(0)?.drawings.length === 0 && (
            <p className={classes.message}>No guests were here</p>
          )}

          {isLoading && (
            <div className={classes.drawings}>
              {[...Array(8).keys()].map((index) => (
                <DrawingCardSkeleton key={index} />
              ))}
            </div>
          )}

          {drawingsExist && (
            <div className={classes.drawings}>
              {data.pages.flatMap(({ drawings }) =>
                drawings.map((drawing) => (
                  <DrawingCard
                    key={drawing.id}
                    author={drawing.author.github_username}
                    title={drawing.name}
                    date={new Date(drawing.created_at)}
                    drawingSrc={drawing.image_url}
                  />
                )),
              )}
            </div>
          )}

          {drawingsExist && (
            <div className={classes.bottomContent}>
              {hasNextPage ? (
                <Button
                  onClick={() => fetchNextPage()}
                  disabled={isFetching}
                  variant="ghost"
                >
                  {isFetching && <RiLoader2Line className="spin" />}
                  Load more
                </Button>
              ) : (
                <p className={classes.bottomMessage}>No more drawings</p>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default GuestbookPage;
