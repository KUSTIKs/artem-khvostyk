import { clsx } from 'clsx';
import type { ComponentPropsWithRef } from 'react';

import classes from './separator.module.scss';

type Props = ComponentPropsWithRef<'hr'> & {
  orientation?: 'vertical' | 'horizontal';
};

const Separator = ({
  orientation = 'horizontal',
  className,
  ...props
}: Props) => {
  return (
    <hr
      {...props}
      className={clsx(classes.separator, className)}
      data-orientation={orientation}
    />
  );
};

export { Separator };
