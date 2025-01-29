import Link from 'next/link';

import { StyledPortableText } from '#src/components/common/styled-portable-text/styled-portable-text';
import { Tag } from '#src/components/common/tag/tag';
import { Button } from '#src/components/core/button/button';
import { Separator } from '#src/components/core/separator/separator';
import { resourceIconsMap, tagIconsMap } from '#src/constants/icons';
import { getProject } from '#src/services/sanity/projects';
import { sanityImageUrlBuilder } from '#src/utils/sanity';

import classes from './project.module.scss';

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

          {project.links && (
            <>
              <p className={classes.caption}>Links:</p>
              <ul className={classes.links}>
                {project.links.map((link) => {
                  const Icon = resourceIconsMap[link.resource];

                  return (
                    <li key={link._key}>
                      <Button variant="outlined" asChild>
                        <Link href={link.href}>
                          {Icon && <Icon />}
                          {link.label}
                        </Link>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </section>

        {project.content && (
          <>
            <Separator className={classes.separator} />
            <section>
              <StyledPortableText value={project.content} />
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default ProjectPage;
