import { Box } from '@/components/ui/.'


interface InnerLayoutProps {
  children: React.ReactNode
}


export function InnerLayout({
  children
}: InnerLayoutProps) {
  
  return (
    <Box withRole='wrap' withTag='div'>
      <Box withRole='container' withTag='main'>
        { children }
      </Box>
    </Box>
  )
}
