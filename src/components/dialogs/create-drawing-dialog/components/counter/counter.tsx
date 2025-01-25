import { useAtomValue } from 'jotai';

import { stepsCount } from '../../utils/constants';
import { activeStepIndexAtom } from '../../utils/store';

import classes from './counter.module.scss';

const Counter = () => {
  const activeStepIndex = useAtomValue(activeStepIndexAtom);

  return (
    <p className={classes.counter}>
      {activeStepIndex + 1} of {stepsCount}
    </p>
  );
};

export { Counter };
