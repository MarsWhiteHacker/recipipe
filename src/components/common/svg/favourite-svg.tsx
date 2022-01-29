import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const FavouriteSVG: React.VFC<Props> = (props) => (
  <Svg width="20" height="18" {...props}>
    <Path
      fill={props.fill ?? '#000'}
      d="M17.7 2.086a5 5 0 0 0-7.074.003l-.605.613-.601-.612-.004-.004a5 5 0 0 0-7.071 0l-.27.27a5 5 0 0 0 0 7.071l7.124 7.124.804.843.02-.019.02.02.754-.794 7.173-7.174a5.006 5.006 0 0 0 0-7.07l-.27-.27Zm-.614 6.457-7.064 7.064L2.96 8.543a3.75 3.75 0 0 1 0-5.303l.27-.27a3.75 3.75 0 0 1 5.3-.002l1.489 1.515 1.495-1.513a3.75 3.75 0 0 1 5.303 0l.27.27a3.754 3.754 0 0 1 0 5.303Z"
    />
  </Svg>
);

type Props = {
  fill: string;
};
