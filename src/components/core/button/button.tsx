import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithRef, ElementType } from 'react';

import classes from './button.module.scss';

type Props = ComponentPropsWithRef<'button'> & {
  asChild?: boolean;
  variant?: 'primary' | 'ghost' | 'outlined';
};

const Button = ({ asChild, variant = 'primary', ...props }: Props) => {
  const Component: ElementType = asChild ? Slot : 'button';

  return (
    <Component className={classes.button} data-variant={variant} {...props} />
  );
};

export { Button };
