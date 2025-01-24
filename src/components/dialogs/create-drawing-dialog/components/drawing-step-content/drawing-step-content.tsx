'use client';

import { ReactSketchCanvas } from 'react-sketch-canvas';

import { Button } from '#src/components/core/button/button';
import { ColorPicker } from '../color-picker/color-picker';

import classes from './drawing-step-content.module.scss';

const DrawingStepContent = () => {
  return (
    <main>
      <div className={classes.canvasWrapper}>
        <ReactSketchCanvas
          className={classes.canvas}
          style={{ border: 'none' }}
          canvasColor="white"
          strokeColor="#a855f7"
          strokeWidth={24}
        />
      </div>
      <div className={classes.footer}>
        <ColorPicker />
        <div className={classes.actions}>
          <Button variant="ghost">Undo</Button>
          <Button variant="ghost">Redo</Button>
        </div>
      </div>
    </main>
  );
};

export { DrawingStepContent };
