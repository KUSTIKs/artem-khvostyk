import { RiArrowRightLine } from '@remixicon/react';
import Link from 'next/link';

import { Button } from '#src/components/core/button/button';
import { type ServiceType, serviceIcons } from '#src/constants/services';
import { ServiceItem } from './components/service-item/service-item';

import classes from './project-card.module.scss';

type Props = {
  title: string;
  description: string;
  imageSrcs: string[];
  services: ServiceType[];
};

const ProjectCard = ({ title, description, imageSrcs, services }: Props) => {
  return (
    <article>
      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
        <ul className={classes.services}>
          {services.map((service) => (
            <li key={service}>
              <ServiceItem icon={serviceIcons[service]} name={service} />
            </li>
          ))}
        </ul>
        <Button variant="outlined" className={classes.button} asChild>
          <Link href="/">
            Read more <RiArrowRightLine />
          </Link>
        </Button>
      </div>
      <img src={imageSrcs.at(0)} alt="preview" className={classes.image} />
    </article>
  );
};

export { ProjectCard };
