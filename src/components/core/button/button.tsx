import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
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
  className,
  ...props
}: Props) => {
  const Component: ElementType = asChild ? Slot : 'button';

  return (
    <Component
      {...props}
      className={clsx(classes.button, className)}
      data-variant={variant}
      data-size={size}
    />
  );
};

export { Button };
