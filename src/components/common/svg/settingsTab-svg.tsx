import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SettingsTabSVG: React.VFC<Props> = (props) => (
  <Svg width={24} height={24} {...props}>
    <Path
      d="M5.167 7.345V1.25h-1.5v6.095a3 3 0 0 0 0 5.81V23.75h1.5V13.155a3.001 3.001 0 0 0 0-5.81Zm-.75 4.405a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM13.417 14.095V1.25h-1.5v12.845a3.001 3.001 0 0 0 0 5.81v3.845h1.5v-3.845a3.001 3.001 0 0 0 0-5.81Zm-.75 4.405a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM21.667 4.345V1.25h-1.5v3.095a3 3 0 0 0 0 5.81V23.75h1.5V10.155a3 3 0 0 0 0-5.81Zm-.75 4.405a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
      fill={props.fill ?? '#000'}
    />
  </Svg>
);

type Props = {
  fill?: string;
};
