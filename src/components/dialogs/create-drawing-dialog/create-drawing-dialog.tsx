'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useAtom, useAtomValue } from 'jotai';
import type { ReactNode } from 'react';

import { activeStepAtom, isOpenAtom } from './utils/store';

import classes from './create-drawing-dialog.module.scss';
import { useReset } from './utils/use-reset';

type Props = {
  children: ReactNode;
};

const CreateDrawingDialog = ({ children }: Props) => {
  const ActiveStep = useAtomValue(activeStepAtom);
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const reset = useReset();

  const handleOpenChange = (value: boolean) => {
    setIsOpen(value);
    reset();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
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
