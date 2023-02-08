import Link from 'next/link'


export interface LinkProps {
  href: string,
  title: string
}


export function CustomLink ({
  href,
  title
}: LinkProps) {

  return (
    <Link href={href} title={title} />
  )
}
