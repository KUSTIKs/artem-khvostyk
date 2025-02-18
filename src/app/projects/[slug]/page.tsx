import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';

import { StyledPortableText } from '#src/components/common/styled-portable-text/styled-portable-text';
import { Tag } from '#src/components/common/tag/tag';
import { Button } from '#src/components/core/button/button';
import { MediaFile } from '#src/components/core/media-file/media-file';
import { Separator } from '#src/components/core/separator/separator';
import { resourceIconsMap, tagIconsMap } from '#src/constants/icons';
import { getProject } from '#src/services/sanity/projects';

import classes from './project.module.scss';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { slug } = await params;
  const project = await getProject({ slug });

  const parentImages = (await parent).openGraph?.images;
  const images = parentImages ?? [];

  if (project.preview?.type === 'image') {
    images.unshift(project.preview.image.src);
  } else if (project.preview?.type === 'video') {
    if (project.preview.video.thumbnail) {
      images.unshift(project.preview.video.thumbnail.src);
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images,
    },
    twitter: {
      title: project.title,
      description: project.description,
      images,
    },
  };
};

const ProjectPage = async ({ params }: Props) => {
  const { slug } = await params;
  const project = await getProject({ slug });

  return (
    <main>
      {project.preview && (
        <div className={classes.previewContainer}>
          <MediaFile
            file={project.preview}
            className={classes.preview}
            videoProps={{
              muted: true,
              autoPlay: true,
              controls: true,
              loop: true,
            }}
          />
        </div>
      )}

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
                        <Link href={link.href} target="_blank">
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
export { generateMetadata };
