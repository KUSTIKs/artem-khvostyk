import { RiLoader2Line } from '@remixicon/react';
import { useAtom, useAtomValue } from 'jotai';
import type { ComponentProps } from 'react';

import { Button } from '#src/components/core/button/button';
import { stepsCount } from '../../utils/constants';
import { activeStepIndexAtom, isLoadingAtom } from '../../utils/store';

import classes from './common.module.scss';

const Counter = () => {
  const activeStepIndex = useAtomValue(activeStepIndexAtom);

  return (
    <p className={classes.counter}>
      {activeStepIndex + 1} of {stepsCount}
    </p>
  );
};

type ButtonProps = ComponentProps<typeof Button>;

const ContinueButton = ({
  action,
  ...props
}: ButtonProps & {
  action?: () => Promise<void> | void;
}) => {
  const [activeStepIndex, setActiveStepIndex] = useAtom(activeStepIndexAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  const handleClick = async () => {
    if (action) {
      setIsLoading(true);
      await action();
      setIsLoading(false);
    }

    setActiveStepIndex((value) => value + 1);
  };

  const isLast = activeStepIndex === stepsCount - 1;

  const allProps: ButtonProps = {
    ...props,
    ...{
      variant: 'primary',
      disabled: isLast || isLoading || props.disabled,
    },
    ...(props.type !== 'submit' && {
      onClick: handleClick,
    }),
  };

  return (
    <Button {...allProps}>
      {isLoading && <RiLoader2Line className="spin" />}
      Continue
    </Button>
  );
};

const BackButton = ({ ...props }: ButtonProps) => {
  const [activeStepIndex, setActiveStepIndex] = useAtom(activeStepIndexAtom);
  const isLoading = useAtomValue(isLoadingAtom);

  const handleClick = async () => {
    setActiveStepIndex((value) => value - 1);
  };

  const isFirst = activeStepIndex === 0;

  return (
    <Button
      variant="outlined"
      disabled={isFirst || isLoading || props.disabled}
      type="button"
      onClick={handleClick}
      {...props}
    >
      Back
    </Button>
  );
};

const SubmitButton = ({
  action,
  ...props
}: ButtonProps & {
  action: () => Promise<void> | void;
}) => {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  const handleClick = async () => {
    if (action) {
      setIsLoading(true);
      await action();
      setIsLoading(false);
    }
  };

  return (
    <Button
      {...props}
      variant="primary"
      onClick={handleClick}
      disabled={props.disabled || isLoading}
    >
      {isLoading && <RiLoader2Line className="spin" />}
      Create
    </Button>
  );
};

export { Counter, ContinueButton, BackButton, SubmitButton };
