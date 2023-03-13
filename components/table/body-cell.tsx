import cn from 'classnames'

import style from './cell.module.css'


interface TableBodyCellProps {
  children: React.ReactNode,
  first?: true,
  others?: true
}


export function TableBodyCell({
  children,
  first,
  others
}: TableBodyCellProps) {

  const className = cn({
    [style.table_body_first]: first,
    [style.table_body_others]: others
  })

  return (
    <span className={className} role='cell'>
      { children }
    </span>
  )
}
