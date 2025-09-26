import React, { useEffect, useState } from 'react'
// @ts-ignore - docusaurus hook for generating correct baseUrl paths
import useBaseUrl from '@docusaurus/useBaseUrl'
import type { FC } from 'react'

interface PropMeta {
  name: string
  type: string
  required: boolean
  defaultValue?: string
  description?: string
}

interface AutoPropsTableProps {
  component?: string
  exclude?: string[]
  include?: string[]
  title?: string
}

const cache: Record<string, PropMeta[] | undefined> = {}

export const AutoPropsTable: FC<AutoPropsTableProps> = ({
  component = 'Audio',
  exclude = [],
  include,
  title = 'Props',
}) => {
  const [rows, setRows] = useState<PropMeta[] | null>(cache[component] || null)
  const [error, setError] = useState<string | null>(null)
  // Compute the JSON file URL once per render; hook must be at top level.
  const fileUrl = useBaseUrl(`/generated/props/${component}.json`)

  useEffect(() => {
    let cancelled = false
    if (!rows) {
      fetch(fileUrl)
        .then(r => {
          if (!r.ok) throw new Error(`${r.status}`)
          return r.json()
        })
        .then((data: PropMeta[]) => {
          if (cancelled) return
          cache[component] = data
          setRows(data)
        })
        .catch(e => {
          if (cancelled) return
          setError(`Failed to load prop metadata: ${e.message}`)
        })
    }
    return () => {
      cancelled = true
    }
  }, [component, rows, fileUrl])

  let display = rows || []
  if (include && include.length) display = display.filter(r => include.includes(r.name))
  if (exclude.length) display = display.filter(r => !exclude.includes(r.name))

  return (
    <div>
      <h3>{title}</h3>
      {!rows && !error && <p>Loading prop definitions…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {rows && (
        <table>
          <thead>
            <tr>
              <th align="left">Prop</th>
              <th align="left">Type</th>
              <th align="left">Default</th>
              <th align="left">Description</th>
            </tr>
          </thead>
          <tbody>
            {display.map(p => (
              <tr key={p.name}>
                <td><code>{p.name}</code>{p.required && ' *'}</td>
                <td><code>{p.type}</code></td>
                <td>{p.defaultValue ? <code>{p.defaultValue}</code> : '—'}</td>
                <td>{p.description || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AutoPropsTable
