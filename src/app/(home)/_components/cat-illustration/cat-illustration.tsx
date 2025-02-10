'use client';

import { useRive } from '@rive-app/react-canvas-lite';

import classes from './cat-illustration.module.scss';

const CatIllustration = () => {
  const { RiveComponent } = useRive({
    src: 'cute-cat.riv',
    stateMachines: 'Main',
    autoplay: true,
  });

  return (
    <div className={classes.wrapper}>
      <RiveComponent />
    </div>
  );
};

export { CatIllustration };
