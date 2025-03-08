import { LegacyRef } from 'react'
import { BaseTitleForExemples } from '.'
import { exempleImages } from '../Home'

type CardGroupFlexType = {
  scrollRef?: LegacyRef<HTMLParagraphElement>
}

const CardGroupFlex = ({ scrollRef }: CardGroupFlexType) => {
  return (
    <div
      className="mt-30 mb-30 max-[990px]:mt-80 max-[990px]:mb-0"
      ref={scrollRef}
    >
      <div className="flex justify-center max-2xl:flex-col">
        <div className=" mb-20 pl-20 pr-20 max-md:pl-5 max-md:pr-5">
          <BaseTitleForExemples text="Detecção de Falhas e contagem" />
          <p className="max-w-200 w-full  mt-10 text-base font-bold h-[120px] max-2xl:h-auto">
            Com a olhAI seu produto vai ter muito mais garantias de chegar em
            perfeito estado ao cliente final. Detectando com precisão tanto
            avarias em superficies complexas, como defeitos microscopicos.
          </p>
          <img
            src={exempleImages['exemple_quality'].image}
            alt="security"
            className="object-contain mt-10 m-auto max-h-[514px] w-[1400px]"
          />
        </div>
        <div className="mb-20 pl-20 pr-20 max-md:pl-5 max-md:pr-5">
          <BaseTitleForExemples text="Segurança" />
          <p className="max-w-200 w-full  mt-10 text-base font-bold h-[120px] max-2xl:h-auto">
            Com a olhAI seu negocio se torna mais seguro com o modulo de EPI’S,
            monitoramento de conformidade e deteção de gestos que possam
            representar um possivel acidente ou perigo pra o seu pessoal.
          </p>
          <img
            src={exempleImages['exemple_security'].image}
            alt="security"
            className="object-contain mt-10 m-auto max-h-[514px] w-[1400px]"
          />
        </div>

        <div className="mb-20 pl-20 pr-20 max-md:pl-5 max-md:pr-5">
          <BaseTitleForExemples text="Produtividade e Ergonomia" />
          <p className="max-w-200 w-full mt-10 text-base font-bold h-[120px] max-2xl:h-auto">
            Com a olhAI seu time tem um apoio que garante o bem estar e analisa
            tanto gestos como o movimento corporal, gerando insights valiosos
            sobre o desempenho e performance do time em tempo real.
          </p>
          <img
            src={exempleImages['exemple_ergonomy'].image}
            alt="security"
            className="object-contain mt-10 m-auto max-h-[514px] w-[1400px]"
          />
        </div>
        {/* <div className="">
          <CardHome1
            title="Segurança"
            content="Com a olhAI seu negocio se torna mais seguro com o modulo de EPI’S, monitoramento de conformidade
     e deteção de gestos que possam representar um possivel acidente ou perigo pra o seu pessoal. "
          />
          <img
            src={exempleImages['exemple_security'].image}
            alt="security"
            className="object-contain m-auto max-h-[514px] w-[1400px] max-md:w-[90%]"
          />
        </div>
        <div className="">
          <CardHome1
            title="Produtividade e Ergonomia"
            content="Com a olhAI seu time tem um apoio que garante o bem estar e analisa tanto gestos como 
    o movimento corporal, gerando insights valiosos sobre o desempenho e performance do time em tempo real."
          />
          <img
            src={exempleImages['exemple_ergonomy'].image}
            alt="security"
            className="object-contain m-auto max-h-[514px] w-[1400px] max-md:w-[90%]"
          />
        </div> */}
      </div>
    </div>
  )
}

export default CardGroupFlex
