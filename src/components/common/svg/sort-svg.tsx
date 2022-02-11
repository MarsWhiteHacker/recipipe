import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SortSVG: React.VFC<Props> = (props) => (
  <Svg width={24} height={24} {...props}>
    <Path
      d="m3.53 6.608 2.432-2.431V23.75h1.5V4.177l2.432 2.431 1.061-1.06-4.243-4.243L2.47 5.548l1.06 1.06ZM20.625 13.625H14.25v1.5h4.736l-5.111 4.722v2.028h6.75v-1.5h-5.111l5.111-4.722v-2.028ZM18.54 2.75h-2.206L13.584 11h1.581l.876-2.625h2.793L19.71 11h1.582l-2.75-8.25Zm-2 4.125.876-2.625h.043l.875 2.625h-1.793Z"
      fill={props.fill ?? '#000'}
    />
  </Svg>
);

type Props = {
  fill: string;
};
