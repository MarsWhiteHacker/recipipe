import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PlusSVG: React.VFC<Props> = (props) => (
  <Svg width={21} height={20} {...props}>
    <Path
      fill={props.fill ?? '#000'}
      d="M20.935 8.478h-9.348V0H9.413v8.478H.065v2.174h9.348V20h2.174v-9.348h9.348V8.478z"
    />
  </Svg>
);

type Props = {
  fill: string;
};
