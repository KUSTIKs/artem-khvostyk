import Skeleton from 'react-loading-skeleton';
import classes from './drawing-card.module.scss';

const DrawingCardSkeleton = () => {
  return (
    <div className={classes.card}>
      <Skeleton className={classes.drawing} style={{ border: 'none' }} />
      <div>
        <p className={classes.title}>
          <Skeleton />
        </p>
        <p className={classes.info}>
          <Skeleton width="60%" />
        </p>
      </div>
    </div>
  );
};

export { DrawingCardSkeleton };
