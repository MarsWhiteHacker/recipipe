import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const LogoSVG: React.VFC<Props> = (props) => (
  <Svg width={31} height={30} {...props}>
    <Path
      fill={props.fill ?? '#000'}
      d="M7.402 21.74a8.1 8.1 0 01.584-16.123 8.101 8.101 0 0115.028 0 8.099 8.099 0 01.584 16.123v3.303H7.402V21.74zM23.602 26.614h-16.2v3.037h16.2v-3.037z"
    />
  </Svg>
);

type Props = {
  fill: string;
};
