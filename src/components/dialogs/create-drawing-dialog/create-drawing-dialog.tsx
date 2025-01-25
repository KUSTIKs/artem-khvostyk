'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useAtomValue } from 'jotai';
import type { ReactNode } from 'react';

import { activeStepAtom } from './utils/store';

import classes from './create-drawing-dialog.module.scss';

type Props = {
  children: ReactNode;
};

const CreateDrawingDialog = ({ children }: Props) => {
  const ActiveStep = useAtomValue(activeStepAtom);

  return (
    <Dialog.Root open>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <div className={classes.overlay} />
        <Dialog.Overlay className={classes.dialogWrapper}>
          <Dialog.Content className={classes.dialog}>
            <ActiveStep />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { CreateDrawingDialog };
