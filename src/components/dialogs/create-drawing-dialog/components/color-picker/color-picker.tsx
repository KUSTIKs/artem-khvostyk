import * as Popover from '@radix-ui/react-popover';
import * as Radio from '@radix-ui/react-radio-group';
import { useAtom } from 'jotai';
import {
  type ChangeEventHandler,
  type KeyboardEventHandler,
  useEffect,
  useState,
} from 'react';

import * as Input from '#src/components/core/input/input';
import { pickerColors } from '#src/constants/canvas';
import { colorAtom } from '../../utils/store';

import classes from './color-picker.module.scss';

const ColorPicker = () => {
  const [color, setColor] = useAtom(colorAtom);
  const [value, setValue] = useState<string>(color);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };
  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      updateColor();
    }
  };

  const updateColor = () => {
    const isValidFormat = value.startsWith('#') && value.length === 7;
    const colorValue = Number(`0x${value.slice(1)}`);

    const isValidColor = isValidFormat && !Number.isNaN(colorValue);

    if (!isValidColor) {
      setValue(color);
      return;
    }

    setColor(value);
  };

  useEffect(() => {
    setValue(color);
  }, [color]);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className={classes.swatch} style={{ backgroundColor: color }} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="top" sideOffset={10} align="start" asChild>
          <Radio.Root
            className={classes.content}
            value={color}
            onValueChange={setColor}
          >
            {pickerColors.map((color) => (
              <Radio.Item
                key={color}
                value={color}
                className={classes.swatch}
                style={{ backgroundColor: color }}
              >
                <Radio.Indicator className={classes.indicator} />
              </Radio.Item>
            ))}

            <Input.Control
              value={value}
              onChange={handleChange}
              onBlur={updateColor}
              onKeyDown={handleKeyDown}
              className={classes.control}
              autoFocus={false}
            />

            <Popover.Arrow className={classes.arrow} />
          </Radio.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export { ColorPicker };
