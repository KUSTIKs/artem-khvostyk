import { HighlightCard } from '#src/components/common/highlight-card/highlight-card';
import type { HomePageContentSchema } from '#src/types/sanity';

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
        <video muted autoPlay loop playsInline className={classes.video}>
          <source src={mainVideo.url} />
        </video>
        <figcaption className={classes.videoCaption}>
          Video by{' '}
          <a href="https://dribbble.com/shots/25205879-Forest-Cabin">
            Roman Klčo
          </a>
          .
        </figcaption>
      </figure>
    </section>
  );
};

export { PreviewSection };
