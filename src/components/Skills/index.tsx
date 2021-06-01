import React, { FC } from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useTranslation } from 'react-i18next'
import { Fade } from 'react-reveal'

import SectionTitle from '@components/_shared/SectionTitle'

import './ProgressBar.css'
import * as Styled from './index.styled'
import Skill from './Skill'

type SkillsProps = {
  edges: any /* @todo - graphql codegen */
}

const Skills: FC<SkillsProps> = ({ edges }) => {
  const { t } = useTranslation()

  return (
    <Styled.Wrapper id="skills">
      <SectionTitle style={{ marginBottom: 50 }}>
        {t('sectionSkills')}
      </SectionTitle>
      <Styled.CardWrapper>
        {edges.map((skillCard: any, index: number) => {
          return (
            <Styled.Card key={skillCard.node.id}>
              <Fade ssrReveal bottom delay={index * 100} distance="100px">
                <div>
                  <span className={skillCard.node.icon} />
                  {documentToReactComponents(
                    JSON.parse(skillCard.node.title.raw)
                  )}
                  <div>
                    {skillCard.node.data.map((skill: any) => (
                      <Skill key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>
              </Fade>
            </Styled.Card>
          )
        })}
      </Styled.CardWrapper>
    </Styled.Wrapper>
  )
}

export default Skills
