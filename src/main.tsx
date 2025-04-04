import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CarouselProvider } from 'pure-react-carousel'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'

import { Home, Subscribe } from './Views'

const carouselConfig = {
  naturalSlideWidth: 100,
  naturalSlideHeight: 100,
  totalSlides: 3,
  currentSlide: 1,
  visibleSlides: 1,
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CarouselProvider {...carouselConfig}>
        <Home />
      </CarouselProvider>
    ),
  },
  {
    path: '/subscribe',
    element: <Subscribe />,
  },
])

export const Router = <RouterProvider router={router} />

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>olhAI</title>
        <meta
          name="google-site-verification"
          content="yvvFmGjsP6baaYBQWZbjaQLzzs-FUMEVC85FUSk0ivU"
        />
        <meta
          name="keywords"
          content="olhai, OlhAI, olhai.tech, ia, ai, visão computacional, industria 4.0, processamento de imagem, software"
        />
        <meta property="og:title" content="olhAI" />
        <meta
          property="og:description"
          content="Sistemas de visão para seu processo."
        />
        <meta
          property="og:image"
          content="https://q4hfcoxcg9qsukse.public.blob.vercel-storage.com/logo-big-cieNFN0D9BwyYGiGCz9yDtbZ7ZhPfQ.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:url" content="https://olhai.tech" />
        <meta property="og:type" content="website" />
      </Helmet>

      {Router}
      <Analytics />
    </HelmetProvider>
  </StrictMode>
)
