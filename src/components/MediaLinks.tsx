import React, { FC } from 'react'

import { HomePageMediaLink } from '@custom-types/contentfulSimplifiedTypes'

import * as Styled from './MediaLinks.styled'

import '@static/assets/fonts/fontawesome/css/font-awesome.min.css'

type MediaLinksProps = {
  links: Array<HomePageMediaLink>
}

const MediaLinks: FC<MediaLinksProps> = ({ links }) => {
  return (
    <section id="social" style={{ position: 'relative' }}>
      <Styled.MediaContainer>
        {links.map((mediaLink, index) => (
          <React.Fragment key={mediaLink.id}>
            {mediaLink.link && (
              <Styled.ButtonLink
                href={mediaLink.link}
                target="_blank"
                rel="noopener"
              >
                {`${mediaLink.name} `}
                <i className={`fa ${mediaLink.icon}`} />
              </Styled.ButtonLink>
            )}
            {index < links.length - 1 && <Styled.Seperator />}
          </React.Fragment>
        ))}
      </Styled.MediaContainer>
    </section>
  )
}

export default MediaLinks
