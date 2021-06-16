import React, { FC, useEffect, useState } from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useViewportScroll, Variants } from 'framer-motion'
import Img, { FluidObject } from 'gatsby-image'
import Tada from 'react-reveal/Tada'

import { HomePageExperience } from '@custom-types/contentfulSimplifiedTypes'

import * as Styled from '@components/Timeline/Timeline.styled'
import TimelineExperienceTechList from '@components/Timeline/TimelineExperienceTechList'
import { emboldenFirstWord, formatYearDate } from '@utils/index'

import useBoundingClientRect from '../../hooks/useBoundingClientRect'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const ANIMATION_VARIANT_TIMELINE = (right: boolean): Variants => ({
  visible: { opacity: 1, scale: 1, skew: 0 },
  hidden: { opacity: 0, scale: 0.9, skew: right ? 2 : -2 }
})

const ANIMATION_VARIANT_TIMELINE_COMPANY = (right: boolean): Variants => ({
  visible: { opacity: 1, scale: 1, y: 0, rotate: 0, skew: 0 },
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
    rotate: right ? 5 : -5,
    skew: right ? 5 : -5
  }
})

const ANIMATION_VARIANT_TIMELINE_DOT: Variants = {
  visible: { opacity: 1, y: 0, scale: [0, 1.2, 1] },
  hidden: { opacity: 0, y: 30, scale: 0 }
}

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
  const [reveal, setReveal] = useState(false)
  const { boundingRef, bounds } = useBoundingClientRect()
  const { scrollY } = useViewportScroll()
  const { height } = useWindowDimensions()

  useEffect(() => {
    const updateReveal = (value: number) => {
      if (bounds?.y) {
        const scrollKeyPosition = bounds.y - height * 0.8

        if (!reveal && value >= scrollKeyPosition) {
          setReveal(true)
        } else if (reveal && value < scrollKeyPosition) {
          setReveal(false)
        }
      }
    }

    updateReveal(window.scrollY)

    scrollY.onChange(updateReveal)
  }, [scrollY, bounds, setReveal, reveal, height])

  return (
    <Styled.TimelineItem ref={boundingRef}>
      <Styled.TimelineDot
        initial="hidden"
        animate={reveal ? 'visible' : 'hidden'}
        variants={ANIMATION_VARIANT_TIMELINE_DOT}
        transition={{ duration: 0.3 }}
      >
        {index === 0 && (
          <Tada>
            <p>
              {dateEnd
                ? formatYearDate(dateEnd)
                : dateStart && formatYearDate(dateStart)}
            </p>
          </Tada>
        )}
      </Styled.TimelineDot>
      {companyLogo?.fluid && (
        <Styled.TimelineCompany
          initial="hidden"
          animate={reveal ? 'visible' : 'hidden'}
          variants={ANIMATION_VARIANT_TIMELINE_COMPANY(index % 2 === 0)}
          transition={{ duration: 0.3 }}
          style={{
            transformOrigin: index % 2 === 0 ? 'left' : 'right'
          }}
        >
          <Img
            fluid={companyLogo.fluid as FluidObject | FluidObject[]}
            style={{ maxHeight: 135, width: 230 }}
            imgStyle={{ objectFit: 'contain' }}
          />
        </Styled.TimelineCompany>
      )}
      <Styled.TimelineContent
        initial="hidden"
        animate={reveal ? 'visible' : 'hidden'}
        variants={ANIMATION_VARIANT_TIMELINE(index % 2 === 0)}
        transition={{ duration: 0.4 }}
        style={{
          transformOrigin: index % 2 === 0 ? 'right 30px' : 'left 30px'
        }}
      >
        <Styled.TimelineDate>
          {type && (
            <Styled.Label
              backgroundColor="#43A047"
              borderColor="#43A047"
              color="white"
            >
              {emboldenFirstWord(type)}
            </Styled.Label>
          )}
          <Styled.Label>
            <strong>{`${dateStart} - ${dateEnd}`}</strong>
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
        <TimelineExperienceTechList icons={icons} title={title} />
      </Styled.TimelineContent>
    </Styled.TimelineItem>
  )
}

export default TimelineExperience
