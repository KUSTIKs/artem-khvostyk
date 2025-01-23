'use client';

import {
  RiArrowDropRightLine,
  RiBrain2Fill,
  RiBrushFill,
  RiCodeBoxFill,
  RiRefreshFill,
  RiRocketFill,
} from '@remixicon/react';
import { clsx } from 'clsx';

import classes from './hero-illustration.module.scss';

type Props = {
  className: string;
};

const HeroIllustration = ({ className }: Props) => {
  return (
    <div className={clsx(classes.wrapper, className)}>
      <RiBrain2Fill
        aria-label="think"
        className={clsx(classes.icon, classes.icon_think)}
      />
      <RiArrowDropRightLine aria-hidden className={classes.arrow} />
      <RiBrushFill
        aria-label="design"
        className={clsx(classes.icon, classes.icon_design)}
      />
      <RiArrowDropRightLine aria-hidden className={classes.arrow} />
      <RiCodeBoxFill
        aria-label="build"
        className={clsx(classes.icon, classes.icon_build)}
      />
      <RiArrowDropRightLine aria-hidden className={classes.arrow} />
      <RiRocketFill
        aria-label="launch"
        className={clsx(classes.icon, classes.icon_launch)}
      />
      <RiArrowDropRightLine aria-hidden className={classes.arrow} />
      <RiRefreshFill
        aria-label="repeat"
        className={clsx(classes.icon, classes.icon_repeat)}
      />
      <div aria-hidden className={classes.clipContainer}>
        <RiBrain2Fill className={clsx(classes.icon, classes.icon_think)} />
        <RiArrowDropRightLine className={classes.arrow} />
        <RiBrushFill className={clsx(classes.icon, classes.icon_design)} />
        <RiArrowDropRightLine className={classes.arrow} />
        <RiCodeBoxFill className={clsx(classes.icon, classes.icon_build)} />
        <RiArrowDropRightLine className={classes.arrow} />
        <RiRocketFill className={clsx(classes.icon, classes.icon_launch)} />
        <RiArrowDropRightLine className={classes.arrow} />
        <RiRefreshFill className={clsx(classes.icon, classes.icon_repeat)} />
      </div>
    </div>
  );
};

export { HeroIllustration };
