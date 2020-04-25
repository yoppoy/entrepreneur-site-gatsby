import React from "react";
import Img from "gatsby-image"
import {Link} from "gatsby";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import styled from "styled-components";
import SectionTitle from "../Styled/SectionTitle";
import Tooltip from "../Styled/Tooltip";
import "devicon/devicon.css";
import {
    Label, TechList,
    Timeline, TimelineCompany,
    TimelineContainer, TimelineContent, TimelineDate,
    TimelineDot,
    TimelineHeader,
    TimelineItem,
    TimelineWrapper
} from "./StyledComponents";

export default function Index({edges}) {
    return (
        <TimelineWrapper id="experience">
            <a href="#experience">
                <TimelineHeader href="#experience">
                    <SectionTitle>Mon expérience professionnelle</SectionTitle>
                </TimelineHeader>
            </a>
            <Timeline>
                <TimelineContainer>
                    {edges.map((Experience, index) => {
                        return (
                            <TimelineItem key={Experience.node.dateStart + Experience.node.companyName}>
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
                                                return (index === 0) ?
                                                    <strong key={word + back + index}>{back}</strong> :
                                                    <span key={word + back + index}>back</span>;
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
                        );
                    })}
                </TimelineContainer>
            </Timeline>
        </TimelineWrapper>
    );
}
