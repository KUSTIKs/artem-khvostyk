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
import { keyNames } from '#src/constants/key-names';
import { validateHexColor } from '#src/utils/helpers';
import { colorAtom } from '../../utils/store';

import classes from './color-picker.module.scss';

const ColorPicker = () => {
  const [color, setColor] = useAtom(colorAtom);
  const [value, setValue] = useState<string>(color);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };
  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.key === keyNames.enter) {
      updateColor();
    }
  };

  const updateColor = () => {
    const isValidColor = validateHexColor(value);

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
      <Popover.Trigger
        className={classes.swatch}
        aria-label="current color"
        style={{ backgroundColor: color }}
      />
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
