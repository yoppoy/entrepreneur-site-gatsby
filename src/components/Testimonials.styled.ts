import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Container = styled.div`
  background: #111;
`

export const TestimonialsSlider = styled(Slider)`
  padding-top: 60px;
  padding-bottom: 60px;
  width: 55%;
  margin: 0 auto;
  background: rgba(17, 17, 17, 0.7);
  @media (max-width: 770px) {
    & {
      width: 80%;
    }
  }
  & .arrow-next,
  & .arrow-prev {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  & .slick-track {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & p {
    margin-bottom: 0;
    font-size: 1.4em;
    line-height: 1.6em;
    color: #ececec;
  }
`

export const TestimonialBody = styled.div`
  text-align: center;
  align-self: center;
  padding-left: 20px;
  padding-right: 20px;
  outline: none;
  & * {
    color: white !important;
  }
  & .et-quote {
    display: block;
    padding-top: 25px;
    padding-bottom: 25px;
    font-size: 34px;
  }
  & .referral {
    font-family: 'Open Sans', 'Montserrat', 'Helvetica Neue', Helvetica,
      sans-serif;
    font-weight: 300;
    margin-bottom: 10px;
    font-size: 1em;
    line-height: 1.1;
    letter-spacing: 2px;
    font-weight: 300;
    text-transform: uppercase;
  }
  & .referral-info {
    font-size: 1em;
    letter-spacing: 2px;
    font-weight: 300;
    text-transform: uppercase;
  }
`

export const SliderArrowButton = styled.button`
  display: block;
  & .arrow-next:before {
    content: 'HEY';
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  & .arrow-prev:before {
    content: '\2192';
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
