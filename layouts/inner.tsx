import { Division } from '@/components/ui/.'


interface InnerLayoutProps {
  children: React.ReactNode
}


export function InnerLayout({
  children
}: InnerLayoutProps) {
  
  return (
    <Division withRole='wrap' withTag='div'>
      <Division withRole='container' withTag='main'>
        { children }
      </Division>
    </Division>
  )
}
