import { HighlightCard } from '#src/components/common/highlight-card/highlight-card';
import type { HomePageContentSchema } from '#src/types/sanity';
import { CatIllustration } from '../cat-illustration/cat-illustration';

import classes from './preview-section.module.scss';

type Props = Pick<HomePageContentSchema, 'highlights' | 'mainVideo'>;

const PreviewSection = ({ highlights, mainVideo }: Props) => {
  return (
    <section className={classes.section}>
      <div className={classes.highlights}>
        {highlights.map((highlight) => (
          <HighlightCard
            key={highlight._id}
            title={`${highlight.title} - ${highlight.description}`}
            topic="project"
            preview={highlight.preview}
            href={`/projects/${highlight.slug}`}
          />
        ))}
      </div>
      <figure>
        <CatIllustration />
        <figcaption className={classes.figcaption}>
          Just a cute little cat. You can remix it in{' '}
          <a href="https://rive.app/community/files/16782-31554-cute-cat">
            Rive
          </a>
          .
        </figcaption>
      </figure>
    </section>
  );
};

export { PreviewSection };
