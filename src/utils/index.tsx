import React, { ReactElement } from 'react'

import { Scalars } from '@custom-types/codegenContentfulTypes'

export const emboldenFirstWord = (label: string): ReactElement => {
  const [firstElement, ...otherElements] = label.split(' ')

  return (
    <>
      <strong>{firstElement}</strong>
      {otherElements && ` ${otherElements.join(' ')}`}
    </>
  )
}

export const formatYearDate = (date: Scalars['Date']): string => {
  return date.slice(date.lastIndexOf(' ') + 1)
}

export const isBrowser = typeof window !== `undefined`
