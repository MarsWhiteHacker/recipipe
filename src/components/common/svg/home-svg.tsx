import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HomeSVG: React.VFC<Props> = (props) => (
  <Svg width="22" height="23" {...props}>
    <Path
      fill={props.fill ?? '#000'}
      d="M21.016 9.146 11.706.582a1.594 1.594 0 0 0-2.205.046L.939 9.189.5 9.63v12.62h8.25v-7.875h4.5v7.875h8.25V9.592l-.484-.446zm-10.39-7.485c.014 0 .006.003 0 .009-.006-.006-.012-.009 0-.009zM20 20.75h-5.25v-6.375a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v6.375H2v-10.5l8.627-8.561v-.002L20 10.25v10.5z"
    />
  </Svg>
);

type Props = {
  fill: string;
};
