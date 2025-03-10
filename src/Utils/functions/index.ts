import { RefObject } from "react"

export const scroll = (ref: RefObject<HTMLHeadingElement>, offset?: number) => {
  if (ref.current) {
    const yOffset = offset ? -1 * offset : -30 // Define o espaçamento acima do elemento (ajuste conforme necessário)
    console.log({ yOffset })

    const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

