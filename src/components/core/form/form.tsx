'use client';

import * as Form from '@radix-ui/react-form';
import { clsx } from 'clsx';

import classes from './form.module.scss';

const Label = (props: Form.FormLabelProps) => {
  return (
    <Form.Label {...props} className={clsx(props.className, classes.label)} />
  );
};

const Message = (props: Form.FormMessageProps) => {
  return (
    <Form.Message
      {...props}
      className={clsx(props.className, classes.message)}
    />
  );
};
const Control = (props: Form.FormControlProps) => {
  return (
    <Form.Control
      {...props}
      className={clsx(props.className, classes.control)}
    />
  );
};

export * from '@radix-ui/react-form';
export { Control, Label, Message };
