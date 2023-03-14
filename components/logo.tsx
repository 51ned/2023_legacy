import { CroppedLogo, FullLogo } from '@/components/icons'


interface LogoProps { isCropped?: boolean }


export function Logo({ isCropped=false }: LogoProps ) {
  return (
    isCropped
      ? <CroppedLogo />
      : <FullLogo />
  )
}