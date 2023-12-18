import * as React from 'react'
// Use this for local debugging
import * as Spinners from 'react-loader-spinner'
import PropsTable from '../../components/props-table'

// Add react-live imports you need here
const ReactLiveScope = {
  ...React,
  PropsTable,
  ...Spinners
}
export default ReactLiveScope
