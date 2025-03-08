import { useEffect, useState } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height, scrollY } = window
  return {
    width,
    height,
    top: scrollY,
  }
}

const useWindowSize = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    const handler = () => setWindowDimensions(getWindowDimensions())

    window.addEventListener('resize', handler)
    window.addEventListener('scroll', handler)

    return () => {
      window.removeEventListener('resize', handler)
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return {
    ...windowDimensions,
  }
}

export default useWindowSize
