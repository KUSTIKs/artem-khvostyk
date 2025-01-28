import { tagIconsMap } from '#src/constants/tag-icons';
import type { ProjectTag } from '#src/types/sanity';

import classes from './tag.module.scss';

type Props = {
  name: string;
  value: string;
};

const Tag = ({ name, value }: Props) => {
  const Icon = tagIconsMap[value];

  return (
    <div className={classes.tag}>
      {Icon && <Icon className={classes.icon} />}
      {name}
    </div>
  );
};

export { Tag };
