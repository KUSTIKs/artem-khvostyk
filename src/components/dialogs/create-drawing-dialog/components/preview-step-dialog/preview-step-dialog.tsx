import * as Dialog from '@radix-ui/react-dialog';
import { useAtomValue } from 'jotai';

import { DrawingCardPreview } from '#src/components/common/drawing-card-placeholder/drawing-card-placeholder';
import { DrawingCard } from '#src/components/common/drawing-card/drawing-card';
import { Button } from '#src/components/core/button/button';
import { drawingNameAtom, drawingUrlAtom } from '../../utils/store';

import { Counter } from '../counter/counter';
import classes from './preview-step-dialog.module.scss';

type Props = {
  handleBack: () => void;
};

const PreviewStepDialog = ({ handleBack }: Props) => {
  const drawingUrl = useAtomValue(drawingUrlAtom);
  const drawingName = useAtomValue(drawingNameAtom);

  const handleSubmit = () => {};

  if (drawingUrl === null || drawingName == null) {
    throw new Error(
      'Drawing Url and Drawing Name must be non null at this step',
    );
  }

  return (
    <>
      <header className={classes.header}>
        <Dialog.Title className={classes.title}>Preview</Dialog.Title>
        <Dialog.Description className={classes.description}>
          Your drawing will look like this in the guestbook
        </Dialog.Description>
      </header>

      <div className={classes.frame}>
        <div className={classes.drawings}>
          <DrawingCardPreview />
          <DrawingCard
            drawingSrc={drawingUrl}
            title={drawingName}
            author="KUSTIKs"
            date={new Date()}
          />
          <DrawingCardPreview />
        </div>
      </div>

      <div className={classes.footer}>
        <Counter />
        <div className={classes.actions}>
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
          <Button onClick={handleSubmit}>Publish</Button>
        </div>
      </div>
    </>
  );
};

export { PreviewStepDialog };
