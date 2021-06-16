import React, { FC } from 'react'

import { FluidObject } from 'gatsby-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useTranslation } from 'react-i18next'

import {
  HomePageExperience,
  HomePageSiteConfiguration
} from '@custom-types/contentfulSimplifiedTypes'

import SectionTitle from '@components/_shared/SectionTitle'
import TimelineExperience from '@components/Timeline/TimelineExperience'
import { isBrowser } from '@utils/index'

import * as Styled from './Timeline.styled'

type TimelineProps = {
  experiences: Array<HomePageExperience>
  background: HomePageSiteConfiguration['backgroundExperience']
}

const Timeline: FC<TimelineProps> = ({ experiences, background }) => {
  const { t } = useTranslation()
  const experienceLink = isBrowser
    ? `${window.location.pathname}#experience`
    : '#experience'

  return (
    <section id="experience">
      {background?.fluid && (
        <Styled.TimelineWrapper
          Tag="div"
          fluid={background.fluid as FluidObject | FluidObject[]}
          backgroundColor="black"
        >
          <AnchorLink to={experienceLink} title={t('section_skills.title')}>
            <Styled.TimelineHeader>
              <SectionTitle>{t('section_timeline.title')}</SectionTitle>
            </Styled.TimelineHeader>
          </AnchorLink>
          <Styled.Timeline>
            <Styled.TimelineContainer>
              {experiences.map((experience, index) => (
                <TimelineExperience
                  key={experience.id}
                  {...experience}
                  index={index}
                />
              ))}
            </Styled.TimelineContainer>
          </Styled.Timeline>
        </Styled.TimelineWrapper>
      )}
    </section>
  )
}

export default Timeline
