import type { RemixiconComponentType } from '@remixicon/react';

import classes from './tag.module.scss';

type Props = {
  name: string;
  icon?: RemixiconComponentType;
};

const Tag = ({ name, icon: Icon }: Props) => {
  return (
    <div className={classes.tag}>
      {Icon && <Icon />}
      {name}
    </div>
  );
};

export { Tag };
