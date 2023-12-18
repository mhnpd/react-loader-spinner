import React, { ReactElement } from 'react'
import Table from 'rc-table'
import { sortBy } from 'lodash'

type Properties = {
  name: string
  type: string
  default: string
}

type Props = {
  properties: Properties[]
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 150,
    render: (_:unknown, row:Properties) => (<em style={{ color: '#932981' }}>{row.type}</em>)
  },
  {
    title: 'Default',
    dataIndex: 'default',
    key: 'default',
    width: 250,
    render: (_:unknown, row:Properties) => (<code style={{ color: '#932981' }}>{row.default}</code>)
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: 300,
  },
]

export default function PropsTable({ properties }: Props): ReactElement {
  return (<Table columns={columns} data={sortBy(properties, 'name')} />)
}
