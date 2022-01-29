import { TitleSize } from '~types/types';
import globalStyles from '~global/constants.style';

export const fontConfigPicker = (size: TitleSize) => {
  switch (size) {
    case 'big':
      return {
        fs: globalStyles.TITLE_FS_BIG,
        lh: globalStyles.TITLE_LH_BIG,
      };
    case 'medium':
      return {
        fs: globalStyles.TITLE_FS_MEDIUM,
        lh: globalStyles.TITLE_LH_MEDIUM,
      };
    case 'small':
    default:
      return {
        fs: globalStyles.TITLE_FS_SMALL,
        lh: globalStyles.TITLE_LH_SMALL,
      };
  }
};
