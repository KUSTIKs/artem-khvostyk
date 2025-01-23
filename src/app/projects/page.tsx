import { RiEqualizerLine } from '@remixicon/react';

import { ProjectCard } from '#src/components/common/project-card/project-card';
import { Button } from '#src/components/core/button/button';

import classes from './projects.module.scss';

const ProjectsPage = () => {
  return (
    <main>
      <div className={classes.container}>
        <h1 className={classes.title}>Projects</h1>
        <div className={classes.actions}>
          <Button variant="outlined" size="sm">
            <RiEqualizerLine />
            Filters
          </Button>
        </div>
        <ul className={classes.projects}>
          <li>
            <ProjectCard
              title="SnapLink"
              description="SnapLink makes it effortless to share files, links, and documents across multiple devices. With a user-friendly interface, you can quickly send and receive content without the hassle of complicated setups."
              services={['Design', 'Development']}
              imageSrcs={[
                'https://cuberto.com/assets/projects/flipaclip/screenshot/5.jpg',
              ]}
            />
          </li>
          <li>
            <ProjectCard
              title="Mayme Lindsey"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, sequi perferendis! Perspiciatis officiis fugit, quibusdam natus ab sint autem eos vero consectetur reprehenderit neque quia illo dolor beatae error. Magni."
              services={['Development']}
              imageSrcs={[
                'https://cuberto.com/assets/projects/kzero/screenshot/2.jpg',
              ]}
            />
          </li>
        </ul>
      </div>
    </main>
  );
};

export default ProjectsPage;
