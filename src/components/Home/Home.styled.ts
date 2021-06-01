import BackgroundImage from 'gatsby-background-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Particles from 'react-particles-js'
import styled from 'styled-components'

import '../../../static/assets/fonts/anders/css/style.css'
import '../../../static/assets/fonts/linea-font/css/linea-font.css'

export const HomeWrapper = styled(BackgroundImage)`
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
`

export const DarkWrapper = styled.div`
  background: rgba(17, 17, 17, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  & > div {
    pointer-events: none;
    & a,
    & button {
      pointer-events: all;
    }
  }
`

export const TextTitle = styled.h1`
  font-family: 'anders', 'Open Sans', 'Montserrat', 'Helvetica Neue', Helvetica,
    sans-serif;
  font-size: 4em;
  font-weight: 700;
  letter-spacing: 15px;
  color: #ececec;
  margin-bottom: 50px;
  text-align: center;
  @media screen and (max-width: 768px) {
    & {
      font-size: 3em;
    }
  }
  @media screen and (max-width: 400px) {
    & {
      font-size: 2em;
    }
  }
`

export const TextSubtitle = styled.h4`
  font-family: 'Open Sans', 'Montserrat', 'Helvetica Neue', Helvetica,
    sans-serif;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffba21;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 768px) {
    & {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 400px) {
    & {
      font-size: 16px;
    }
  }
`

export const ButtonWrapper = styled.div`
  display: block;
  text-align: center;
`

export const Scroller = styled(AnchorLink)`
  display: inline-block;
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  width: 120px;
  margin: 0 auto;
  font-size: 40px;
  text-align: center;
  color: #ebebeb;
  &:focus {
    color: inherit;
    text-decoration: none;
  }
  &:visited {
    color: rgba(255, 255, 255, 0.8);
  }
  &:hover {
    color: #ebebeb;
  }
  &:hover .scroller-text {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
    opacity: 1;
  }
  & .scroller-text {
    display: block;
    font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', Helvetica,
      sans-serif;
    font-size: 10px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #ececec;
    -webkit-transform: translateY(5px);
    -ms-transform: translateY(5px);
    transform: translateY(5px);
    opacity: 0;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
`

export const ParticleBackground = styled(Particles)`
  height: 100vh;
  width: 100vw;
  background: none;
  position: absolute;
  transition: opacity 1000ms ease;
`
