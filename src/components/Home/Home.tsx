import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { Fade } from 'react-reveal'

import { ButtonAnchor } from '@components/_shared/Button'
import Header from '@components/Header/Header'
import particleConfig from '@utils/particles'

import * as Styled from './Home.styled'

import '@static/assets/fonts/anders/css/style.css'
import '@static/assets/fonts/linea-font/css/linea-font.css'

type HomeProps = {
  config: {
    backgroundHome: {
      fluid: any
    }
    backgroundExperience: {
      fluid: any
    }
  } /* @todo - graphql-codegen */
}

const Home: FC<HomeProps> = ({ config }) => {
  const { t } = useTranslation()

  return (
    <Styled.HomeWrapper
      Tag="section"
      fluid={config.backgroundHome.fluid}
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
            <strong>{t('jobTitle')}</strong>
          </Styled.TextSubtitle>
        </Fade>
        <Fade ssrReveal top distance="30px">
          <Styled.TextTitle>Yan Poinssot</Styled.TextTitle>
        </Fade>
        <Fade ssrReveal delay={500}>
          <Styled.ButtonWrapper>
            <ButtonAnchor
              to={
                typeof window !== `undefined`
                  ? `${window.location.pathname}#skills`
                  : '#skills'
              }
              title={t('sectionSkills')}
            >
              {t('sectionSkills')}
            </ButtonAnchor>
            <ButtonAnchor
              to={
                typeof window !== `undefined`
                  ? `${window.location.pathname}#contact`
                  : '#contact'
              }
              title={t('sectionContact')}
              filled
            >
              {t('sectionContact')}
            </ButtonAnchor>
          </Styled.ButtonWrapper>
        </Fade>
      </Styled.DarkWrapper>
      <Styled.Scroller
        to={
          typeof window !== `undefined`
            ? `${window.location.pathname}#skills`
            : '#skills'
        }
      >
        <Fade ssrReveal delay={1000}>
          <span className="scroller-text">{t('profile')}</span>
          <span className="linea-arrows-down-double-34" />
        </Fade>
      </Styled.Scroller>
    </Styled.HomeWrapper>
  )
}

export default Home
