import React from "react";
import Img from "gatsby-image"
import {Link} from "gatsby";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import styled from "styled-components";
import SectionTitle from "../Styled/SectionTitle";
import Tooltip from "../Styled/Tooltip";
import "devicon/devicon.css";

const TimelineHeader = styled.div`
    margin-bottom: 0px;
    padding: 20px 0px;
    text-align: center;
    background: ${props => props.theme.colors.primary};
    & h2 {
        margin-bottom: 0px;
    } 
`;

const TimelineWrapper = styled.div`
    background: url(http://178.62.87.154//assets/images/shanghai.jpg);
    background-size: cover;
    background-position: center right;
    background-attachment: fixed;
`;

const Timeline = styled.div`
    position: relative;
    background: rgba(17, 17, 17, .6);
    &:before {
        content: '';
        background: ${props => props.theme.colors.primary};
        width: 5px;
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    @media screen and (max-width: 768px) {
        &:before {
            left: 50px;
        }
    }
`;

const TimelineContainer = styled.div`
    padding: 15px;
    padding-top: 50px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 768px) {
            width: 750px;
        }
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
    &:before {
        content: " ";
        display: table;
    }
`;

const TimelineItem = styled.div`
    width: 100%;
    margin-bottom: 30px;
    position: relative;
    &:after {
        content: '';
        display: block;
        clear: both;
    }
`;

const TimelineContent = styled.div`
    position: relative;
    width: 45%;
    padding: 10px 30px;
    background: #f5f5f5;
    box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
    ${TimelineItem}:nth-child(even) & {
        float: right;
        padding: 10px 30px;
    }
    &:after {
        content: '';
        position: absolute;
        border-style: solid;
        width: 0;
        height: 0;
        top: 22px;
        right: -15px;
        border-width: 10px 0 10px 15px;
        border-color: transparent transparent transparent #f5f5f5;
    }
    ${TimelineItem}:nth-child(even) &:after {
        content: '';
        position: absolute;
        border-style: solid;
        width: 0;
        height: 0;
        top: 25px;
        left: -15px;
        border-width: 10px 15px 10px 0;
        border-color: transparent #f5f5f5 transparent transparent;
    }
    & > .company-name {
        display: inline-block;
        font-family: Montserrat,"Open Sans","Helvetica Neue",Helvetica,sans-serif;
        font-size: 1.07em;
        letter-spacing: 3px;
        text-transform: uppercase;
        line-height: 1.8em;
        margin-top: 20px;
        color: ${props => props.theme.colors.primary};
    }
    & > h3 {
        margin-top: 10px;
        font-family: "Montserrat", "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
        color: #111;
        text-transform: uppercase;
        font-weight: 500;
        line-height: 1.1;
        font-size: 1.3em;
        letter-spacing: 3.5px;
    }  
    & > .description p, & > .description ul {
        margin-bottom: 10px;
    }
    & > .description li p, & > .description li {
        margin-bottom: 0px;
    }
    & > .description p, & > .description ul, & > .description ul li {
        color: #777;
    }
    @media screen and (max-width: 768px) {
        max-width: 100%;
        width: auto;
        margin-left: 70px;
        ${TimelineItem}:nth-child(even) & {
            float: none;
        }
        ${TimelineItem}:nth-child(odd) &:after {
            content: '';
            position: absolute;
            border-style: solid;
            width: 0;
            height: 0;
            top: 22px;
            left: -15px;
            border-width: 10px 15px 10px 0;
            border-color: transparent #f5f5f5 transparent transparent;
        }
    }
`;

const TimelineDate = styled.div`
    line-height: 1.7;
    ${TimelineItem}:nth-child(even) & {
        right: auto;
        left: 0;
        text-align: left;
    }
    @media screen and (max-width: 768px) {   
        text-align: left;
    }
    text-align: right;
    margin-top: 8px;
    font-size: 15px;
`;

