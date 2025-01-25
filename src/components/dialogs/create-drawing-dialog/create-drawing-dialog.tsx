'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useAtomValue, useSetAtom } from 'jotai';
import type { ReactNode } from 'react';

import { activeStepAtom, activeStepIndexAtom } from './utils/store';

import classes from './create-drawing-dialog.module.scss';
import { useReset } from './utils/use-reset';

type Props = {
  children: ReactNode;
};

const CreateDrawingDialog = ({ children }: Props) => {
  const ActiveStep = useAtomValue(activeStepAtom);
  const reset = useReset();

  return (
    <Dialog.Root onOpenChange={reset}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
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
