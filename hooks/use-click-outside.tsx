import { useEffect } from 'react'


export function useClickOutside(
  callback: () => void,
  ref: React.RefObject<HTMLSelectElement>,
) {
  
  const handleClickOutside = (evt: Event) => {
    if (ref.current && !ref.current.contains(evt.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })
}
