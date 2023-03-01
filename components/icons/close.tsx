import style from './close.module.css'


export function Close() {
  return (
    <svg
      aria-hidden
      className={style.icon}
      viewBox='0 0 24 24'
    >
      <polygon points='-0.003,17.175 7.172,10 0,2.828 2.828,0 10,7.172 17.084,0.087 19.913,2.916 12.828,10 19.958,17.13 17.13,19.958 10,12.828 2.825,20.003' />
    </svg>
  )
}