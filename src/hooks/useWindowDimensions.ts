import { useState, useEffect } from 'react'

import { isBrowser } from '@utils/index'

type WindowDimensions = {
  width: Window['innerWidth']
  height: Window['innerHeight']
}

const getWindowDimensions = (): WindowDimensions => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState(
    isBrowser ? getWindowDimensions() : { height: 0, width: 0 }
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window?.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export default useWindowDimensions
