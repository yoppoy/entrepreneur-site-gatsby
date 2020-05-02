import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useTranslation} from 'react-i18next';
import BackgroundImage from 'gatsby-background-image';
import '../../../static/assets/fonts/anders/css/style.css';
import '../../../static/assets/fonts/linea-font/css/linea-font.css';
import {Particles} from 'react-particles-js';
import {ButtonAnchor} from "../Styled/Button";

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
    font-family: "anders", "Open Sans", "Montserrat", "Helvetica Neue", Helvetica, sans-serif;
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

const ParticleBackground = styled(Particles)`
    height: 100vh;
    width: 100vw;
    background: none;
    position: fixed;
    opacity: ${props => props.visible ? 1 : 0};
    transition: opacity 1000ms ease;
`;

export default function Home({config}) {
    const {t} = useTranslation();
    const [particlesVisible, setVisibleParticles] = useState(false);
    const particleConfig = {
        particles: {
            number: {
                value: (typeof window !== `undefined`) ? window.innerWidth / 20 : 50,
            },
            shape: {
                type: [
                    "image",
                ],
                image: [
                    {
                        src: require('./react-icon.png'),
                        height: 40,
                        width: 40
                    },
                    {
                        src: require('./gatsby-icon.png'),
                        height: 40,
                        width: 40
                    },
                    {
                        src: require('./redux-icon.png'),
                        height: 40,
                        width: 40
                    },
                    {
                        src: require('./docker-icon.png'),
                        height: 40,
                        width: 40
                    },
                    {
                        src: require('./material-icon.png'),
                        height: 40,
                        width: 40
                    },
                    {
                        src: require('./graphql-icon.png'),
                        height: 40,
                        width: 40
                    },
                    {
                        src: require('./typescript-icon.png'),
                        height: 40,
                        width: 40
                    },
                    {
                        src: require('./nodejs-icon.png'),
                        height: 40,
                        width: 40
                    },
                ]
            },
            color: {
                "value": "#FFF"
            },
            opacity: {
                value: 0.75,
                random: false,
                anim: {
                    speed: 1,
                    opacity_min: 0.5,
                    sync: false
                }
            },
            line_linked: {
                "distance": 60
            },
            size: {
                value: 13,
                random: false,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 10,
                    sync: false
                }
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
            }
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setVisibleParticles(true);
        }, 200);
    });

    const scrollTo = (name) => {
        scroller.scrollTo(name, {
            duration: 800,
            smooth: "easeInOutQuad",
        });
    };

    return (
        <HomeWrapper
            Tag="section"
            fluid={config.backgroundHome.fluid}
            backgroundColor={`black`}
            id="home"
        >
            <ParticleBackground params={particleConfig} visible={particlesVisible}/>
            <DarkWrapper>
                <TextSubtitle>
                    <strong>{t('jobTitle')}</strong>
                </TextSubtitle>
                <TextTitle>Yan Poinssot</TextTitle>
                <ButtonWrapper>
                    <ButtonAnchor
                        to={(typeof window !== `undefined`) ? window.location.pathname + "#skills" : "#skills"}
                        title={t('sectionSkills')}>
                        {t('sectionSkills')}
                    </ButtonAnchor>
                    <ButtonAnchor
                        to={(typeof window !== `undefined`) ? window.location.pathname + "#contact" : "#contact"}
                        title={t('sectionContact')}
                        filled={true}
                    >
                        {t('sectionContact')}
                    </ButtonAnchor>
                </ButtonWrapper>
            </DarkWrapper>
            <Scroller href="#services">
                <span className={"scroller-text"}>{t('profile')}</span>
                <span className="linea-arrows-down-double-34"></span>
            </Scroller>
        </HomeWrapper>
    )
}