const TimelineDot = styled.div`
    width: 30px;
    height: 30px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-top: 17px;
    margin-left: -15px;
    & > p {
        font-weight: bold;
        margin-top: 3px;
        color: white;
        font-size: 10px;
        text-align: center;
        visibility: visible;
        margin: 5px 0 10px;
    }
    & > img {
        margin-bottom: 0px;
    }
    @media screen and (max-width: 768px) {
        left: 35px;
    }
`;

const TimelineCompany = styled.div`
    position: absolute;
    top: 5%;
    margin-left: 34px;
    margin-right: 34px;
    ${TimelineItem}:nth-child(odd) & {
        left:50%;
    }
    ${TimelineItem}:nth-child(even) & {
        right:50%;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const TechList = styled.div`
    display: inline;
    font-weight: bold;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    letter-spacing: 4px;
    color: black;
    font-size: 100%;
    padding: 0px;
    margin: 0px;
    vertical-align: middle;
    border-radius: 0;
    & i {
        color: #444
    }
`;


const Label = styled.div`
    display: inline;
    font-size: 75%;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0;
    padding: 0.1em 0.5em 0.2em;
    margin-right: 3px;
    margin-bottom: 1px;
    border: 2px solid #111;
    background: ${props => props.backgroundColor ? props.backgroundColor : "none"};
    color: ${props => props.color ? props.color : "black"};
    border-color: ${props => props.borderColor ? props.borderColor : "black"};
`;

const TimelineTagContainer = styled.div`
    margin-bottom: 10px;
`;

export default function ExperienceListing({ExperienceEdges}) {
    return (
        <TimelineWrapper id="experience">
            <a href="#experience">
                <TimelineHeader href="#experience">
                    <SectionTitle>Mon expérience professionnelle</SectionTitle>
                </TimelineHeader>
            </a>
            <Timeline>
                <TimelineContainer>
                    {ExperienceEdges.map((Experience, index) => {
                        console.log("---> ", Experience.node.icons.data);
                        return (
                            <TimelineItem>
                                <TimelineDot>
                                    {index === 0 && (
                                        <p className="wow tada"
                                           data-wow-delay="1s">{Experience.node.dateStart.slice(Experience.node.dateStart.lastIndexOf(' ') + 1)}</p>
                                    )}
                                </TimelineDot>
                                <TimelineCompany>
                                    <img alt="Air Liquide"
                                         style={{maxHeight: 135}}
                                         src={Experience.node.companyLogo.fixed.src}/>{/*TODO REPLACE WITH IMG*/}
                                </TimelineCompany>
                                <TimelineContent>
                                    <TimelineDate>
                                        <Label backgroundColor={"#43A047"} borderColor={"#43A047"} color={"white"}>
                                            {Experience.node.type.split(' ').map((word, index) => {
                                                let back = (index === Experience.node.type.split(' ') - 1) ? word : word + " ";
                                                return (index === 0) ? <strong>{back}</strong> : back;
                                            })}
                                        </Label>
                                        <Label><strong>{Experience.node.dateStart} - {Experience.node.dateEnd}</strong></Label>
                                    </TimelineDate>
                                    {Experience.node.companyLink ? (
                                        <a className={"company-name"} href={Experience.node.companyLink} target="_blank"
                                           rel="noopener">
                                            <strong>{Experience.node.companyName}</strong>
                                        </a>
                                    ) : (
                                        <span className={"company-name"}><strong>{Experience.node.companyName}</strong></span>
                                    )}
                                    <h3>{Experience.node.title}</h3>
                                    <div className={'description'}>
                                        {documentToReactComponents(Experience.node.description.json)}
                                    </div>
                                    <TechList>
                                        {Experience.node.icons.data.map((icon) => {
                                            return (
                                                <Tooltip key={Experience.node.title + icon.name}
                                                         className="wow tada"
                                                         data-wow-delay="2s"
                                                         data-position="top"
                                                         content={icon.name}
                                                         orientation={'top'}
                                                         onClick={(e) => e.preventDefault()}
                                                >
                                                    <i className={"devicon-" + icon.icon}/>
                                                </Tooltip>
                                            );
                                        })}
                                    </TechList>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })}
                </TimelineContainer>
            </Timeline>
        </TimelineWrapper>
    );
}
