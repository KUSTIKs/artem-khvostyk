import { useSetAtom } from 'jotai';

import { defaultStrokeWidth, pickerColors } from '#src/constants/canvas';
import {
  activeStepIndexAtom,
  colorAtom,
  drawingNameAtom,
  drawingUrlAtom,
  isEraserActiveAtom,
  isLoadingAtom,
  strokeWidthAtom,
} from './store';

const useReset = () => {
  const setDrawingUrl = useSetAtom(drawingUrlAtom);
  const setDrawingName = useSetAtom(drawingNameAtom);
  const setActiveStepIndex = useSetAtom(activeStepIndexAtom);
  const setIsLoading = useSetAtom(isLoadingAtom);

  const setStrokeWidthAtom = useSetAtom(strokeWidthAtom);
  const setIsEraserActiveAtom = useSetAtom(isEraserActiveAtom);
  const setColorAtom = useSetAtom(colorAtom);

  return () => {
    setDrawingUrl(null);
    setDrawingName(null);
    setActiveStepIndex(0);
    setIsLoading(false);
    setStrokeWidthAtom(defaultStrokeWidth);
    setIsEraserActiveAtom(false);
    setColorAtom(pickerColors[0]);
  };
};

export { useReset };
