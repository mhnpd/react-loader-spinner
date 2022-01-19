import React, { FunctionComponent, ReactElement } from 'react'
import { Style } from '../type'

interface CradleLoaderProps {
  ariaLabel?: string
  wrapperStyle?: Style
  wrapperClass?: string
  visible?: boolean
}

const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none'
})

const CradleLoader: FunctionComponent<CradleLoaderProps> = ({
  ariaLabel = 'cradle-loading',
  wrapperStyle,
  wrapperClass,
  visible = true
}): ReactElement => (
  <div
    aria-label={ariaLabel}
    role="presentation"
    style={{ ...getDefaultStyle(visible), ...wrapperStyle }}
    className={`container ${wrapperClass}`}
    data-testid="cradle-loading"
  >
    <div className="react-spinner-loader-swing">
      <div className="react-spinner-loader-swing-l" />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div className="react-spinner-loader-swing-r" />
    </div>
    <div className="react-spinner-loader-shadow">
      <div className="react-spinner-loader-shadow-l" />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div className="react-spinner-loader-shadow-r" />
    </div>
  </div>
)

export default CradleLoader
