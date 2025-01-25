'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useAtom } from 'jotai';
import type { ReactNode } from 'react';

import { DrawingStepDialog } from './components/drawing-step-dialog/drawing-step-dialog';
import { NamingStepDialog } from './components/naming-step-dialog/naming-step-dialog';
import { PreviewStepDialog } from './components/preview-step-dialog/preview-step-dialog';
import { activeStepIndexAtom } from './utils/store';

import classes from './create-drawing-dialog.module.scss';

const steps = [DrawingStepDialog, NamingStepDialog, PreviewStepDialog];

type Props = {
  children: ReactNode;
};

const CreateDrawingDialog = () => {
  const [activeStepIndex, setActiveStepIndex] = useAtom(activeStepIndexAtom);

  const handleContinue = () => {
    setActiveStepIndex((value) => value + 1);
  };
  const handleBack = () => {
    setActiveStepIndex((value) => value - 1);
  };

  return (
    <Dialog.Root open>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.overlay} />
        <Dialog.Content className={classes.dialogWrapper}>
          <div className={classes.dialog}>
            {activeStepIndex === 0 && (
              <DrawingStepDialog handleContinue={handleContinue} />
            )}
            {activeStepIndex === 1 && (
              <NamingStepDialog
                handleContinue={handleContinue}
                handleBack={handleBack}
              />
            )}
            {activeStepIndex === 2 && (
              <PreviewStepDialog handleBack={handleBack} />
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { CreateDrawingDialog };
