import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const LikeSVG: React.VFC = (props) => (
  <Svg width={24} height={22} fill="none" {...props}>
    <Path
      d="M21.24 2.704a6 6 0 0 0-8.488.003l-.728.736-.72-.735-.005-.004a5.999 5.999 0 0 0-8.486 0l-.323.324a6 6 0 0 0 0 8.485l8.548 8.549.966 1.011.023-.023.025.025.904-.954 8.608-8.608a6.007 6.007 0 0 0 0-8.485l-.324-.324Zm-.737 7.748-8.476 8.477-8.477-8.477a4.5 4.5 0 0 1 0-6.364l.324-.324a4.5 4.5 0 0 1 6.362-.002L12.02 5.58l1.794-1.816a4.501 4.501 0 0 1 6.364 0l.324.324a4.505 4.505 0 0 1 0 6.364Z"
      fill="#FF8527"
    />
  </Svg>
);

export default LikeSVG;
