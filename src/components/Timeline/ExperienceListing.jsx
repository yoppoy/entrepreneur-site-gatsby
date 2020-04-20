import React from "react";
import {Link} from "gatsby";

export default function ExperienceListing({ExperienceEdges}) {
    const getExperienceList = () => {
        const ExperienceList = [];
        ExperienceEdges.forEach(ExperienceEdge => {
            ExperienceList.push({
                title: ExperienceEdge.node.frontmatter.title,
                description: ExperienceEdge.node.frontmatter.description,
                logo: ExperienceEdge.node.frontmatter.employerLogo
            });
        });
        return ExperienceList;
    };

    const ExperienceList = getExperienceList();
    return (
        <div>
            {ExperienceList.map(Experience => (
                <div>
                    <h1>{Experience.title}</h1>
                    <p>{Experience.description}</p>
                    <img src={Experience.logo}/>
                </div>
            ))}
        </div>
    );
}
