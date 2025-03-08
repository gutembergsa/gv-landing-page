import React, { LegacyRef, useState } from 'react'
import { CardsGroup, Carousel } from '.'
import { ExempleImageLabels, exempleImages } from '../Home'

type ExempleHeroType = {
  scrollRef?: LegacyRef<HTMLParagraphElement>
}

const ExempleHero = ({ scrollRef }: ExempleHeroType) => {
  const [imageToExemple, setImageExemple] =
    useState<ExempleImageLabels>('exemple_security')

  return (
    <>
      <div
        className="mt-30 mb-30 max-[990px]:mt-80 max-[990px]:mb-0"
        ref={scrollRef}
      >
        <CardsGroup callForImageChange={setImageExemple} />
        <div className="min-[990px]:hidden" ref={scrollRef}>
          <Carousel
            callback={(data) => setImageExemple(data as ExempleImageLabels)}
          />
        </div>
      </div>
      <img
        src={exempleImages[imageToExemple].image}
        alt="security"
        className="object-contain m-auto max-h-[514px] w-[1400px] max-md:w-[90%]"
      />
    </>
  )
}

export default ExempleHero
