import React from "react";
import styled from "styled-components";
import "../../../static/assets/fonts/fontawesome/css/font-awesome.min.css";
import {ButtonAsLink} from "../Styled/Button";

const MediaContainer = styled.div`
    background: #111;
    text-align: center;
    padding: 65px 0px;
`;

const Button = styled(ButtonAsLink)`
  margin: 5px;
`;

const Seperator = styled.div`
    display: inline-block;
    height: 38px;
    padding-right: 20px;
    margin: 5px 20px 5px 5px;
    border-right: 1px solid #777;
     @media screen and (max-width: 450px) {
        & {
            display: none;
        }
    }
`;


export default function MediaLinks({edges}) {
    return (
        <section id={"social"}>
            <MediaContainer>
                {edges.map((MediaLink, index) => (
                    <React.Fragment key={MediaLink.node.id}>
                        <Button href={MediaLink.node.link} target="_blank">
                            {MediaLink.node.name + " "}
                            <i className={"fa " + MediaLink.node.icon}></i>
                        </Button>
                        {index < edges.length - 1 && <Seperator/>}
                    </React.Fragment>
                ))}
            </MediaContainer>
        </section>
    )
}
