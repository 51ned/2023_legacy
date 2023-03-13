import style from './table.module.css'


interface TableProps {
  caption: string,
  children: React.ReactNode
}


export function Table({
  caption,
  children
}: TableProps) {


  return (
    <div
      aria-describedby='caption'
      aria-label={caption}
      className={style.table}
      role='table'
    >
      { children }
    </div>
  )
}