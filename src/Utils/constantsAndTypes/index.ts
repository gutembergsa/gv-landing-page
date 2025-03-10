import exemple_security from '../../assets/image_5.png'
import exemple_quality from '../../assets/image_4.png'
import exemple_ergonomy from '../../assets/image_3.png'

export type ExempleImageLabels =
  | 'exemple_security'
  | 'exemple_quality'
  | 'exemple_ergonomy'

// eslint-disable-next-line react-refresh/only-export-components
export const exempleImagesLabels = {
  0: 'exemple_quality',
  1: 'exemple_security',
  2: 'exemple_ergonomy',
}

export const exempleImages = {
  exemple_security: {
    image: exemple_security,
    opacity: 100,
    carouselId: 0,
  },
  exemple_quality: {
    image: exemple_quality,
    opacity: 100,
    carouselId: 1,
  },
  exemple_ergonomy: {
    image: exemple_ergonomy,
    opacity: 100,
    carouselId: 2,
  },
}