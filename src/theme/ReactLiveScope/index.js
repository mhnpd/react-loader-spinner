import React from 'react'
import * as Spinners from 'react-loader-spinner'
import PropsTable from "../../components/props-table"

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  PropsTable,
  ...Spinners
}
export default ReactLiveScope
