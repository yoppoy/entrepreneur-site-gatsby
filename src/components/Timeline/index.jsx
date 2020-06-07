import React from "react";
import Img from "gatsby-image";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import Fade from 'react-reveal/Fade'
import Tada from 'react-reveal/Tada'
import SectionTitle from "../Styled/SectionTitle";
import Tooltip from "../Styled/Tooltip";
import {AnchorLink} from "gatsby-plugin-anchor-links";
import {
    Label, TechList,
    Timeline, TimelineCompany,
    TimelineContainer, TimelineContent, TimelineDate,
    TimelineDot,
    TimelineHeader,
    TimelineItem,
    TimelineWrapper
} from "./StyledComponents";
import {useTranslation} from "react-i18next";
import Icon from "@iconify/react";
import {getCustomIcon} from "../../utils";

export default function Index({edges, config}) {
    const {t} = useTranslation();

    return (
        <section id={"experience"}>
            <TimelineWrapper
                Tag="div"
                fluid={config.backgroundExperience.fluid}
                backgroundColor={`black`}
            >
                <AnchorLink
                    to={(typeof window !== `undefined`) ? window.location.pathname + "#experience" : "#experience"}
                    title={t('sectionSkills')}>
                    <TimelineHeader>
                        <SectionTitle>{t('sectionTimeline')}</SectionTitle>
                    </TimelineHeader>
                </AnchorLink>
                <Timeline>
                    <TimelineContainer>
                        {edges.map((Experience, index) => {
                            return (
                                <TimelineItem key={Experience.node.id}>
                                    <TimelineDot>
                                        {index === 0 && (
                                            <Tada>
                                                <p>{Experience.node.dateStart.slice(Experience.node.dateStart.lastIndexOf(' ') + 1)}</p>
                                            </Tada>
                                        )}
                                    </TimelineDot>
                                    <TimelineCompany>
                                        <Fade ssrFadeout distance={'50px'} left={index % 2 === 0} right={index % 2 !== 0}>
                                            <Img
                                                fluid={Experience.node.companyLogo.fluid}
                                                style={{maxHeight: 135, width: 230}}
                                                imgStyle={{objectFit: 'contain'}}
                                            />
                                        </Fade>
                                    </TimelineCompany>
                                    <Fade ssrFadeout distance={'50px'} left={index % 2 !== 0} right={index % 2 === 0}
                                          delay={index * 50}>
                                        <TimelineContent>
                                            <TimelineDate>
                                                <Label backgroundColor={"#43A047"} borderColor={"#43A047"}
                                                       color={"white"}>
                                                    {Experience.node.type.split(' ').map((word, index) => {
                                                        let back = (index === Experience.node.type.split(' ') - 1) ? word : word + " ";
                                                        return (index === 0) ?
                                                            <strong key={word + back + index}>{back}</strong> :
                                                            <span key={word + back + index}>{back}</span>;
                                                    })}
                                                </Label>
                                                <Label><strong>{Experience.node.dateStart} - {Experience.node.dateEnd}</strong></Label>
                                            </TimelineDate>
                                            {Experience.node.companyLink ? (
                                                <a className={"company-name"} href={Experience.node.companyLink}
                                                   target="_blank"
                                                   rel="noopener">
                                                    <strong>{Experience.node.companyName}</strong>
                                                </a>
                                            ) : (
                                                <span
                                                    className={"company-name"}><strong>{Experience.node.companyName}</strong></span>
                                            )}
                                            <h3>{Experience.node.title}</h3>
                                            <div className={'description'}>
                                                {documentToReactComponents(Experience.node.description.json)}
                                            </div>
                                            <TechList>
                                                {Experience.node.icons.data.map((icon, iconIndex) => {
                                                    const iconPath = getCustomIcon(icon.icon);
                                                    if (iconPath)
                                                        return (
                                                            <div key={Experience.node.title + icon.name}
                                                                 style={{display: 'inline-block'}}>
                                                                <Tada delay={1000 + (iconIndex * 100)}>
                                                                    <Tooltip
                                                                        content={icon.name}
                                                                        orientation={'top'}
                                                                        onClick={(e) => e.preventDefault()}
                                                                    >
                                                                        <Icon icon={iconPath} color={'#444'}
                                                                              style={{marginRight: 5}}/>
                                                                    </Tooltip>
                                                                </Tada>
                                                            </div>
                                                        );
                                                })}
                                            </TechList>
                                        </TimelineContent>
                                    </Fade>
                                </TimelineItem>
                            );
                        })}
                    </TimelineContainer>
                </Timeline>
            </TimelineWrapper>
        </section>
    );
}
