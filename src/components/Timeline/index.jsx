import React from "react";
import Img from "gatsby-image";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
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
import {Element} from "react-scroll";
import {useTranslation} from "react-i18next";
import Icon from "@iconify/react";
import {getIcon} from "../../utils";
import {ButtonAnchor} from "../Styled/Button";

export default function Index({edges, config}) {
    const {t} = useTranslation();

    return (
        <section id={"experience"}>
            <TimelineWrapper
                Tag="div"
                fluid={config.backgroundExperience.fluid}
                backgroundColor={`black`}
            >
                <AnchorLink to={(typeof window !== `undefined`) ? window.location.pathname + "#experience" : "#experience"}
                            title={t('sectionSkills')}>
                    <TimelineHeader>
                        <SectionTitle>{t('sectionTimeline')}</SectionTitle>
                    </TimelineHeader>
                </AnchorLink>
                <Timeline>
                    <TimelineContainer>
                        {edges.map((Experience, index) => {
                            console.log(Experience.node);
                            return (
                                <TimelineItem key={Experience.node.id}>
                                    <TimelineDot>
                                        {index === 0 && (
                                            <p className="wow tada"
                                               data-wow-delay="1s">{Experience.node.dateStart.slice(Experience.node.dateStart.lastIndexOf(' ') + 1)}</p>
                                        )}
                                    </TimelineDot>
                                    <TimelineCompany>
                                        <Img
                                            fluid={Experience.node.companyLogo.fluid}
                                            style={{maxHeight: 135, width: 230}}
                                            imgStyle={{objectFit: 'contain'}}
                                        />
                                    </TimelineCompany>
                                    <TimelineContent>
                                        <TimelineDate>
                                            <Label backgroundColor={"#43A047"} borderColor={"#43A047"} color={"white"}>
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
                                            {Experience.node.icons.data.map((icon) => {
                                                const iconPath = getIcon(icon.icon);
                                                if (iconPath)
                                                    return (
                                                        <Tooltip key={Experience.node.title + icon.name}
                                                                 className="wow tada"
                                                                 data-wow-delay="2s"
                                                                 content={icon.name}
                                                                 orientation={'top'}
                                                                 onClick={(e) => e.preventDefault()}
                                                        >
                                                            <Icon icon={iconPath} color={'#444'}
                                                                  style={{marginRight: 5}}/>
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
        </section>
    );
}
