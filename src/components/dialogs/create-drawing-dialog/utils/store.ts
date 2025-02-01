import { atom } from 'jotai';

import { steps } from './constants';

const drawingUrlAtom = atom<string | null>(null);
const drawingNameAtom = atom<string | null>(null);
const activeStepIndexAtom = atom<number>(0);
const isLoadingAtom = atom<boolean>(false);
const isOpenAtom = atom<boolean>(false);

const activeStepAtom = atom((get) => {
  const activeStepIndex = get(activeStepIndexAtom);
  return steps[activeStepIndex];
});

export {
  drawingUrlAtom,
  drawingNameAtom,
  activeStepIndexAtom,
  isLoadingAtom,
  activeStepAtom,
  isOpenAtom,
};
