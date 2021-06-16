import React, { FC } from 'react'

import Icon from '@iconify/react'
import Tada from 'react-reveal/Tada'

import { HomePageExperience } from '@custom-types/contentfulSimplifiedTypes'

import Tooltip from '@components/_shared/Tooltip'
import * as Styled from '@components/Timeline/Timeline.styled'
import getCustomIcon from '@utils/simple-icons'

type TimelineExperienceTechListProps = Pick<
  HomePageExperience,
  'title' | 'icons'
>

const TimelineExperienceTechList: FC<TimelineExperienceTechListProps> = ({
  title,
  icons
}) => {
  return (
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
  )
}

export default TimelineExperienceTechList
