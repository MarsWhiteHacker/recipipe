import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ShareSVG: React.VFC<Props> = (props) => (
  <Svg width={24} height={24} {...props}>
    <Path
      d="M19.27 16.625a3.558 3.558 0 0 0-2.821 1.392l-7.684-4.36a3.548 3.548 0 0 0 0-2.313l7.684-4.361a3.56 3.56 0 1 0-.646-1.358L7.988 10.06a3.563 3.563 0 1 0 0 4.88l7.815 4.435a3.562 3.562 0 1 0 3.468-2.75Zm0-13.875a2.062 2.062 0 1 1 0 4.125 2.062 2.062 0 0 1 0-4.125ZM5.397 14.563a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126ZM19.27 22.25a2.063 2.063 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125Z"
      fill={props.fill ?? '#000'}
    />
  </Svg>
);

type Props = {
  fill?: string;
};
