import styled from "styled-components";
import React from "react";


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
        & > i {
          margin-right: 5px;
        }
    }
`;

export default function Skill({skill}) {
    return (
        <SkillContainer>
            <p>
                <i className={skill.icon}/>
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
