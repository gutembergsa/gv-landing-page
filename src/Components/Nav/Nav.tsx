import { Link } from 'react-router-dom'
import { useWindowSize } from '../../Hooks'

type NavType = {
  logo?: string
}

const Nav = ({ logo }: NavType) => {
  const { top } = useWindowSize()
  return (
    <div
      className={`fixed w-full top-0 z-1 transition-all duration-400 ${top < 500 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
    >
      {logo ? <img src={logo} alt="Logo" /> : null}
      <nav className="bg-zinc-50 max-w-full h-30 shadow-xl flex justify-between p-1 pl-20 pr-20 h-lg:h-20 max-lg:h-25 max-lg:pl-10 max-lg:pr-10">
        <Link
          className="self-center text-[#87BF74] font-bold text-5xl max-lg:text-3xl"
          replace={true}
          to="/"
        >
          olh<span className="text-6xl max-lg:text-4xl">AI</span>
        </Link>
        <Link
          to="/subscribe"
          className="text-center self-center w-35 h-auto outline-none border-none rounded-sm p-3 bg-[#87BF74] text-xs font-554  font-medium text-zinc-50  select-none
        max-lg:p-3 max-lg:text-[9px] max-sm:hidden 
        transform active:bg-[#87BF74E0] active:translate-y-[4px]"
        >
          ENTRE EM CONTATO
        </Link>
      </nav>
    </div>
  )
}

export default Nav
