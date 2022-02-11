import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

export const ScaleSVG: React.VFC = (props) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#a)" fill="#FF8527">
      <Path d="m8.106 15.094.185-.204v-1.007L5.25 7.46H3.833L.792 13.883v1.056l.165.18A4.857 4.857 0 0 0 4.52 16.68h.017a4.858 4.858 0 0 0 3.569-1.586ZM7.042 14.4a3.552 3.552 0 0 1-2.51 1.032H4.52a3.551 3.551 0 0 1-2.478-.99v-.277l2.5-5.278 2.5 5.278v.235ZM16.5 7.46h-1.416l-3.043 6.423v1.056l.166.18a4.858 4.858 0 0 0 3.563 1.561h.017a4.858 4.858 0 0 0 3.569-1.586l.185-.204v-1.007L16.5 7.46ZM18.29 14.4a3.552 3.552 0 0 1-2.508 1.032h-.013a3.55 3.55 0 0 1-2.479-.99v-.277l2.5-5.278 2.5 5.278v.235Z" />
      <Path d="M10.791 7.682a2.197 2.197 0 0 0 1.472-1.471h4.153v-1.25h-4.153a2.188 2.188 0 0 0-4.193 0H3.916v1.25H8.07a2.196 2.196 0 0 0 1.471 1.471v10.404H5.48v1.25h9.375v-1.25h-4.063V7.682ZM9.23 5.586a.938.938 0 1 1 1.875 0 .938.938 0 0 1-1.875 0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.167)" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ScaleSVG;
