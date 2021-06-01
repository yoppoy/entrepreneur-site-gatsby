import React, { FC } from 'react'

import * as Styled from './MediaLinks.styled'

import '@static/assets/fonts/fontawesome/css/font-awesome.min.css'

type MediaLinksProps = {
  edges: any /* @todo - graphql-codegen */
}

const MediaLinks: FC<MediaLinksProps> = ({ edges }) => {
  return (
    <section id="social" style={{ position: 'relative' }}>
      <Styled.MediaContainer>
        {edges.map((MediaLink, index) => (
          <React.Fragment key={MediaLink.node.id}>
            <Styled.Button
              href={MediaLink.node.link}
              target="_blank"
              rel="noopener"
            >
              {`${MediaLink.node.name} `}
              <i className={`fa ${MediaLink.node.icon}`} />
            </Styled.Button>
            {index < edges.length - 1 && <Styled.Seperator />}
          </React.Fragment>
        ))}
      </Styled.MediaContainer>
    </section>
  )
}

export default MediaLinks
