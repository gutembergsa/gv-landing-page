import {  useRef } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { CiLinkedin } from 'react-icons/ci'

import { Nav, Button, BaseTitle } from '../../Components'
import { CardGroupFlex } from './Components'

import image from '../../assets/image_1.jpg'

import cam_image from '../../assets/cam.jpg'
import app_image from '../../assets/app.jpg'
import ia_image from '../../assets/ia.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useWindowSize } from '../../Hooks'
import { scroll } from '../../Utils'

const Home = () => {
  const scrollToRef1 = useRef<HTMLParagraphElement>(null)
  const scrollToRef2 = useRef<HTMLImageElement>(null)
  const { width } = useWindowSize()
  const navigate = useNavigate()
  
  return (
    <div>
      <main>
        <Nav />
        {/* Seção inicial */}
        <section className="flex mt-50 flex-col ml-10 mr-10 max-lg:mt-40 max-md:text-center max-md:mt-70 h-xl:mt-35">
          <div className="relative flex justify-center space-x-20 max-lg:space-x-0">
            <div>
              <h1 className="text-5xl/snug text-gray-700 font-black max-w-120 w-full max-xl:leading-15 max-lg:leading-13 max-md:leading-10 max-md:text-3xl max-md:m-auto h-base:text-4xl/[40px]">
                O poder da IA de uma forma que realmente faz sentido.
              </h1>
              <h2 className="max-w-150 w-full text-xl text-gray-700 mt-15 mb-15  max-md:text-lg max-md:mt-15 max-md:mb-15 h-base:mt-12 h-base:mb-12">
                Use sistemas de visão para alcançar melhorias reais em
                qualidade, segurança, economia de recursos e muito mais.
              </h2>
              <Button
                content="FAZ SENTIDO? CLIQUE AQUI E REGISTRE-SE!"
                onClick={() => navigate('/subscribe')}
              />
            </div>
            <div className="max-lg:hidden">
              <img src={image} alt="banner" />
            </div>
          </div>
          <div
            onClick={() => scroll(scrollToRef1, 100)}
            className="flex justify-center align-middle w-10 rounded-full m-auto"
          >
            <div className="cursor-pointer absolute bottom-[10px] w-10 h-10 bg-[#87BF744D] z-1 rounded-full  animate-ping"></div>
            <IoIosArrowDown
              size={30}
              className="cursor-pointer absolute bottom-[12px]"
              onClick={() => scroll(scrollToRef1, 100)}
            />
          </div>
        </section>
        {/* Seção exemplos */}
        <section className="mt-100 max-sm:mb-60">
          <div className="relative text-center max-lg:mb-0 pl-10 pr-10">
            <BaseTitle scrollRef={scrollToRef1} text="COMO FUNCIONA" />
            <p className="max-w-200 w-full m-auto mt-20 text-base font-bold max-sm:mt-10 max-sm:mb-20">
              CÂMERAS POSICIONADAS ESTRATEGICAMENTE IDENTIFICAM E AGEM DE ACORDO
              COM A TAREFA ESPECIFICADA, ALIMENTANDO SERVIDORES E IAs QUE GERAM
              DADOS EM TEMPO REAL, USADOS PARA ALIMENTAR SISTEMAS WEB E MOBILE.
            </p>
            <p className="flex justify-center gap-35 mt-30 mb-60 max-md:gap-10 max-md:mt-20 max-sm:mb-25 h-xl:mb-25 h-lg:mb-10">
              <img src={cam_image} alt="can" className="w-20" />
              <img src={ia_image} alt="can" className="w-20" />
              <img src={app_image} alt="can" className="w-20" />
            </p>

            <div
              onClick={() => scroll(scrollToRef2, width > 420 ? 60 : 80)}
              className="flex justify-center align-middle w-10 rounded-full m-auto h-10"
            >
              <div className="cursor-pointer absolute bottom-[5px] w-10 h-10 bg-[#87BF744D] z-1 rounded-full  animate-ping"></div>
              <IoIosArrowDown
                size={30}
                className="cursor-pointer absolute"
                onClick={() => scroll(scrollToRef2, width > 420 ? 60 : 80)}
              />
            </div>
          </div>
          <CardGroupFlex scrollRef={scrollToRef2} />
        </section>
        {/* Seção demo */}
        <section className="hidden mt-50 bg-gray-400 w-full h-150 flex justify-center gap-40 items-center max-xl:flex-col max-xl:h-180 max-xl:gap-10 max-xl:p-3 max-sm:p-6 max-sm:h-160">
          <div className="w-120 max-lg:w-[80%] max-sm:w-full">
            <p className="text-2xl font-black">Mini Demo</p>
            <div className="w-40 h-1 bg-black rounded-2xl  mt-3 mb-10 max-md:w-30 max-md:mb-6 max-sm:w-27"></div>
            <p className="text-lg font-medium max-md:text-base">
              A OlhAI possui um time de especialistas que, junto com você, irão
              entender e trazer soluções para o seu negócio. <br />
              <span className="text-white text-base/10 font-bold max-md:leading-4">
                {' '}
                Veja aqui nosso módulo de contagem em ação.
              </span>
            </p>
          </div>
          <div>
            <video
              src=""
              className="w-full h-80 m-auto bg-black rounded-md max-sm:h-60"
            ></video>
          </div>
        </section>
        {/* Seção promo */}
        <section className="text-center  mt-50 mb-50 max-md:mb-25 max-md:mt-25">
          <p className="m-auto mb-20 text-4xl font-extrabold max-w-150 max-md:max-w-120 max-md:text-2xl max-sm:pl-10 max-sm:pr-10">
            Gostou? Clique e traga seu negocio para o futuro
          </p>
          <Link
            to="/subscribe"
            className="self-center p-4 outline-none border-none rounded-sm  bg-[#87BF74] text-md/4 tracking-wider font-554 font-extrabold text-white max-md:w-25 max-md:h-10 max-md:block max-md:m-auto max-md:text-[12px] active:bg-[#87BF74E0] active:translate-y-[4px] max-md:pt-[11px]"
          >
            ADQUIRIR
          </Link>{' '}
        </section>
        {/* Seção footer */}
        <section className="bg-black p-1 pt-25 pb-25">
          <div className="mb-30 text-center">
            <BaseTitle whiteColor text="ENTRE EM CONTATO" />
          </div>
          <div className="flex text-zinc-200 text-center justify-evenly font-bold max-sm:gap-6">
            <div>
              <p>FALE CONOSCO</p>
              <p className="font-normal pt-5">
                <a href="mailto:contato@olhai.com">contato@olhai.tech</a>
              </p>
            </div>
            <div>
              <p>NOS SIGA</p>
              <p className="flex justify-evenly gap-2 pt-5">
                {/* <CiInstagram
                  size={40}
                  className="cursor-pointer max-sm:w-10 max-sm:h-10"
                /> */}
                <CiLinkedin
                  size={40}
                  className="cursor-pointer max-sm:w-10 max-sm:h-10"
                  onClick={() => {
                    window.open(
                      'https://www.linkedin.com/company/olhai-tech',
                      '_blank'
                    )
                  }}
                />
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
