import { RiExpandWidthLine } from '@remixicon/react';
import { useAtom } from 'jotai';
import {
  type ChangeEventHandler,
  type KeyboardEventHandler,
  useEffect,
  useState,
} from 'react';

import * as Input from '#src/components/core/input/input';
import { maxStrokeWidth, minStrokeWidth } from '#src/constants/canvas';
import { keyNames } from '#src/constants/key-names';
import { strokeWidthAtom } from '../../utils/store';

import classes from './stroke-width-input.module.scss';

const StrokeWidthInput = () => {
  const [strokeWidth, setStrokeWidth] = useAtom(strokeWidthAtom);
  const [value, setValue] = useState(strokeWidth);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.valueAsNumber);
  };
  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.key === keyNames.enter) {
      updateWidth();
    }
  };

  const updateWidth = () => {
    const newStrokeWidth = Math.max(
      minStrokeWidth,
      Math.min(value || 0, maxStrokeWidth),
    );

    console.log({ newStrokeWidth });

    setValue(newStrokeWidth);
    setStrokeWidth(newStrokeWidth);
  };

  useEffect(() => {
    setValue(strokeWidth);
  }, [strokeWidth]);

  return (
    <Input.Root className={classes.input}>
      <RiExpandWidthLine />
      <Input.Control
        type="number"
        className={classes.control}
        value={value}
        onChange={handleChange}
        onBlur={updateWidth}
        onKeyDown={handleKeyDown}
      />
    </Input.Root>
  );
};

export { StrokeWidthInput };
