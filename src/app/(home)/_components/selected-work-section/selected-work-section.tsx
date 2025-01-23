import { ProjectCard } from '#src/components/common/project-card/project-card';

import classes from './selected-work-section.module.scss';

const SelectedWorkSection = () => {
  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>Selected work</h2>
      <ul className={classes.projects}>
        <li>
          <ProjectCard
            title="Mayme Lindsey"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, sequi perferendis! Perspiciatis officiis fugit, quibusdam natus ab sint autem eos vero consectetur reprehenderit neque quia illo dolor beatae error. Magni."
            services={['Development']}
            imageSrcs={[]}
          />
        </li>
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
            services={['Design']}
            imageSrcs={[
              'https://cuberto.com/assets/projects/kzero/screenshot/2.jpg',
            ]}
          />
        </li>
      </ul>
    </section>
  );
};

export { SelectedWorkSection };
