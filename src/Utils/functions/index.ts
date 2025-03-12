import { RefObject } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const scroll = (ref: RefObject<any>, offset?: number) => {
  if (ref.current) {
    const yOffset = offset ? -1 * offset : -30 // Define o espaçamento acima do elemento (ajuste conforme necessário)
    console.log({ yOffset })

    const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
