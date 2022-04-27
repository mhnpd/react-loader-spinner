import React, { FunctionComponent, ReactElement } from 'react'
import { BaseProps, Style } from '../type'

interface MorphShapesProps extends BaseProps { }
const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none'
})

const MorphShapes: FunctionComponent<MorphShapesProps> = ({
  height = '100',
  width = '100',
  color = 'blue',
  ariaLabel = 'blossom-loading',
  wrapperStyle = {},
  wrapperClass,
  visible = true
}): ReactElement => (
  <div style={{ ...getDefaultStyle(visible), ...wrapperStyle }} className={wrapperClass} data-testid="morphShapes-loading">
    <svg
      viewBox="0 0 100 100"
      width={width}
      height={height}
      color={color}
      aria-label={ariaLabel}
      fill={color}
      data-testid="morphShapes-svg"
    >
      <path fill="inherit">
        <animate
          attributeName="d"
          dur="1440ms"
          repeatCount="indefinite"
          keyTimes="0;
                       .0625;
                       .208333333;
                       .3125;
                       .395833333;
                       .645833333;
                       .833333333;
                       1"
          calcMode="spline"
          keySplines="0,0,1,1;
                         .42,0,.58,1;
                         .42,0,1,1;
                         0,0,.58,1;
                         .42,0,.58,1;
                         .42,0,.58,1;
                         .42,0,.58,1"
          values="M 0,0
                     C 50,0 50,0 100,0
                     100,50 100,50 100,100
                     50,100 50,100 0,100
                     0,50 0,50 0,0
                     Z;

                     M 0,0
                     C 50,0 50,0 100,0
                     100,50 100,50 100,100
                     50,100 50,100 0,100
                     0,50 0,50 0,0
                     Z;

                     M 50,0
                     C 75,25 75,25 100,50
                     75,75 75,75 50,100
                     25,75 25,75 0,50
                     25,25 25,25 50,0
                     Z;

                     M 25,50
                     C 37.5,25 37.5,25 50,0
                     75,50 75,50 100,100
                     50,100 50,100 0,100
                     12.5,75 12.5,75 25,50
                     Z;

                     M 25,50
                     C 37.5,25 37.5,25 50,0
                     75,50 75,50 100,100
                     50,100 50,100 0,100
                     12.5,75 12.5,75 25,50
                     Z;

                     M 50,0
                     C 77.6,0 100,22.4 100,50
                     100,77.6 77.6,100 50,100
                     22.4,100, 0,77.6, 0,50
                     0,22.4, 22.4,0, 50,0
                     Z;

                     M 50,0
                     C 77.6,0 100,22.4 100,50
                     100,77.6 77.6,100 50,100
                     22.4,100, 0,77.6, 0,50
                     0,22.4, 22.4,0, 50,0
                     Z;

                     M 100,0
                     C 100,50 100,50 100,100
                     50,100 50,100 0,100
                     0,50 0,50 0,0
                     50,0 50,0 100,0
                     Z;"/>

      </path>
    </svg>
  </div>
)

export default MorphShapes
