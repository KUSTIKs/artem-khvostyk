'use client';

import { useRef, useState } from 'react';
import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from 'react-sketch-canvas';

import { Button } from '#src/components/core/button/button';
import { pickerColors } from '#src/constants/colors';
import { ColorPicker } from '../color-picker/color-picker';

import { RiBrushLine } from '@remixicon/react';
import classes from './drawing-step-content.module.scss';

const DrawingStepContent = () => {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [color, setColor] = useState(pickerColors[0]);

  const handleUndo = () => {
    canvasRef.current?.undo();
  };
  const handleRedo = () => {
    canvasRef.current?.redo();
  };

  return (
    <main>
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
      <div className={classes.footer}>
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
    </main>
  );
};

export { DrawingStepContent };
