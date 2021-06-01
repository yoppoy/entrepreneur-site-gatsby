import React from 'react'

import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import EnFlag from '@static/assets/icons/flags/en.svg'
import FrFlag from '@static/assets/icons/flags/fr.svg'

const FLAG_MATCHER = {
  fr: FrFlag,
  en: EnFlag
}

const Header = styled.div`
  position: absolute;
  right: 0;
  padding: 10px 12px;
  z-index: 1030;
  background: rgba(0, 0, 0, 0.1);
  height: 48px;
`

const Img = styled.img`
  width: 28px;
  margin: 0;
`

export default function HeaderCustom() {
  const { i18n } = useTranslation()
  const changeLng = i18n.language === 'fr' ? 'en' : 'fr'

  return (
    <Header>
      <Link to={`/${changeLng}`} onClick={() => i18n.changeLanguage(changeLng)}>
        <Img src={FLAG_MATCHER[changeLng]} alt={`flag ${changeLng}`} />
      </Link>
    </Header>
  )
}
