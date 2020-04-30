import React from 'react';
import styled from "styled-components";
import {Element} from 'react-scroll';
import SectionTitle from "../Styled/SectionTitle";
import {useTranslation} from "react-i18next";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

const Wrapper = styled(Element)`
  background: #f8f8f8;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const CardWrapper = styled.div`
  margin: auto;
  @media (min-width: 1200px) {
    & {
      max-width: 1170px;
    }
  }
`;

const Card = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    width: 33.333%;
    display: inline-block;
    & > div {
        border: 1px solid #f8f8f8;
        background: #fff;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
        padding: 40px 50px;
        display: block;
        & > span{
          font-size: 64px;
          color: #111;
        }
       
    }
`;

export default function Skills({edges}) {
    const {t} = useTranslation();

    return (
        <Wrapper name={"skills"} id={"skills"}>
            <SectionTitle style={{marginBottom: 50}}>{t('sectionSkills')}</SectionTitle>
            <CardWrapper>
                {edges.map((skillCard) => {
                    return (
                        <Card key={skillCard.node.id}>
                            <div>
                                <span className={skillCard.node.icon}/>
                                {documentToReactComponents(skillCard.node.title.json)}
                            </div>
                        </Card>
                    )
                })}
            </CardWrapper>
        </Wrapper>
    );
}
