interface TableCaptionProps { caption: string }


export function TableCaption ({ caption }: TableCaptionProps) {
  return (
    <div id='caption' hidden>
      { caption }
    </div>
  )
}
