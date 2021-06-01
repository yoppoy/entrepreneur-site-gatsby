import React, { FC, MouseEventHandler } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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
  edges: any /* @todo - graphql-codegen */
}

const Testimonials: FC<TestimonialsProps> = ({ edges }) => {
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
          {edges.map((Testimonial: any) => {
            return (
              <Styled.TestimonialBody key={Testimonial.node.id}>
                {documentToReactComponents(
                  JSON.parse(Testimonial.node.testimony.raw)
                )}
                <div className="et-quote" />
                <div>
                  <h5 className="referral">
                    {Testimonial.node.firstName} {Testimonial.node.lastName} -{' '}
                    {Testimonial.node.date}
                  </h5>
                  <h5 className="referral-info">
                    {Testimonial.node.jobTitle} - {Testimonial.node.companyName}
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
