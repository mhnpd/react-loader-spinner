import React, { ReactElement } from 'react'
import Table from 'rc-table';

type Props = {
  properties: [
    {
      name: string
      type: string
    },
  ]
}

const columns=[
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 250,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 250,
    render:(_, row)=>(<em style={{color:'#932981'}}>{row.type}</em>)
  },
  {
    title: 'Default',
    dataIndex: 'default',
    key: 'default',
    width: 250,
    render:(_, row)=>(<code style={{color:'#932981'}}>{row.type}</code>)
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: 250,
  },
]

export default function PropsTable({ properties }: Props): ReactElement {
  return (<Table columns={columns} data={properties} />)
}
