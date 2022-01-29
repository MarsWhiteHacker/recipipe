import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';

export const ChefSVG: React.VFC = (props) => (
  <Svg width={44} height={44} fill="none" {...props}>
    <Path
      d="M44 22c0 12.15-9.85 22-22 22S0 34.15 0 22 9.85 0 22 0s22 9.85 22 22Z"
      fill="url(#a)"
    />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.025)" />
      </Pattern>
      <Image
        id="b"
        width={40}
        height={40}
        xlinkHref={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEo0lEQVRYCeXTfUzcZBgA8AuLRhNjTMyic9Bej48N0Gi2KAx1YeAY4LHNPyaoM9GAMRoNIftnRmeIcVwPIluc9A7QISN8jIxxDO6OqLiBS2YWxx9DjYk6Frj25sb4asugePeYp6zQg6uhrDVLvOTJ+/Z5+zzv7962Fsv/5UcevrqBpIN5hJPdubEi8PBd878frQiuJ2j2JEGzIYJm4XbMEU7Otb78+gP/OZR0cskkHThM0IEmeXQGhlQwBbgwOtiBOAf3CeEInCAd3KfWCm6zqeA4R6CMoNm/NUFLJxgJXcrPEzRXagqSrBjNJ2g2HA1HOjlI+iwIm6qDsLn6mjzaqjgtZDjWweUajiRotl/BxVdxkFF3A+zNk7DfI0CJdyZqvNEtwt62adj+1U1Iqg4uguNo7qwZQBGBae4b8Ga3GBWkBcV8cY8I6bVjClIwAchNInBv25RunALf0zqlACeMBzrYLgT+2yNVIFoj1mIPkmY7DQeSlewWW1VwVmvz1eapSm7WWhl4ynAgNsxws++vFqJ13/aaPw6YgsOmRVU9xVobrzZf5DxTbBqwkD79cYlXhPdOD0O19wJ87fVCl68RvvMx0O87Chd9Djlwjjlcw3uO+C5AqWcYsPZlR8ch04A5L736WnZOHpw7mgfgL9AVWIO12MM8YHZmYVZW1pqBWJuTnVloChDaLevGG1LOl+7PjACONOwAqfvFFaeJOVxTThpPsOz1TJg4vmkAyi0xhiOhOZmE1iSQTmXAXyft8sZiZz58kLsBLlalL0IUEOZwbcaTL69hzXzHs4A9oN1GGA8st8RAS9L30LktAjPSkAVSj9YJZkXcK9e2JvWZcoL4j/ExQ8+uA8op6R69OWXYw/DTUzeE3t0JumHKF/+NPVHdy7Q5+AvO60fuHjANtLwx+O3bwF8g6UBK0Gt/ZnkfU6/BZ38L/AWhVSBD0GsvMRWj1Rw8ae9Cz87IL1V533DsfgGgM/0drXrT81BnSYXadQBNsQCntgB4nlsInGMO1+osqaZDtDYYHzz+Srj+PgC3JWqEv7wfJn9i9mnVm5o/eE58+sq4JI5dbgKojVkJrI2BsaFm+HNcEg79IG01FaNuTtbwOyiG/zbexYcbL0swOh2C67/3gdSavIiUWlPkHK61/CJBvIsPUQzfSzHTz6t7GTq3Hpl4iGL4dorh4W3/DPRdnYeBkXkZiBAM9tqoHDgfmQ5BzaU5SHDzgDW3I2x18S0Jn9980FCczT2VSDH8b8pGJ4YWTg6Ry6P3igSuwTnIbRMV1IrRyvA/E8ykzRBk3DHxMYrhRxQcjgpQndM/F4apeuGRO0ZSzLR/+ebGAPGxC2fuCGh1CbuW4/BaDTx49hZU/jgb8a4lunk5h2vR6tU52xdC9pqRFMN3qZspcwWY1igsfiSFnUvvXJFHXMzjPUpdtNHK8B1rAqa0w70Uw9+K1lQBxrt4cA/OQduvEqTWL0EerxfkHK7hPdF6qHIzW2vhHt1Iyi08qWoSsYkC1FrXm7cdE57QDSQZMU9rI6OBVI2QoxsY65rZSDH8vmjxUf/chzWXZqujra0lh3vpBt4tBf8AkHiA2pdBS08AAAAASUVORK5CYII=',
        }}
      />
    </Defs>
  </Svg>
);
