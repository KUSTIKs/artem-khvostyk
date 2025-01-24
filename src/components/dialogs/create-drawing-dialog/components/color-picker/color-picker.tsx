import * as Radio from '@radix-ui/react-radio-group';

import { pickerColors } from '#src/constants/colors';

import classes from './color-picker.module.scss';

type Props = {
  onColorChange: (color: string) => void;
  color: string;
};

const ColorPicker = ({ onColorChange, color }: Props) => {
  return (
    <Radio.Root
      className={classes.wrapper}
      value={color}
      onValueChange={onColorChange}
    >
      {pickerColors.map((color) => (
        <Radio.Item
          key={color}
          className={classes.color}
          value={color}
          style={{ backgroundColor: color }}
        >
          <Radio.Indicator className={classes.indicator} />
        </Radio.Item>
      ))}
    </Radio.Root>
  );
};

export { ColorPicker };
