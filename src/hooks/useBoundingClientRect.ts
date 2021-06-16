import { RefObject, useEffect, useRef, useState } from 'react'

type ReturnType = {
  boundingRef: RefObject<HTMLDivElement>
  bounds: Pick<DOMRect, 'y' | 'x' | 'width' | 'height'> | null
}

const useBoundingClientRect = (): ReturnType => {
  const boundingRef = useRef<HTMLDivElement>(null)
  const [bounds, setBounds] = useState<ReturnType['bounds']>(null)

  useEffect(() => {
    const getBounds = () => {
      if (boundingRef?.current) {
        const divBounds = boundingRef.current.getBoundingClientRect()

        setBounds({
          y: divBounds.y + window.scrollY,
          x: divBounds.x + window.scrollX,
          width: divBounds.width,
          height: divBounds.height
        })
      }
    }

    getBounds()

    window.addEventListener('resize', getBounds)
    return () => window.removeEventListener('resize', getBounds)
  }, [setBounds])

  return { boundingRef, bounds }
}

export default useBoundingClientRect
