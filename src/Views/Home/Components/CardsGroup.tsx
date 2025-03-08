import React from 'react'
import { CardHome1 } from '../../../Components'
import { ExempleImageLabels } from '../Home'

type CardsGroupType = {
  callForImageChange: (exemple: ExempleImageLabels) => void
}

const CardsGroup = ({ callForImageChange }: CardsGroupType) => {
  return (
    <div className="max-[990px]:hidden flex justify-evenly max-md:mt-50 md:space-x-2">
      <CardHome1
        title="Detecção de Falhas e contagem"
        content="Com a olhAI seu produto vai ter muito mais garantias de chegar
      em perfeito estado ao cliente final. Detectando com precisão tanto avarias em superficies complexas, como defeitos microscopicos."
        callForImageChange={() => callForImageChange('exemple_quality')}
      />{' '}
      <CardHome1
        title="Segurança"
        content="Com a olhAI seu negocio se torna mais seguro com o modulo de EPI’S, monitoramento de conformidade
     e deteção de gestos que possam representar um possivel acidente ou perigo pra o seu pessoal. "
        callForImageChange={() => callForImageChange('exemple_security')}
      />
      <CardHome1
        title="Produtividade e Ergonomia"
        content="Com a olhAI seu time tem um apoio que garante o bem estar e analisa tanto gestos como 
    o movimento corporal, gerando insights valiosos sobre o desempenho e performance do time em tempo real."
        callForImageChange={() => callForImageChange('exemple_ergonomy')}
      />
    </div>
  )
}

export default CardsGroup
