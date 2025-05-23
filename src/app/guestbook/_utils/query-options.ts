import { infiniteQueryOptions } from '@tanstack/react-query';

import { drawingsPerPage } from '#src/constants/guestbook';
import { getDrawings } from '#src/services/drawings';
import { getPaginationRange } from '#src/utils/helpers';

const getDrawingsQueryOptions = infiniteQueryOptions({
  queryKey: ['drawings'],
  queryFn: ({ pageParam }) => {
    return getDrawings({
      range: getPaginationRange(pageParam, drawingsPerPage),
    });
  },
  initialPageParam: 0,
  getNextPageParam: (lastPage, _allPages, lastPageParam) => {
    if (lastPage.drawings.length < drawingsPerPage) return;
    return lastPageParam + 1;
  },
});

export { getDrawingsQueryOptions };
