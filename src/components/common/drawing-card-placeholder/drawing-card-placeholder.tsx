import classes from './drawing-card-placeholder.module.scss';

const DrawingCardPreview = () => {
  return (
    <div className={classes.card}>
      <div className={classes.drawing} />
      <div>
        <div className={classes.titleWrapper}>
          <p className={classes.title} />
        </div>
        <div className={classes.infoWrapper}>
          <p className={classes.info} />
        </div>
      </div>
    </div>
  );
};

export { DrawingCardPreview };
