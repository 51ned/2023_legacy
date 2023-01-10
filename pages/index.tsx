import { useState } from 'react'

import { Accordion, Text } from '@/components/generic'

import { data } from '@/lib/data'


export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const handleClick = (index: number) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index)
  }

  return (
    <>
      <Text withSize='subtitle'>
        Hello, world!
      </Text>

      {data.map((item, index) => (
        <Accordion
          activeIndex={activeIndex}
          actualIndex={index}
          buttonID={item.buttonID}
          buttonTitle={item.buttonTitle}
          content={item.content}
          contentID={item.contentID}
          handleClick={() => handleClick(index)}
          key={index}
        />  
      ))}
    </>
  )
}