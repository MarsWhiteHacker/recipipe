import { HeaderSize } from '~types/types';
import globalStyles from '~global/constants.style';

export const fontConfigPicker = (size: HeaderSize) => {
  switch (size) {
    case 'big':
      return {
        fs: globalStyles.HEADER_FS_BIG,
        lh: globalStyles.HEADER_LH_BIG,
      };
    case 'medium':
      return {
        fs: globalStyles.HEADER_FS_MEDIUM,
        lh: globalStyles.HEADER_LH_MEDIUM,
      };
    case 'small':
    default:
      return {
        fs: globalStyles.HEADER_FS_SMALL,
        lh: globalStyles.HEADER_LH_SMALL,
      };
  }
};
