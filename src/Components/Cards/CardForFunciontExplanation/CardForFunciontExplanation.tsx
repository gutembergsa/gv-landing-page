type CardForFunciontExplanationType = {
  title: string
  content: string
  callForImageChange?: () => void
}

const CardForFunciontExplanation = ({
  title,
  content,
  callForImageChange,
}: CardForFunciontExplanationType) => {
  return (
    <div
      className="
      w-90 h-100 rounded-md p-10  pt-10 pb-10  shadow-[0px_1px_10px_rgba(0,0,0,0.15)] 
      transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
      max-xl:h-80 max-xl:w-75
      cursor-pointer
      "
      onClick={() => callForImageChange?.()}
      onMouseEnter={() => callForImageChange?.()}
      onTouchStart={() => callForImageChange?.()}
    >
      <p className="h-12 content-end text-gray-700 font-semibold text-2xl max-xl:text-lg/normal cursor-pointer select-none">
        {title}
      </p>
      <div className="w-auto h-1 bg-black m-auto rounded-lg mt-8 mb-10 max-xl:mt-4 max-xl:mb-5 cursor-pointer"></div>
      <p className="m-auto font-semibold max-xl:text-[14px] cursor-pointer select-none">
        {content}
      </p>
    </div>
  )
}

export default CardForFunciontExplanation
