import clsx from 'clsx';
import type { ComponentPropsWithRef } from 'react';

import classes from './alert.module.scss';

const Root = (props: ComponentPropsWithRef<'div'>) => {
  return <div {...props} className={clsx(classes.alert, props.className)} />;
};

const Title = (props: ComponentPropsWithRef<'p'>) => {
  return <p {...props} className={clsx(classes.title, props.className)} />;
};

const Description = (props: ComponentPropsWithRef<'p'>) => {
  return (
    <p {...props} className={clsx(classes.description, props.className)} />
  );
};

const Action = (props: ComponentPropsWithRef<'div'>) => {
  return <div {...props} className={clsx(classes.action, props.className)} />;
};

export { Root, Title, Description, Action };
