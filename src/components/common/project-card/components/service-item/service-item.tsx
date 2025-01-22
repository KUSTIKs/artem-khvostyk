import type { RemixiconComponentType } from '@remixicon/react';

import classes from './service-item.module.scss';

type Props = {
  icon: RemixiconComponentType;
  name: string;
};

const ServiceItem = ({ icon: Icon, name }: Props) => {
  return (
    <div className={classes.item}>
      <Icon className={classes.icon} />
      {name}
    </div>
  );
};

export { ServiceItem };
