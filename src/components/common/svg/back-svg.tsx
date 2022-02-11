import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BackSVG: React.VFC = (props) => (
  <Svg width={9} height={16} fill="none" {...props}>
    <Path
      d="m7.24 15.8 1.062-1.06L2.522 8l5.78-6.14L7.24.8.4 8l6.84 7.8Z"
      fill="#000"
    />
  </Svg>
);

export default BackSVG;
