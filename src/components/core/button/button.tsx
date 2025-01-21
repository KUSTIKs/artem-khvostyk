import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithRef, ElementType } from 'react';

import classes from './button.module.scss';

type Props = ComponentPropsWithRef<'button'> & {
  asChild?: boolean;
  variant?: 'primary' | 'ghost' | 'outlined';
  size?: 'base' | 'sm';
};

const Button = ({
  asChild,
  variant = 'primary',
  size = 'base',
  ...props
}: Props) => {
  const Component: ElementType = asChild ? Slot : 'button';

  return (
    <Component
      className={classes.button}
      data-variant={variant}
      data-size={size}
      {...props}
    />
  );
};

export { Button };
