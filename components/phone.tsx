import { CustomLink as Link } from '@/components/.'

import style from './phone.module.css'

import { commonData } from '@/lib/data'


type PhoneStyleEnum = 'primary' | 'regular'

interface PhoneProps { withStyle: PhoneStyleEnum }


export function Phone({ withStyle }: PhoneProps) {
  const getPrimaryNumber = () => {
    return (
      <span className={style.number}>
        { commonData.phone.number }
      </span>
    )
  }

  return (
    <Link
      title='Телефон экспертизы'
      url={`tel:${commonData.phone.allTogether}`}
      withColor={withStyle === 'primary' ? 'primary' : 'interactive'}
      withSize={withStyle === 'primary' ? 'smaller' : 'regular'}
    >
      { commonData.phone.code }

      {' '}

      { withStyle === 'primary' ? getPrimaryNumber() : commonData.phone.number }
    </Link>
  )
}