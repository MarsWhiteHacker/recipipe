import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const LogoSmallSVG: React.VFC<Props> = (props) => (
  <Svg width={17} height={17} {...props}>
    <Path
      d="M4.075 11.904a4.273 4.273 0 0 1 .308-8.506 4.274 4.274 0 0 1 7.928 0 4.272 4.272 0 0 1 .308 8.506v1.742H4.075v-1.742ZM12.621 14.475H4.075v1.602h8.546v-1.602Z"
      fill={props.fill ?? '#000'}
    />
  </Svg>
);

type Props = {
  fill: string;
};
