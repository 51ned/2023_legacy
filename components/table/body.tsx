import style from './body.module.css'


interface TableBodyProps { children: React.ReactNode }


export function TableBody({ children }: TableBodyProps) {
  return (
    <div
      className={style.body}
      role='rowgroup'
    >
      { children }
    </div>
  )
}
