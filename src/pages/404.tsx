import { FC, useEffect } from 'react'

import { navigate } from 'gatsby'

const Page404: FC = () => {
  useEffect(() => {
    navigate('/fr')
  }, [])

  return null
}

export default Page404
