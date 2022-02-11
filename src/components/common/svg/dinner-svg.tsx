import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const DinnerSVG: React.VFC = (props) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="M18.625 13.44c0-4.27-3.31-7.781-7.5-8.101V3.125h-1.25v2.214c-4.19.32-7.5 3.831-7.5 8.101v1.293h16.25V13.44Zm-1.25.043H3.625v-.043A6.883 6.883 0 0 1 10.5 6.565a6.883 6.883 0 0 1 6.875 6.875v.043ZM1.125 16.25h18.75v1.25H1.125v-1.25Z"
      fill="#FF8527"
    />
  </Svg>
);

export default DinnerSVG;
