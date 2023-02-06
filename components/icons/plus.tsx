import style from './plus.module.css'


export function Plus() {
  return (
    <svg
      aria-hidden
      className={style.icon}
      focusable='false'
      viewBox='0 0 10 10'
    >
      <rect
        className={style.vertical_line}
        height='8'
        width='2'
        x='4'
        y='1'
      />

      <rect
        height='2'
        width='8'
        x='1'
        y='4'
      />
    </svg>
  )
}
