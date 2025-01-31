import * as Dialog from '@radix-ui/react-dialog';
import { useSetAtom } from 'jotai';
import { useRef, useState } from 'react';
import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from 'react-sketch-canvas';

import * as Alert from '#src/components/core/alert/alert';
import { Button } from '#src/components/core/button/button';
import { pickerColors } from '#src/constants/colors';
import { drawingUrlAtom } from '../../utils/store';
import { ColorPicker } from '../color-picker/color-picker';

import { RiErrorWarningLine } from '@remixicon/react';
import { BackButton, ContinueButton, Counter } from '../common/common';
import classes from './drawing-step-dialog.module.scss';

const DrawingStepDialog = () => {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [color, setColor] = useState(pickerColors[0]);
  const setDrawingUrl = useSetAtom(drawingUrlAtom);

  const handleUndo = () => {
    canvasRef.current?.undo();
  };
  const handleRedo = () => {
    canvasRef.current?.redo();
  };

  const exportImage = async () => {
    const image = await canvasRef.current?.exportImage('png');

    if (!image) {
      throw new Error('Error during exporting image');
    }

    setDrawingUrl(image);
  };

  return (
    <>
      <header className={classes.header}>
        <Dialog.Title className={classes.title}>Create drawing</Dialog.Title>
        <Dialog.Description className={classes.description}>
          Your drawing will be displayed in guestbook
        </Dialog.Description>

        <Alert.Root className={classes.alert}>
          <RiErrorWarningLine className={classes.alertIcon} />
          <p>You can only create one drawing every 14 days.</p>
        </Alert.Root>
      </header>

      <div>
        <div className={classes.canvasWrapper}>
          <ReactSketchCanvas
            ref={canvasRef}
            className={classes.canvas}
            style={{ border: 'none' }}
            canvasColor="white"
            strokeColor={color}
            strokeWidth={24}
          />
        </div>
        <div className={classes.canvasFooter}>
          <ColorPicker color={color} onColorChange={setColor} />
          <div className={classes.actions}>
            <Button variant="ghost" onClick={handleUndo}>
              Undo
            </Button>
            <Button variant="ghost" onClick={handleRedo}>
              Redo
            </Button>
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <Counter />
        <div className={classes.actions}>
          <BackButton />
          <ContinueButton action={exportImage} />
        </div>
      </div>
    </>
  );
};

export { DrawingStepDialog };
