import * as Dialog from '@radix-ui/react-dialog';
import { RiErrorWarningLine } from '@remixicon/react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from 'react-sketch-canvas';

import * as Alert from '#src/components/core/alert/alert';
import { Button } from '#src/components/core/button/button';
import {
  colorAtom,
  drawingUrlAtom,
  isEraserActiveAtom,
  strokeWidthAtom,
} from '../../utils/store';
import { ColorPicker } from '../color-picker/color-picker';
import { BackButton, ContinueButton, Counter } from '../common/common';
import { EraserToggle } from '../eraser-toggle/eraser-toggle';
import { StrokeWidthInput } from '../stroke-width-input/stroke-width-input';

import classes from './drawing-step-dialog.module.scss';

const DrawingStepDialog = () => {
  const [isEraserActive, setIsEraserActive] = useAtom(isEraserActiveAtom);
  const setDrawingUrl = useSetAtom(drawingUrlAtom);
  const strokeWidth = useAtomValue(strokeWidthAtom);
  const color = useAtomValue(colorAtom);

  const canvasRef = useRef<ReactSketchCanvasRef>(null);

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

  useEffect(() => {
    canvasRef.current?.eraseMode(isEraserActive);
  }, [isEraserActive]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: reset eraser when color is set
  useEffect(() => {
    setIsEraserActive(false);
  }, [color, setIsEraserActive]);

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
            strokeWidth={strokeWidth}
            eraserWidth={strokeWidth}
          />
        </div>

        <div className={classes.tools}>
          <div className={classes.toolsGroup}>
            <ColorPicker />
            <StrokeWidthInput />
            <EraserToggle />
          </div>

          <div className={classes.toolsGroup}>
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
