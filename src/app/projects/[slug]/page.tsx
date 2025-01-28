import { RiGithubFill, RiGlobalLine } from '@remixicon/react';
import clsx from 'clsx';

import { Tag } from '#src/components/common/tag/tag';
import { Button } from '#src/components/core/button/button';
import { Separator } from '#src/components/core/separator/separator';
import { tagIconsMap } from '#src/constants/tag-icons';

import { getProject } from '#src/services/sanity/projects';
import { sanityImageUrlBuilder } from '#src/utils/sanity';
import classes from './project.module.scss';
import { StyledPortableText } from '#src/components/common/styled-portable-text/styled-portable-text';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const ProjectPage = async ({ params }: Props) => {
  const { slug } = await params;
  const project = await getProject({ slug });

  return (
    <main>
      <div className={classes.thumbnailContainer}>
        <img
          src={sanityImageUrlBuilder.image(project.thumbnail).url()}
          alt="thumbnail"
          className={classes.thumbnail}
        />
      </div>
      <div className={classes.container}>
        <section>
          <h1 className={classes.title}>{project.title}</h1>
          <p className={classes.description}>{project.description}</p>
          <p className={classes.caption}>Tags:</p>
          <ul className={classes.tags}>
            {project.tags.map((tag) => (
              <li key={tag._id}>
                <Tag name={tag.name} icon={tagIconsMap[tag.value]} />
              </li>
            ))}
          </ul>
          <p className={classes.caption}>Links:</p>
          <ul className={classes.links}>
            <li>
              <Button variant="outlined">
                <RiGlobalLine />
                Website
              </Button>
            </li>
            <li>
              <Button variant="outlined">
                <RiGithubFill />
                GitHub Repo
              </Button>
            </li>
          </ul>
        </section>
        <Separator className={classes.separator} />
        <section className={classes.content}>
          <StyledPortableText value={project.content} />
        </section>
      </div>
    </main>
  );
};

export default ProjectPage;
