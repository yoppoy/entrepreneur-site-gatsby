import React, { FC } from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useTranslation } from 'react-i18next'

import { HomePageContact } from '@custom-types/contentfulSimplifiedTypes'

import SectionTitle from '../_shared/SectionTitle'
import * as Styled from './Contact.styled'

type ContactProps = {
  contacts: Array<HomePageContact>
}

const Contact: FC<ContactProps> = ({ contacts }) => {
  const { t } = useTranslation()

  return (
    <section id="contact">
      <Styled.Container>
        <SectionTitle>{t('section_contact.title')}</SectionTitle>
        <Styled.FieldContainer>
          {contacts.map((contact) => (
            <Styled.Field key={contact.id}>
              {contact.icon && <Styled.FieldIcon className={contact.icon} />}
              <Styled.FieldValue>
                <Styled.FieldHeading>{contact.heading}</Styled.FieldHeading>
                {contact?.value?.raw &&
                  documentToReactComponents(JSON.parse(contact.value.raw))}
              </Styled.FieldValue>
            </Styled.Field>
          ))}
        </Styled.FieldContainer>
      </Styled.Container>
    </section>
  )
}

export default Contact
