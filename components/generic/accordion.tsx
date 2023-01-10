import { Button, Card } from './'


interface AccordionProps {
  activeIndex: number | null,
  actualIndex: number,
  buttonID: string,
  buttonTitle: string,
  content: string,
  contentID: string,
  handleClick: () => void
}


export function Accordion({
  activeIndex,
  actualIndex,
  buttonID,
  buttonTitle,
  content,
  contentID,
  handleClick
}: AccordionProps) {

  return (
    <div>
      <Button
        buttonID={buttonID}
        buttonTitle={buttonTitle}
        controlledID={contentID}
        handleClick={handleClick}
        isActive={actualIndex === activeIndex}
        isExpandable
        withStyle='accordion'
      />
      <Card
        content={content}
        contentID={contentID}
        controllingID={buttonID}
        isActive={actualIndex === activeIndex}
      />
    </div>
  )
}
