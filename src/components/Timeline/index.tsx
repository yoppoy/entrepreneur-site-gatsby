import React, { FC } from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Icon from '@iconify/react'
import Img from 'gatsby-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useTranslation } from 'react-i18next'
import Fade from 'react-reveal/Fade'
import Tada from 'react-reveal/Tada'

import SectionTitle from '@components/_shared/SectionTitle'
import Tooltip from '@components/_shared/Tooltip'
import getCustomIcon from '@utils/simple-icons'

import * as Styled from './index.styled'

type TimelineProps = {
  edges: any /* @todo - graphql-codegen */
  config: any /* @todo - graphql-codegen */
}

const Timeline: FC<TimelineProps> = ({ edges, config }) => {
  const { t } = useTranslation()

  return (
    <section id="experience">
      <Styled.TimelineWrapper
        Tag="div"
        fluid={config.backgroundExperience.fluid}
        backgroundColor="black"
      >
        <AnchorLink
          to={
            typeof window !== `undefined`
              ? `${window.location.pathname}#experience`
              : '#experience'
          }
          title={t('sectionSkills')}
        >
          <Styled.TimelineHeader>
            <SectionTitle>{t('sectionTimeline')}</SectionTitle>
          </Styled.TimelineHeader>
        </AnchorLink>
        <Styled.Timeline>
          <Styled.TimelineContainer>
            {edges.map((
              experience: any,
              index: number /* @todo - graphql-codegen */
            ) => {
              return (
                <Styled.TimelineItem key={experience.node.id}>
                  <Styled.TimelineDot>
                    {index === 0 && (
                      <Tada>
                        <p>
                          {experience.node.dateStart.slice(
                            experience.node.dateStart.lastIndexOf(' ') + 1
                          )}
                        </p>
                      </Tada>
                    )}
                  </Styled.TimelineDot>
                  <Styled.TimelineCompany>
                    <Fade
                      ssrReveal
                      distance="50px"
                      left={index % 2 === 0}
                      right={index % 2 !== 0}
                    >
                      <Img
                        fluid={experience.node.companyLogo.fluid}
                        style={{ maxHeight: 135, width: 230 }}
                        imgStyle={{ objectFit: 'contain' }}
                      />
                    </Fade>
                  </Styled.TimelineCompany>
                  <Fade
                    ssrReveal
                    distance="50px"
                    left={index % 2 !== 0}
                    right={index % 2 === 0}
                    delay={index * 50}
                  >
                    <Styled.TimelineContent>
                      <Styled.TimelineDate>
                        <Styled.Label
                          backgroundColor="#43A047"
                          borderColor="#43A047"
                          color="white"
                        >
                          {experience.node.type
                            .split(' ')
                            .map((word: string, typeIndex: number) => {
                              const back =
                                typeIndex ===
                                experience.node.type.split(' ') - 1
                                  ? word
                                  : `${word} `
                              return index === 0 ? (
                                <strong key={`${word}`}>{back}</strong>
                              ) : (
                                <span key={`${word}`}>{back}</span>
                              )
                            })}
                        </Styled.Label>
                        <Styled.Label>
                          <strong>
                            {experience.node.dateStart} -{' '}
                            {experience.node.dateEnd}
                          </strong>
                        </Styled.Label>
                      </Styled.TimelineDate>
                      {experience.node.companyLink ? (
                        <a
                          className="company-name"
                          href={experience.node.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <strong>{experience.node.companyName}</strong>
                        </a>
                      ) : (
                        <span className="company-name">
                          <strong>{experience.node.companyName}</strong>
                        </span>
                      )}
                      <h3>{experience.node.title}</h3>
                      <div className="description">
                        {documentToReactComponents(
                          JSON.parse(experience.node.description.raw)
                        )}
                      </div>
                      <Styled.TechList>
                        {experience.node.icons.data.map(
                          (icon: any, iconIndex: number) => {
                            const iconPath = getCustomIcon(icon.icon)
                            if (iconPath)
                              return (
                                <div
                                  key={experience.node.title + icon.name}
                                  style={{ display: 'inline-block' }}
                                >
                                  <Tada delay={1000 + iconIndex * 100}>
                                    <Tooltip
                                      content={icon.name}
                                      orientation="top"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <Icon
                                        icon={iconPath}
                                        color="#444"
                                        style={{ marginRight: 5 }}
                                      />
                                    </Tooltip>
                                  </Tada>
                                </div>
                              )
                          }
                        )}
                      </Styled.TechList>
                    </Styled.TimelineContent>
                  </Fade>
                </Styled.TimelineItem>
              )
            })}
          </Styled.TimelineContainer>
        </Styled.Timeline>
      </Styled.TimelineWrapper>
    </section>
  )
}

export default Timeline
