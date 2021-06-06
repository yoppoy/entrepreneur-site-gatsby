import React, { FC, MouseEventHandler } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { HomePageTestimonial } from '@custom-types/contentfulSimplifiedTypes'

import * as Styled from './Testimonials.styled'

const SliderArrow = ({
  to,
  onClick
}: {
  to: string
  onClick?: MouseEventHandler
}) => (
  <Styled.SliderArrowButton
    type="button"
    onClick={onClick}
    className={`t-slider-nav slick-${to}`}
    aria-label={to}
  >
    LOVELY
  </Styled.SliderArrowButton>
)

type TestimonialsProps = {
  testimonials: Array<HomePageTestimonial>
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  const sliderConfig = {
    autoplay: false,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    prevArrow: <SliderArrow to="prev" />,
    nextArrow: <SliderArrow to="next" />
  }

  return (
    <section id="testimonials">
      <Styled.Container>
        <Styled.TestimonialsSlider {...sliderConfig}>
          {testimonials.map((testimonial) => {
            return (
              <Styled.TestimonialBody key={testimonial.id}>
                {testimonial?.testimony?.raw &&
                  documentToReactComponents(
                    JSON.parse(testimonial.testimony.raw)
                  )}
                <div className="et-quote" />
                <div>
                  <h5 className="referral">
                    {testimonial.firstName} {testimonial.lastName} -{' '}
                    {testimonial.date}
                  </h5>
                  <h5 className="referral-info">
                    {testimonial.jobTitle} - {testimonial.companyName}
                  </h5>
                </div>
              </Styled.TestimonialBody>
            )
          })}
        </Styled.TestimonialsSlider>
      </Styled.Container>
    </section>
  )
}

export default Testimonials
