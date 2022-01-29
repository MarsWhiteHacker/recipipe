import { TextColor } from '~types/types';
import globalStyles from '~global/constants.style';

export const colorPicker = (color: TextColor) => {
  switch (color) {
    case 'main':
      return globalStyles.MAIN_TEXT_COLOR;
    case 'second':
      return globalStyles.SECOND_TEXT_COLOR;
    case 'third':
      return globalStyles.THIRD_TEXT_COLOR;
    case 'fourth':
      return globalStyles.FOURTH_TEXT_COLOR;
    default:
      return globalStyles.DEFAULT_LIGHT_COLOR;
  }
};
