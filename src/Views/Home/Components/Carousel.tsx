import {
  Slider,
  Slide,
  CarouselStoreInterface,
  CarouselContext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { CardHome1 } from '../../../Components'
import { useContext } from 'react'
import { exempleImagesLabels } from '../../../Utils'

type CarouselType = { callback: (data: string) => void }

const Carousel = ({ callback }: CarouselType) => {
  const { getStoreState } = useContext<CarouselStoreInterface>(CarouselContext)

  return (
    <Slider
      className="h-150 pt-8 pl-[20%] pr-[20%] max-[650px]:h-130 max-[500px]:h-100 max-[500px]:pt-1 max-sm:pl-[7%] max-sm:p-6 max-sm:pr-[7%] "
      onTransitionEnd={() => {
        const { currentSlide } = getStoreState()
        callback(
          exempleImagesLabels[currentSlide as keyof typeof exempleImagesLabels]
        )
      }}
    >
      <Slide index={0} innerClassName="flex justify-center items-center">
        {' '}
        <CardHome1
          title="Detecção de Falhas e contagem"
          content="Com a olhAI seu produto vai ter muito mais garantias de chegar
                em perfeito estado ao cliente final. Detectando com precisão
                tanto avarias em superficies complexas, como defeitos
                microscopicos."
        />
      </Slide>
      <Slide
        index={1}
        innerClassName="flex justify-center items-center"
      >
        <CardHome1
          title="Segurança"
          content="Com a olhAI seu negocio se torna mais seguro com o modulo de EPI’S, monitoramento de conformidade
               e deteção de gestos que possam representar um possivel acidente ou perigo pra o seu pessoal. "
        />
      </Slide>
      <Slide index={2} innerClassName="flex justify-center items-center">
        {' '}
        <CardHome1
          title="Produtividade e Ergonomia"
          content="Com a olhAI seu time tem um apoio que garante o bem estar e analisa tanto gestos como 
              o movimento corporal, gerando insights valiosos sobre o desempenho e performance do time em tempo real."
        />
      </Slide>
    </Slider>
  )
}

export default Carousel
