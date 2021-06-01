import React, { FC } from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useTranslation } from 'react-i18next'

import SectionTitle from '../_shared/SectionTitle'
import * as Styled from './Contact.styled'

type ContactProps = {
  edges: any /* @todo - graphql-codegen */
}

const Contact: FC<ContactProps> = ({ edges }) => {
  const { t } = useTranslation()

  return (
    <section id="contact">
      <Styled.Container>
        <SectionTitle>{t('sectionContact')}</SectionTitle>
        <Styled.FieldContainer>
          {edges.map((contact: any /* @todo graphql-codegen */) => (
            <Styled.Field key={contact.node.id}>
              <Styled.FieldIcon className={contact.node.icon} />
              <Styled.FieldValue>
                <Styled.FieldHeading>
                  {contact.node.heading}
                </Styled.FieldHeading>
                {documentToReactComponents(JSON.parse(contact.node.value.raw))}
              </Styled.FieldValue>
            </Styled.Field>
          ))}
        </Styled.FieldContainer>
      </Styled.Container>
    </section>
  )
}

export default Contact
