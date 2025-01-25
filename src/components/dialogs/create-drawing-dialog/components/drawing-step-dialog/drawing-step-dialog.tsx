'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { RiLoader2Line } from '@remixicon/react';
import { useSetAtom } from 'jotai';
import { useRef, useState } from 'react';
import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from 'react-sketch-canvas';

import { Button } from '#src/components/core/button/button';
import { pickerColors } from '#src/constants/colors';
import { drawingUrlAtom } from '../../utils/store';
import { ColorPicker } from '../color-picker/color-picker';
import { Counter } from '../counter/counter';

import classes from './drawing-step-dialog.module.scss';

type Props = {
  handleContinue: () => void;
};

const DrawingStepDialog = ({ handleContinue }: Props) => {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [color, setColor] = useState(pickerColors[0]);
  const setDrawingUrl = useSetAtom(drawingUrlAtom);
  const [isLoading, setIsLoading] = useState(false);

  const handleUndo = () => {
    canvasRef.current?.undo();
  };
  const handleRedo = () => {
    canvasRef.current?.redo();
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const image = await canvasRef.current?.exportImage('png');

    if (!image) {
      throw new Error('Error during exporting image');
    }

    setDrawingUrl(image);
    setIsLoading(false);

    handleContinue();
  };

  return (
    <>
      <header className={classes.header}>
        <Dialog.Title className={classes.title}>Create drawing</Dialog.Title>
        <Dialog.Description className={classes.description}>
          Your drawing will be displayed in guestbook
        </Dialog.Description>
      </header>

      <div className={classes.content} data-loading={isLoading}>
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
          <Button variant="outlined" disabled>
            Back
          </Button>
          <Button disabled={isLoading} onClick={handleSubmit}>
            {isLoading && <RiLoader2Line className="spin" />}
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export { DrawingStepDialog };
