import cn from 'classnames'

import style from './cell.module.css'


interface TableHeadCellProps {
  children: React.ReactNode,
  first?: true,
  others?: true
}


export function TableHeadCell({
  children,
  first,
  others
}: TableHeadCellProps) {

  const className = cn(style.cell, {
    [style.head_first]: first,
    [style.head_others]: others
  })

  return (
    <span className={style.head_cell} role='columnheader'>
      { children }
    </span>
  )
}
