'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { useAtom, useAtomValue } from 'jotai';
import { useId } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '#src/components/core/button/button';
import * as Form from '#src/components/core/form/form';
import {
  type NameDrawingSchemaType,
  nameDrawingSchema,
} from '../../utils/name-drawing-schema';
import { drawingNameAtom, drawingUrlAtom } from '../../utils/store';
import classes from './naming-step-dialog.module.scss';

import { Counter } from '../counter/counter';

type Props = {
  handleBack: () => void;
  handleContinue: () => void;
};

const NamingStepDialog = ({ handleBack, handleContinue }: Props) => {
  const drawingUrl = useAtomValue(drawingUrlAtom);
  const [name, setName] = useAtom(drawingNameAtom);
  const form = useForm<NameDrawingSchemaType>({
    resolver: zodResolver(nameDrawingSchema),
    defaultValues: { name: name || '' },
  });
  const formId = useId();

  const { errors } = form.formState;

  const handleSumbmit: SubmitHandler<NameDrawingSchemaType> = ({ name }) => {
    setName(name);
    handleContinue();
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
              {...form.register('name')}
            />
            {errors.name && <Form.Message>{errors.name.message}</Form.Message>}
          </Form.Field>
        </Form.Root>
      </div>

      <div className={classes.footer}>
        <Counter />
        <div className={classes.actions}>
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
          <Button type="submit" form={formId}>
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export { NamingStepDialog };
