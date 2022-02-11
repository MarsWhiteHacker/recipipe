import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SmallPlusSVG: React.VFC = (props) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M15.188 7.375H8.625V.812h-1.25v6.563H.812v1.25h6.563v6.563h1.25V8.625h6.563v-1.25Z"
      fill="#000"
    />
  </Svg>
);

export default SmallPlusSVG;
