import * as Dialog from '@radix-ui/react-dialog';
import { useMutation } from '@tanstack/react-query';
import { useAtomValue, useSetAtom } from 'jotai';

import { DrawingCardPreview } from '#src/components/common/drawing-card-placeholder/drawing-card-placeholder';
import { DrawingCard } from '#src/components/common/drawing-card/drawing-card';
import { useUser } from '#src/hooks/auth';
import { uploadDrawing } from '#src/services/drawings';
import { base64ToBlob } from '#src/utils/base64-to-image';
import { drawingNameAtom, drawingUrlAtom, isOpenAtom } from '../../utils/store';
import { BackButton, Counter, SubmitButton } from '../common/common';

import classes from './preview-step-dialog.module.scss';

const PreviewStepDialog = () => {
  const drawingUrl = useAtomValue(drawingUrlAtom);
  const drawingName = useAtomValue(drawingNameAtom);
  const { publicUser } = useUser();
  const uploadMutation = useMutation({ mutationFn: uploadDrawing });
  const setIsOpen = useSetAtom(isOpenAtom);

  if (!publicUser?.github_username) {
    throw new Error('publicUser?.github_username must be string at this stage');
  }

  if (drawingUrl === null || drawingName == null) {
    throw new Error(
      'Drawing Url and Drawing Name must be non null at this step',
    );
  }

  const handleSubmit = async () => {
    const drawingBlob = await base64ToBlob(drawingUrl);
    await uploadMutation.mutateAsync({
      name: drawingName,
      drawing: drawingBlob,
    });
    setIsOpen(false);
  };

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
            author={publicUser.github_username}
            date={new Date()}
          />
          <DrawingCardPreview />
        </div>
      </div>

      <div className={classes.footer}>
        <Counter />
        <div className={classes.actions}>
          <BackButton />
          <SubmitButton action={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export { PreviewStepDialog };
