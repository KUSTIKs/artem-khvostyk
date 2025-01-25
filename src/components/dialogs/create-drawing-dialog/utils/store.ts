import { atom } from 'jotai';

const drawingUrlAtom = atom<string | null>(null);
const drawingNameAtom = atom<string | null>(null);
const activeStepIndexAtom = atom<number>(0);

export { drawingUrlAtom, drawingNameAtom, activeStepIndexAtom };
