import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

export const ClockSVG: React.VFC = (props) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#a)" fill="#FF8527">
      <Path d="M11.44 3.73h-1.25v6.958l4.515 2.146.537-1.129-3.803-1.807V3.73Z" />
      <Path d="M10.833.625a9.375 9.375 0 1 0 0 18.75 9.375 9.375 0 0 0 0-18.75Zm0 17.5a8.125 8.125 0 1 1 0-16.25 8.125 8.125 0 0 1 0 16.25Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.833)" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ClockSVG;
