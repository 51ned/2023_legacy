import style from './burger.module.css'



export function Burger() {
  return (
    <svg
      className={style.icon}
      aria-hidden
      viewBox='0 0 24 20'
    >
      <rect
        className={style.line}
        height='4'
        width='24'
      />

      <rect
        className={style.line}
        height='4'
        width='16'
        x='8'
        y='16'
      />

      <rect
        className={style.line}
        height='4'
        width='20'
        x='4'
        y='8'
      />
    </svg>
  )
}
