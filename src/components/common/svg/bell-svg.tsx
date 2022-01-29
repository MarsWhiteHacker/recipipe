import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BellSVG: React.VFC = (props) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m21.106 16.34-2.047-3.78V8.625A7.133 7.133 0 0 0 11.934 1.5 7.133 7.133 0 0 0 4.81 8.625v3.935l-2.047 3.78a1.125 1.125 0 0 0 .99 1.66h4.075a4.125 4.125 0 1 0 8.216 0h4.074a1.125 1.125 0 0 0 .99-1.66Zm-6.547 2.035A2.625 2.625 0 1 1 9.337 18h5.195c.018.124.027.25.027.375ZM4.381 16.5l1.928-3.56V8.625a5.625 5.625 0 0 1 11.25 0v4.315l1.929 3.56H4.38Z"
      fill="#000"
    />
  </Svg>
);
