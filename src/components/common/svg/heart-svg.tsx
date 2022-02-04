import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HeartSVG: React.VFC<Props> = (props) => (
  <Svg width={24} height={20} {...props}>
    <Path
      d="M19.293.69a6 6 0 0 1 1.947 1.3l.324.325a6.007 6.007 0 0 1 0 8.485l-8.608 8.608-.904.954-.025-.025-.023.023-.966-1.011L2.49 10.8a6 6 0 0 1 0-8.485l.324-.324a6 6 0 0 1 8.485 0l.005.004.72.735.728-.736A6 6 0 0 1 19.292.69Z"
      fill={props.fill ?? '#000'}
    />
  </Svg>
);

type Props = {
  fill: string;
};
