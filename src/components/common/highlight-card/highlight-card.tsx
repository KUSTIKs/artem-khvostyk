import Image from 'next/image';
import Link from 'next/link';
import classes from './highlight-card.module.scss';

type Props = {
  title: string;
  topic: string;
  href: string;
  imageSrc: string;
};

const HighlightCard = ({ title, topic, href, imageSrc }: Props) => {
  return (
    <Link href={href} className={classes.wrapper}>
      <img src={imageSrc} alt={`${title} preview`} className={classes.image} />
      <div className={classes.content}>
        <p className={classes.title}>{title}</p>
        <p className={classes.topic}>{topic}</p>
      </div>
    </Link>
  );
};

export { HighlightCard };
