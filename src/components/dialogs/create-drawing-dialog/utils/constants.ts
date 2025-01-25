import { DrawingStepDialog } from '../components/drawing-step-dialog/drawing-step-dialog';
import { NamingStepDialog } from '../components/naming-step-dialog/naming-step-dialog';
import { PreviewStepDialog } from '../components/preview-step-dialog/preview-step-dialog';

const steps = [DrawingStepDialog, NamingStepDialog, PreviewStepDialog];

const stepsCount = steps.length;

export { steps, stepsCount };
