'use client';

import { RiLoader2Line } from '@remixicon/react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { DrawingCard } from '#src/components/common/drawing-card/drawing-card';
import { DrawingCardSkeleton } from '#src/components/common/drawing-card/drawing-card-skeleton';
import { Button } from '#src/components/core/button/button';
import { getDrawingsQueryOptions } from '../../_utils/query-options';

import classes from './drawings-gallery.module.scss';

const DrawingsGallery = () => {
  const query = useInfiniteQuery(getDrawingsQueryOptions);

  const drawings = query.data?.pages.flatMap(({ drawings }) => drawings);
  const drawingsExist = drawings && drawings.length > 0;

  return (
    <div className={classes.wrapper}>
      {drawings?.length === 0 && (
        <p className={classes.message}>No guests were here</p>
      )}

      {query.isLoading && (
        <div className={classes.drawings}>
          {[...Array(8).keys()].map((index) => (
            <DrawingCardSkeleton key={index} />
          ))}
        </div>
      )}

      {drawingsExist && (
        <div className={classes.drawings}>
          {drawings.map((drawing) => (
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

      {drawingsExist && (
        <div className={classes.bottomContent}>
          {query.hasNextPage ? (
            <Button
              onClick={() => query.fetchNextPage()}
              disabled={query.isFetching}
              variant="ghost"
            >
              {query.isFetching && <RiLoader2Line className="spin" />}
              Load more
            </Button>
          ) : (
            <p className={classes.bottomMessage}>No more drawings</p>
          )}
        </div>
      )}
    </div>
  );
};

export { DrawingsGallery };
