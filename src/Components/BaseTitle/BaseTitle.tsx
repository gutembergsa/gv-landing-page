import React, { LegacyRef } from 'react'

type BaseTitleType = {
  text: string
  scrollRef?: LegacyRef<HTMLParagraphElement>
  whiteColor?: boolean
  barToSide?: 'l' | 'r'

}

const BaseTitle = ({ text, whiteColor, scrollRef }: BaseTitleType) => {
  return (
    <div>
      {' '}
      <p
        className={`font-extrabold text-2xl pb-7 max-md:text-xl max-md:pb-5 ${whiteColor ? 'text-zinc-50' : ''}`}
        ref={scrollRef}
      >
        {text}
      </p>
      <div
        className={`w-50 h-1 bg-black m-auto rounded-2xl max-md:w-30 max-sm:w-28 ${whiteColor ? 'bg-zinc-50' : ''}`}
      ></div>
    </div>
  )
}

export default BaseTitle
