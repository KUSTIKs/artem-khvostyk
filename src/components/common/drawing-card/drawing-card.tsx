import classes from './drawing-card.module.scss';

type Props = {
  drawingSrc: string;
  title: string;
  author: string;
  date: Date;
};

const DrawingCard = ({ drawingSrc, title, author, date }: Props) => {
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className={classes.card}>
      <img className={classes.drawing} src={drawingSrc} alt={title} />
      <div>
        <p className={classes.title}>{title}</p>
        <p className={classes.info}>
          {author} • {formattedDate}
        </p>
      </div>
    </div>
  );
};

export { DrawingCard };
