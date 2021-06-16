import React, { FC } from 'react'

import { FluidObject } from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import Fade from 'react-reveal/Fade'

import { HomePageSiteConfiguration } from '@custom-types/contentfulSimplifiedTypes'

import { ButtonAnchor } from '@components/_shared/Button'
import Header from '@components/Header/Header'
import { isBrowser } from '@utils/index'
import particleConfig from '@utils/particles'

import * as Styled from './Home.styled'

import '@static/assets/fonts/anders/css/style.css'
import '@static/assets/fonts/linea-font/css/linea-font.css'

type HomeProps = {
  background?: HomePageSiteConfiguration['backgroundHome']
}

const Home: FC<HomeProps> = ({ background }) => {
  const { t } = useTranslation()

  return (
    <>
      {background?.fluid && (
        <Styled.HomeWrapper
          Tag="section"
          fluid={background.fluid as FluidObject | FluidObject[]}
          backgroundColor="black"
          id="home"
        >
          <Fade ssrReveal delay={100}>
            <Styled.ParticleBackground params={particleConfig} />
          </Fade>
          <Fade ssrReveal delay={100}>
            <Header />
          </Fade>
          <Styled.DarkWrapper>
            <Fade ssrReveal delay={100} bottom distance="20px">
              <Styled.TextSubtitle>
                <strong>{t('job_title')}</strong>
              </Styled.TextSubtitle>
            </Fade>
            <Fade ssrReveal top distance="30px">
              <Styled.TextTitle>Yan Poinssot</Styled.TextTitle>
            </Fade>
            <Fade ssrReveal delay={500}>
              <Styled.ButtonWrapper>
                <ButtonAnchor
                  to={
                    isBrowser ? `${window.location.pathname}#skills` : '#skills'
                  }
                  title={t('section_skills.title')}
                >
                  {t('section_skills.title')}
                </ButtonAnchor>
                <ButtonAnchor
                  to={
                    isBrowser
                      ? `${window.location.pathname}#contact`
                      : '#contact'
                  }
                  title={t('section_contact.title')}
                  filled
                >
                  {t('section_contact.title')}
                </ButtonAnchor>
              </Styled.ButtonWrapper>
            </Fade>
          </Styled.DarkWrapper>
          <Styled.Scroller
            to={isBrowser ? `${window.location.pathname}#skills` : '#skills'}
          >
            <Fade ssrReveal delay={1000}>
              <span className="scroller-text">{t('profile')}</span>
              <span className="linea-arrows-down-double-34" />
            </Fade>
          </Styled.Scroller>
        </Styled.HomeWrapper>
      )}
    </>
  )
}

export default Home
