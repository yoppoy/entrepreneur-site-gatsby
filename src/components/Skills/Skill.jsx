import styled from "styled-components";
import React from "react";
import InlineIcon from "@iconify/react";
import {getCustomIcon} from "../../utils";

const Icon = styled(InlineIcon)`
    margin-right: 5px;
    color: rgba(0, 0, 0, 0.8);
`;

const SkillContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 30px;
    & > p {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 0.2px;
        line-height: 1.8em;
        margin-bottom: 0;
    }
`;

export default function Skill({skill}) {
    const icon = getCustomIcon(skill.icon);

    return (
        <SkillContainer>
            <p>
                {icon && <Icon color={'rgba(0, 0, 0, 0.8)'} icon={icon}/>}
                <strong>{skill.name}</strong>
            </p>
            <ol className="progress-bar-custom">
                {skill.score >= 1 ? <li className="is-complete"/> : <li/>}
                {skill.score >= 2 ? <li className="is-complete"/> : <li/>}
                {skill.score >= 3 ? <li className="is-complete"/> : <li/>}
                {skill.score >= 4 ? <li className="is-complete"/> : <li/>}
                {skill.score >= 5 ? <li className="is-complete"/> : <li/>}
            </ol>
        </SkillContainer>
    );
};
