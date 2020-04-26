import React from "react";
import styled from "styled-components";
import "../../../static/assets/fonts/fontawesome/css/font-awesome.min.css";

const MediaContainer = styled.div`
    background: #111;
    text-align: center;
    padding: 65px 0px;
`;

const MediaButton = styled.a`
    position: relative;
    display: inline-block;
    padding: 8px 38px;
    font-family: "Montserrat", "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-size: 0.75em;
    line-height: 1.8em;
    border-radius: 0;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    background: none;
    color: white;
    border: 2px solid white;
    overflow: hidden;
    z-index: 1;
    &:visited {
      color: #ececec;
      background: white;
    }
    &:visited:hover {
        color: #ececec;
        background: #3f3f3f;
    }
    &:hover:visited {
      color: black;
      text-decoration: none;
    }
    &:focus:visited {
        border-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
    }
    &:hover:after {
      top: 0;
    }
    &:focus {
        color: #ececec;
        outline: none;
    }
    &:after {
        content: '';
        position: absolute;
        background: white;
        left: 0;
        top: 100%;
        width: 100%;
        height: 100%;
        -webkit-transition: top 0.3s;
        transition: top 0.3s;
        z-index: -1;
    }
    &:visited {
        color: white;
        text-decoration: none;
    }
`;

const Seperator = styled.div`
    display: inline-block;
    height: 38px;
    padding-right: 35px;
    margin-right: 35px;
    border-right: 1px solid #777;
`;


export default function MediaLinks({edges}) {
    return (
        <div id={"social-media"}>
            <MediaContainer>
                {edges.map((MediaLink, index) => (
                    <React.Fragment key={MediaLink.node.id}>
                        <MediaButton href={MediaLink.node.link} target="_blank">
                            {MediaLink.node.name + " "}
                            <i className={"fa " + MediaLink.node.icon}></i>
                        </MediaButton>
                        {index < edges.length - 1 && <Seperator/>}
                    </React.Fragment>
                ))}
            </MediaContainer>
        </div>
    )
}
