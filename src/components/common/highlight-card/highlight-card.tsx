import Link from 'next/link';

import { MediaFile } from '#src/components/core/media-file/media-file';
import type { MediaFileSchema } from '#src/types/sanity';

import classes from './highlight-card.module.scss';

type Props = {
  title: string;
  topic: string;
  href: string;
  preview?: MediaFileSchema | null;
};

const HighlightCard = ({ title, topic, href, preview }: Props) => {
  return (
    <Link href={href} className={classes.wrapper}>
      {preview && (
        <MediaFile
          file={preview}
          className={classes.preview}
          videoProps={{
            muted: true,
            autoPlay: true,
            loop: true,
          }}
        />
      )}
      <div className={classes.content}>
        <p className={classes.title}>{title}</p>
        <p className={classes.topic}>{topic}</p>
      </div>
    </Link>
  );
};

export { HighlightCard };
