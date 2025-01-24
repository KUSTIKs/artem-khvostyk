import * as Dialog from '@radix-ui/react-dialog';

import { Button } from '#src/components/core/button/button';

import { DrawingStepContent } from './components/drawing-step-content/drawing-step-content';
import classes from './create-drawing-dialog.module.scss';

const CreateDrawingDialog = () => {
  return (
    <Dialog.Root open>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.overlay} />
        <Dialog.Content className={classes.dialog}>
          <header className={classes.header}>
            <Dialog.Title className={classes.title}>
              Create drawing
            </Dialog.Title>
            <Dialog.Description className={classes.description}>
              Your drawing will be displayed in guestbook
            </Dialog.Description>
          </header>
          <DrawingStepContent />
          <footer className={classes.footer}>
            <p className={classes.steps}>1 of 3</p>
            <div className={classes.actions}>
              <Button variant="outlined">Back</Button>
              <Button>Continue</Button>
            </div>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { CreateDrawingDialog };
