import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SettingsSVG: React.VFC<Props> = (props) => (
  <Svg width={24} height={24} {...props}>
    <Path
      d="M12 6.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 17.25a3 3 0 1 0 0 5.999 3 3 0 0 0 0-5.999Zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
      fill={props.fill ?? '#000'}
    />
  </Svg>
);

type Props = {
  fill: string;
};
