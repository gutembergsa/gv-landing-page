import React, { ReactNode } from 'react'

type ButtonType = {
  content: string | ReactNode
  onClick?: () => void
}

const Button = ({ content, onClick }: ButtonType) => {
  return (
    <button
      className="
      block text-center  self-center w-55 h-20 outline-none border-none rounded-sm p-2 bg-[#87BF74] text-xs/4 tracking-wide font-554 font-extrabold text-white 
      transform active:translate-y-[4px] active:bg-[#87BF74E0] select-none
      max-lg:flex max-lg:items-center max-lg:text-[9px]/3 max-lg:w-40 max-lg:h-15 max-lg:pt-[9px]
      max-md:m-auto max-md:block max-md:text-[12px] max-md:w-48 max-md:p-3"
      onClick={() => onClick?.()}
    >
      {content}
    </button>
  )
}

export default Button
