import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CarouselProvider } from 'pure-react-carousel'
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
    {Router}
    <Analytics />
  </StrictMode>
)
