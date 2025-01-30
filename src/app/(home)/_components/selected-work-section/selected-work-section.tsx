import { ProjectCard } from '#src/components/common/project-card/project-card';
import type { HomePageContentSchema } from '#src/types/sanity';

import classes from './selected-work-section.module.scss';

type Props = Pick<HomePageContentSchema, 'selectedWork'>;

const SelectedWorkSection = ({ selectedWork }: Props) => {
  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>Selected work</h2>
      <ul className={classes.projects}>
        {selectedWork.map((project) => (
          <li key={project._id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              href={`/projects/${project.slug}`}
              preview={project.preview}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export { SelectedWorkSection };
