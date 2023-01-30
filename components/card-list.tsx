import React, { Children } from 'react'

import style from './card-list.module.css'


interface CardListProps {
  children: React.ReactNode
}


export function CardList({
  children
}: CardListProps) {
  
  const columnsNum = Children.count(children)

  const moreStyles = {
    gridTemplateColumns: `repeat(${columnsNum}, 1fr)`,
  }

  return (
    <div
      className={style.wrap}
      style={moreStyles}
    >
      { children }
    </div>
  )
}
