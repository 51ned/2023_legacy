import style from './head.module.css'


interface TableHeadProps { children: React.ReactNode }


export function TableHead({ children }: TableHeadProps) {
  return (
    <div
      className={style.head}
      role='row'
    >
      { children }
    </div>
  )
}