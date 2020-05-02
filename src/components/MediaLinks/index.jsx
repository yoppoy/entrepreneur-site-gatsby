import React from "react";
import styled from "styled-components";
import "../../../static/assets/fonts/fontawesome/css/font-awesome.min.css";
import Button, {ButtonAsLink} from "../Styled/Button";

const MediaContainer = styled.div`
    background: #111;
    text-align: center;
    padding: 65px 0px;
`;

const Seperator = styled.div`
    display: inline-block;
    height: 38px;
    padding-right: 35px;
    margin-right: 35px;
    border-right: 1px solid #777;
`;


export default function MediaLinks({edges}) {
    console.log("rendering contacts");
    return (
        <section id={"social"}>
            <MediaContainer>
                {edges.map((MediaLink, index) => (
                    <React.Fragment key={MediaLink.node.id}>
                        <ButtonAsLink href={MediaLink.node.link} target="_blank">
                            {MediaLink.node.name + " "}
                            <i className={"fa " + MediaLink.node.icon}></i>
                        </ButtonAsLink>
                        {index < edges.length - 1 && <Seperator/>}
                    </React.Fragment>
                ))}
            </MediaContainer>
        </section>
    )
}
