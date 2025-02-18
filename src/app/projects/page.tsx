import type { Metadata } from 'next';

import { ProjectCard } from '#src/components/common/project-card/project-card';
import { getProjects } from '#src/services/sanity/projects';

import classes from './projects.module.scss';

const metadata: Metadata = {
  title: 'Projects',
};

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <main>
      <div className={classes.container}>
        <h1 className={classes.title}>Projects</h1>
        {/* <div className={classes.actions}>
          <Button variant="outlined" size="sm">
            <RiEqualizerLine />
            Filters
          </Button>
        </div> */}
        <ul className={classes.projects}>
          {projects.map((project) => (
            <li key={project._id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                href={`/projects/${project.slug}`}
                preview={project.preview}
                isCompact
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ProjectsPage;
export { metadata };
