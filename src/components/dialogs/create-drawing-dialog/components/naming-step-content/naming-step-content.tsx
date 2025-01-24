'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import * as Form from '#src/components/core/form/form';
import {
  type NameDrawingSchemaType,
  nameDrawingSchema,
} from '../../utils/name-drawing-schema';

import classes from './naming-step-content.module.scss';

const NamingStepContent = () => {
  const form = useForm<NameDrawingSchemaType>({
    resolver: zodResolver(nameDrawingSchema),
  });

  const { errors } = form.formState;

  const handleSumbmit: SubmitHandler<NameDrawingSchemaType> = () => {};

  return (
    <main>
      <img src="" alt="Your drawing" className={classes.drawing} />
      <Form.Root onSubmit={form.handleSubmit(handleSumbmit)}>
        <Form.Field name="name" className={classes.field}>
          <Form.Label>Drawing name:</Form.Label>
          <Form.Control
            placeholder="My masterpiece"
            {...form.register('name')}
          />
          {errors.name && <Form.Message>{errors.name.message}</Form.Message>}
        </Form.Field>
      </Form.Root>
    </main>
  );
};

export { NamingStepContent };
