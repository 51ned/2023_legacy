import style from './wrap.module.css'

interface TableWrapProps { children: React.ReactNode }


export function TableWrap({ children }: TableWrapProps) {
  return (
    <div className={style.wrap}>
      { children }
    </div>
  )
}
