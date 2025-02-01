import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useId } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import * as Form from '#src/components/core/form/form';
import {
  type NameDrawingSchemaType,
  nameDrawingSchema,
} from '../../utils/name-drawing-schema';
import {
  activeStepIndexAtom,
  drawingNameAtom,
  drawingUrlAtom,
} from '../../utils/store';
import { BackButton, ContinueButton, Counter } from '../common/common';

import classes from './naming-step-dialog.module.scss';

const NamingStepDialog = () => {
  const drawingUrl = useAtomValue(drawingUrlAtom);
  const setActiveStepIndex = useSetAtom(activeStepIndexAtom);
  const [name, setName] = useAtom(drawingNameAtom);
  const form = useForm<NameDrawingSchemaType>({
    resolver: zodResolver(nameDrawingSchema),
    defaultValues: { name: name || '' },
  });
  const formId = useId();

  const { errors } = form.formState;

  const handleSumbmit: SubmitHandler<NameDrawingSchemaType> = ({ name }) => {
    setName(name);
    setActiveStepIndex((value) => value + 1);
  };

  if (drawingUrl === null) {
    throw new Error('Drawing Url must be non null at this step');
  }

  return (
    <>
      <header className={classes.header}>
        <Dialog.Title className={classes.title}>Name your drawing</Dialog.Title>
        <Dialog.Description className={classes.description}>
          Name will be displayed under your drawing
        </Dialog.Description>
      </header>

      <div>
        <img src={drawingUrl} alt="Your drawing" className={classes.drawing} />
        <Form.Root onSubmit={form.handleSubmit(handleSumbmit)} id={formId}>
          <Form.Field name="name" className={classes.field}>
            <Form.Label>Drawing name:</Form.Label>
            <Form.Control
              placeholder="My masterpiece"
              autoComplete="off"
              {...form.register('name')}
            />
            {errors.name && <Form.Message>{errors.name.message}</Form.Message>}
          </Form.Field>
        </Form.Root>
      </div>

      <div className={classes.footer}>
        <Counter />
        <div className={classes.actions}>
          <BackButton />
          <ContinueButton type="submit" form={formId} />
        </div>
      </div>
    </>
  );
};

export { NamingStepDialog };
