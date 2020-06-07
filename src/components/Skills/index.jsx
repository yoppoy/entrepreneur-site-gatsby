import React from 'react';
import styled from "styled-components";
import SectionTitle from "../Styled/SectionTitle";
import Fade from 'react-reveal/Fade'
import {useTranslation} from "react-i18next";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import "./ProgressBar.css"
import Skill from "./Skill";

const Wrapper = styled.section`
  background: #f8f8f8;
  padding-top: 100px;
  padding-bottom: 100px;
  position:relative;
`;

const CardWrapper = styled.div`
  margin: auto;
  @media (min-width: 1200px) {
    & {
      max-width: 1200px;
    }
  }
  & > .div {
    padding: 15px;
    width: 33.333%;
    display: inline-block;
    vertical-align: top;
  }
`;

const Card = styled.div`
    padding: 15px;
    width: 33.333%;
    display: inline-block;
    vertical-align: top;
    @media (max-width: 900px) {
        & {
          width: 100%;
          padding-left: 80px;
          padding-right: 80px;
        }
    }
    @media (max-width: 500px) {
        & {
          padding-left: 15px;
          padding-right: 15px;
        }
    }
    & > div {
        border: 1px solid #f8f8f8;
        background: #fff;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
        padding: 40px 50px;
        display: block;
        & > span {
            font-size: 64px;
            color: #111;
        }
        & > h4 {
            margin-top: 40px;
            height: 35px;
            margin-bottom: 20px;
            font-size: 1.07em;
            letter-spacing: 3px;
            font-weight: 300;
            font-family: "Montserrat", "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
            color: #111;
            text-transform: uppercase;
        }
    }
`;

export default function Skills({edges}) {
    const {t} = useTranslation();

    return (
        <Wrapper id={"skills"}>
            <SectionTitle style={{marginBottom: 50}}>{t('sectionSkills')}</SectionTitle>
            <CardWrapper>
                {edges.map((skillCard, index) => {
                    return (
                        <Card key={skillCard.node.id}>
                            <Fade ssrFadeout bottom delay={index * 100} distance={'100px'}>
                                <div>
                                    <span className={skillCard.node.icon}/>
                                    {documentToReactComponents(skillCard.node.title.json)}
                                    <div>
                                        {skillCard.node.data.map((skill) => <Skill key={skill.name} skill={skill}/>)}
                                    </div>
                                </div>
                            </Fade>
                        </Card>
                    )
                })}
            </CardWrapper>
        </Wrapper>
    );
}
