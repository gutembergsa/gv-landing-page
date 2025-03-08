import { CarouselContext } from 'pure-react-carousel'
import { useContext, useState, useEffect } from 'react'

const usePureCarouselContext = () => {
  const carouselContext = useContext(CarouselContext)
  const [context, setContext] = useState(carouselContext)

  useEffect(() => {
    function onChange() {
      setContext(carouselContext)
    }
    carouselContext?.subscribe(onChange)
    return () => carouselContext?.unsubscribe(onChange)
  }, [carouselContext])

  return { ...context }
}

export default usePureCarouselContext
