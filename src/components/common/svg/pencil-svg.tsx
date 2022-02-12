import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PencilSVG: React.VFC<Props> = (props) => (
  <Svg width={24} height={24} {...props}>
    <Path
      d="m1.39 23.105.005.005a1.166 1.166 0 0 0 1.205.28l6.656-2.257L22.03 8.359a4.164 4.164 0 0 0-5.89-5.888L3.368 15.244 1.11 21.9a1.165 1.165 0 0 0 .281 1.206ZM17.201 3.531A2.664 2.664 0 0 1 20.97 7.3l-1.68 1.68-3.767-3.768 1.68-1.68ZM4.675 16.057l9.786-9.785 3.767 3.767-9.785 9.786-5.702 1.934 1.935-5.702Z"
      fill={props.fill ?? '#000'}
    />
  </Svg>
);

type Props = {
  fill?: string;
};
