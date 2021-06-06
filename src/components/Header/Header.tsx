import React, { FC } from 'react'

import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import EnFlag from './en.svg'
import FrFlag from './fr.svg'

enum SUPPORTED_LANGUAGES {
  'FRENCH' = 'fr',
  'ENGLISH' = 'en'
}

const FLAG_MATCHER = {
  [SUPPORTED_LANGUAGES.FRENCH]: FrFlag,
  [SUPPORTED_LANGUAGES.ENGLISH]: EnFlag
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

const HeaderCustom: FC = () => {
  const { i18n } = useTranslation()
  const changeLng =
    i18n.language === SUPPORTED_LANGUAGES.FRENCH
      ? SUPPORTED_LANGUAGES.ENGLISH
      : SUPPORTED_LANGUAGES.FRENCH

  return (
    <Header>
      <Link to={`/${changeLng}`} onClick={() => i18n.changeLanguage(changeLng)}>
        <Img src={FLAG_MATCHER[changeLng]} alt={`flag ${changeLng}`} />
      </Link>
    </Header>
  )
}

export default HeaderCustom
