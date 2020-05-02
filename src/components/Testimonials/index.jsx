import React from 'react';
import Slider from 'react-slick';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {Element} from "react-scroll";

const Container = styled.div`
    background: #111;
    position: relative;
`;

const TestimonialsSlider = styled(Slider)`
    padding-top: 60px;
    padding-bottom: 60px;
    width: 55%;
    margin: 0 auto;
    @media (max-width: 770px) {
        & {
            width: 80%;
        } 
    }
    & .arrow-next, & .arrow-prev {
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
`;

const TestimonialBody = styled.div`
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
        font-family: "Open Sans", "Montserrat", "Helvetica Neue", Helvetica, sans-serif;
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
`;

const SliderArrowButton = styled.button`
    display: block;
    & .arrow-next:before {
        content: 'HEY';
        font-family: 'slick';
        font-size: 20px;
        line-height: 1;
        opacity: .75;
        color: white;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    & .arrow-prev:before {
        content: '\2192';
        font-family: 'slick';
        font-size: 20px;
        line-height: 1;
        opacity: .75;
        color: white;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

const SliderArrow = ({className, to, onClick}) => (
    <SliderArrowButton type="button" onClick={onClick} className={`t-slider-nav slick-${to}`} aria-label={to}>
        LOVELY
    </SliderArrowButton>
);

export default function Testimonials({edges}) {
    const sliderConfig = {
        autoplay: false,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        prevArrow: <SliderArrow to="prev"/>,
        nextArrow: <SliderArrow to="next"/>,
    };

    console.log("rendering testimonials");
    return (
        <Element name={"testimonials"}>
            <Container>
                <TestimonialsSlider {...sliderConfig}>
                    {edges.map(Testimonial => {
                        return (
                            <TestimonialBody key={Testimonial.node.id}>
                                {documentToReactComponents(Testimonial.node.testimony.json)}
                                <div className={'et-quote'}/>
                                <div>
                                    <h5 className={"referral"}>{Testimonial.node.firstName} {Testimonial.node.lastName} - {Testimonial.node.date}</h5>
                                    <h5 className={"referral-info"}>{Testimonial.node.jobTitle} - {Testimonial.node.companyName}</h5>
                                </div>
                            </TestimonialBody>)
                    })}
                </TestimonialsSlider>
            </Container>
        </Element>
    );
}
