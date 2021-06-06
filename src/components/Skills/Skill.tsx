import React, { FC } from 'react'

import InlineIcon from '@iconify/react'
import styled from 'styled-components'

import { ContentfulSkillsCardDataJsonNode } from '@custom-types/codegenContentfulTypes'

import getCustomIcon from '@utils/simple-icons'

const Icon = styled(InlineIcon)`
  margin-right: 5px;
  color: rgba(0, 0, 0, 0.8);
`

const SkillContainer = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.7em;
  & > p {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 1.8em;
    margin-bottom: 0;
  }
`

type SkillProps = Pick<
  ContentfulSkillsCardDataJsonNode,
  'icon' | 'score' | 'name'
>

const Skill: FC<SkillProps> = ({ name, score, icon }) => {
  const jsxIcon = icon ? getCustomIcon(icon) : null

  return (
    <SkillContainer>
      <p>
        {jsxIcon && <Icon color="rgba(0, 0, 0, 0.8)" icon={jsxIcon} />}
        <strong>{name}</strong>
      </p>
      <ol className="progress-bar-custom">
        {[...Array(5)].map((_, index) => {
          if (score && score > index) return <li className="is-complete" />
          return <li />
        })}
      </ol>
    </SkillContainer>
  )
}

export default Skill
