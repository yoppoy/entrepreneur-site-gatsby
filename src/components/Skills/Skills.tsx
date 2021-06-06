import React, { FC } from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useTranslation } from 'react-i18next'
import Fade from 'react-reveal/Fade'

import { HomePageSkillsCard } from '@custom-types/contentfulSimplifiedTypes'

import SectionTitle from '@components/_shared/SectionTitle'

import './ProgressBar.css'
import Skill from './Skill'
import * as Styled from './Skills.styled'

type SkillsProps = {
  cards: Array<HomePageSkillsCard>
}

const Skills: FC<SkillsProps> = ({ cards }) => {
  const { t } = useTranslation()

  return (
    <Styled.Wrapper id="skills">
      <SectionTitle style={{ marginBottom: 50 }}>
        {t('section_skills.title')}
      </SectionTitle>
      <Styled.CardWrapper>
        {cards.map((skillCard, index) => {
          return (
            <Styled.Card key={skillCard.id}>
              <Fade ssrReveal bottom delay={index * 100} distance="100px">
                <div>
                  {skillCard.icon && <span className={skillCard.icon} />}
                  {skillCard?.title?.raw &&
                    documentToReactComponents(JSON.parse(skillCard.title.raw))}
                  <div>
                    {skillCard?.data?.map((skill) => (
                      <Skill key={skill?.name || ''} {...skill} />
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
