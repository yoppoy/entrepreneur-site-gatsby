import React, { FC } from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Icon from '@iconify/react'
import Img, { FluidObject } from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import Tada from 'react-reveal/Tada'

import { HomePageExperience } from '@custom-types/contentfulSimplifiedTypes'

import Tooltip from '@components/_shared/Tooltip'
import * as Styled from '@components/Timeline/index.styled'
import getCustomIcon from '@utils/simple-icons'

const FADE_DELAY_DIVIDER = 50

type TimelineExperienceProps = HomePageExperience & {
  index: number
}

const TimelineExperience: FC<TimelineExperienceProps> = ({
  index,
  dateStart,
  dateEnd,
  companyLogo,
  companyLink,
  companyName,
  title,
  description,
  icons,
  type
}) => {
  const formatExperienceLabel = (label: string) => {
    const [firstElement, ...otherElements] = label.split(' ')

    return (
      <>
        <strong>{firstElement}</strong>
        {otherElements && ` ${otherElements.join(' ')}`}
      </>
    )
  }

  return (
    <Styled.TimelineItem>
      <Styled.TimelineDot>
        {index === 0 && (
          <Tada>
            <p>{dateStart.slice(dateStart.lastIndexOf(' ') + 1)}</p>
          </Tada>
        )}
      </Styled.TimelineDot>
      {companyLogo?.fluid && (
        <Styled.TimelineCompany>
          <Fade
            ssrReveal
            distance="50px"
            left={index % 2 === 0}
            right={index % 2 !== 0}
          >
            <Img
              fluid={companyLogo.fluid as FluidObject | FluidObject[]}
              style={{ maxHeight: 135, width: 230 }}
              imgStyle={{ objectFit: 'contain' }}
            />
          </Fade>
        </Styled.TimelineCompany>
      )}
      <Fade
        ssrReveal
        distance="50px"
        left={index % 2 !== 0}
        right={index % 2 === 0}
        delay={index * FADE_DELAY_DIVIDER}
      >
        <Styled.TimelineContent>
          <Styled.TimelineDate>
            {type && (
              <Styled.Label
                backgroundColor="#43A047"
                borderColor="#43A047"
                color="white"
              >
                {formatExperienceLabel(type)}
              </Styled.Label>
            )}
            <Styled.Label>
              <strong>
                {dateStart} - {dateEnd}
              </strong>
            </Styled.Label>
          </Styled.TimelineDate>
          {companyLink ? (
            <a
              className="company-name"
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{companyName}</strong>
            </a>
          ) : (
            <span className="company-name">
              <strong>{companyName}</strong>
            </span>
          )}
          <h3>{title}</h3>
          {description?.raw && (
            <div className="description">
              {documentToReactComponents(JSON.parse(description.raw))}
            </div>
          )}
          <Styled.TechList>
            {icons?.data?.map((iconData, iconIndex) => {
              const iconPath = getCustomIcon(iconData?.icon || undefined)

              if (iconPath)
                return (
                  <div
                    key={`${title} ${iconData?.name}`}
                    style={{ display: 'inline-block' }}
                  >
                    <Tada delay={1000 + iconIndex * 100}>
                      <Tooltip
                        content={iconData?.name || ''}
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
            })}
          </Styled.TechList>
        </Styled.TimelineContent>
      </Fade>
    </Styled.TimelineItem>
  )
}

export default TimelineExperience
