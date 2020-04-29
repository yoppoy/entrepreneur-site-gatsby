import React from "react";
import styled from "styled-components";
import BackgroundImage from 'gatsby-background-image';
import '../../../static/assets/fonts/anders/css/style.css';
import '../../../static/assets/fonts/linea-font/css/linea-font.css';
import {scroller} from 'react-scroll';
import Button, {ButtonAsLink} from "../Styled/Button";
import {Element} from "react-scroll";

const HomeWrapper = styled(BackgroundImage)`
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
`;

const DarkWrapper = styled.div`
    background: rgba(17, 17, 17, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

const TextTitle = styled.h1`
    font-family: 'anders';
    font-size: 4em;
    font-weight: 700;
    letter-spacing: 15px;
    color: #ececec;
    margin-bottom: 50px;
`;

const TextSubtitle = styled.h4`
    font-family: "Open Sans", "Montserrat", "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #ffba21;
    font-size: 24px;
    margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Scroller = styled.a`
    display: inline-block;
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
    width: 120px;
    margin: 0 auto;
    font-size: 40px;
    text-align: center;
    color: rgba(255, 255, 255,0.8);
    &:focus {
        color: inherit;
        text-decoration: none;
    }
    &:visited {
      color: rgba(255, 255, 255,0.8);
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
        font-family: "Montserrat", "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
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
`;

export default function Home({config}) {
    const scrollTo = (name) => {
        scroller.scrollTo(name, {
            duration: 800,
            smooth: "easeInOutQuad",
        });
    }
    return (
        <Element name={"home"}>
            <HomeWrapper
                Tag="section"
                fluid={config.backgroundHome.fluid}
                backgroundColor={`black`}
                id="home"
            >
                <DarkWrapper>
                    <TextSubtitle><strong>Développeur</strong> full stack <strong>JS</strong></TextSubtitle>
                    <TextTitle>Yan Poinssot</TextTitle>
                    <ButtonWrapper>
                        <ButtonAsLink href={"#skills"} style={{margin: '1em'}} onClick={() => scrollTo("timeline")}>Mes compétences</ButtonAsLink>
                        <ButtonAsLink href={"#contact"} filled={true} style={{margin: '1em'}} onClick={() => scrollTo("contact")}>Me
                            contacter</ButtonAsLink>
                    </ButtonWrapper>
                </DarkWrapper>
                <Scroller href="#services" onClick={() => scrollTo("timeline")}>
                    <span className={"scroller-text"}>Mon profil</span>
                    <span className="linea-arrows-down-double-34"></span>
                </Scroller>
            </HomeWrapper>
        </Element>
    )
}
