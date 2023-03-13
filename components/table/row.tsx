import style from './row.module.css'


interface TableRowProps { children: React.ReactNode }


export function TableRow({ children }: TableRowProps) {

  return (
    <div className={style.row} role='row'>
      { children }
    </div>
  )
}