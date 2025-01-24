import * as Radio from '@radix-ui/react-radio-group';
import { pickerColors } from '#src/constants/colors';
import classes from './color-picker.module.scss';

const ColorPicker = () => {
  return (
    <Radio.Root className={classes.wrapper} defaultValue={pickerColors[0]}>
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
