import { RiArrowRightLine } from '@remixicon/react';
import Link from 'next/link';

import { Button } from '#src/components/core/button/button';
import { tagIconsMap } from '#src/constants/tag-icons';
import { Tag } from '../tag/tag';

import classes from './project-card.module.scss';

type Props = {
  title: string;
  description: string;
  imageSrcs: string[];
  tags: { name: string; value: string }[];
  href?: string;
};

const ProjectCard = ({ title, description, imageSrcs, tags, href }: Props) => {
  return (
    <article className={classes.card}>
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
      {imageSrcs.length > 0 && (
        <img src={imageSrcs.at(0)} alt="preview" className={classes.image} />
      )}
    </article>
  );
};

export { ProjectCard };
