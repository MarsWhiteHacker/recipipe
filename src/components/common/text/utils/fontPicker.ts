import { TextFontFamily } from '~types/types';
import globalStyles from '~global/constants.style';

export const fontPicker = (fontFamily: TextFontFamily) => {
  switch (fontFamily) {
    case 'main':
      return globalStyles.MAIN_FF;
    case 'second':
    default:
      return globalStyles.SECOND_FF;
  }
};
