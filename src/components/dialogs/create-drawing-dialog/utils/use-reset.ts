import { useSetAtom } from 'jotai';
import {
  activeStepIndexAtom,
  drawingNameAtom,
  drawingUrlAtom,
  isLoadingAtom,
} from './store';

const useReset = () => {
  const setDrawingUrl = useSetAtom(drawingUrlAtom);
  const setDrawingName = useSetAtom(drawingNameAtom);
  const setActiveStepIndex = useSetAtom(activeStepIndexAtom);
  const setIsLoading = useSetAtom(isLoadingAtom);

  return () => {
    setDrawingUrl(null);
    setDrawingName(null);
    setActiveStepIndex(0);
    setIsLoading(false);
  };
};

export { useReset };
