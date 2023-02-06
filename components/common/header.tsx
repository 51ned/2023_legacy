import { Division, TextHead } from '@/components/ui/.'


interface HeaderProps {}


export function Header({}: HeaderProps) {
  
  return (
    <Division withRole='wrap' withTag='header'>
      <Division withRole='container' withTag='section'>
        <TextHead level='1'>Text head in header.</TextHead>
      </Division>
    </Division>
  )
}