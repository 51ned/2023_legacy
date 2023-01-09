import style from './card.module.css'


interface CardProps {
  content: React.ReactNode,
  contentID: string,
  controllingID?: string
  isActive?: boolean
}


export function Card({
  content,
  contentID,
  controllingID,
  isActive
}: CardProps) {

  return (
    <div
      aria-labelledby={controllingID}
      className={isActive ? '' : 'visually_hidden'}
      id={contentID}
      role='region'
    >
      { content }
    </div>
  )
}
