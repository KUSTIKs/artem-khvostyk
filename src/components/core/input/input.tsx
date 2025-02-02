import { clsx } from 'clsx';
import type { ComponentPropsWithRef } from 'react';

import classes from './input.module.scss';

const Root = (props: ComponentPropsWithRef<'div'>) => {
  return <div {...props} className={clsx(props.className, classes.field)} />;
};

const Control = (props: ComponentPropsWithRef<'input'>) => {
  return (
    <input {...props} className={clsx(props.className, classes.control)} />
  );
};

export { Root, Control };
