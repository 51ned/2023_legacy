import { CustomLink as Link } from '@/components/.'

import style from './phone.module.css'

import { commonData } from '@/lib/data'


export function Phone() {
  return (
    <Link
      title='Телефон экспертизы'
      url={`tel:${commonData.phone.allTogether}`}
      withColor='primary'
    >
      { commonData.phone.code }

      {' '}

      <span className={style.number}>
        { commonData.phone.number }
      </span>
    </Link>
  )
}