import { RiArrowRightLine } from '@remixicon/react';
import Link from 'next/link';

import { Button } from '#src/components/core/button/button';
import { tagIconsMap } from '#src/constants/icons';
import type { MediaFileSchema } from '#src/types/sanity';
import { Tag } from '../tag/tag';

import { MediaFile } from '#src/components/core/media-file/media-file';
import classes from './project-card.module.scss';

type Props = {
  title: string;
  description: string;
  preview?: MediaFileSchema | null;
  tags: { name: string; value: string }[];
  href?: string;
  isCompact?: boolean;
};

const ProjectCard = ({
  title,
  description,
  preview,
  tags,
  href,
  isCompact = false,
}: Props) => {
  return (
    <div className={classes.wrapper}>
      <article className={classes.card} data-compact={isCompact}>
        <div className={classes.content}>
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.description}>{description}</p>
          <ul className={classes.services}>
            {tags.map((tag) => (
              <li key={tag.value}>
                <Tag name={tag.name} icon={tagIconsMap[tag.value]} />
              </li>
            ))}
          </ul>
          {href && (
            <Button variant="outlined" className={classes.button} asChild>
              <Link href={href}>
                Read more <RiArrowRightLine />
              </Link>
            </Button>
          )}
        </div>
        {preview && (
          <MediaFile
            file={preview}
            className={classes.preview}
            videoProps={{
              muted: true,
              autoPlay: true,
            }}
          />
        )}
      </article>
    </div>
  );
};

export { ProjectCard };
