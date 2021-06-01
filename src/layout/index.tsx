import React, { FC } from 'react'

import Helmet from 'react-helmet'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from 'styled-components'

import SEO from '@components/SEO'
import config from '@data/SiteConfig'
import i18n from '@i18n/config'
import theme from '@utils/theme'

import './index.css'

type MainLayoutProps = {
  locale: string
}

const MainLayout: FC<MainLayoutProps> = ({ children, locale }) => {
  const lng = locale || 'fr'

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang={lng} />
      </Helmet>
      <SEO />
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ThemeProvider>
  )
}

export default MainLayout
