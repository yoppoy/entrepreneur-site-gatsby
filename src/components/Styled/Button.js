import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const ButtonAsLink = styled.a`
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
    background: ${props => props.filled ? 'white' : 'none'};
    color: ${props => props.filled ? 'black' : 'white'};
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
         color: ${props => props.filled ? 'black' : 'white'};
        text-decoration: none;
    }
`;


export const ButtonAnchor = styled(AnchorLink)`
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
    background: ${props => props.filled ? 'white' : 'none'};
    color: ${props => props.filled ? 'black' : 'white'};
    border: 2px solid white;
    overflow: hidden;
    z-index: 1;
    margin: 1em;
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
        background: ${props => props.filled ? '#f8f8f8' : 'white'};
        left: 0;
        top: 100%;
        width: 100%;
        height: 100%;
        -webkit-transition: top 0.3s;
        transition: top 0.3s;
        z-index: -1;
    }
    &:visited {
         color: ${props => props.filled ? 'black' : 'white'};
        text-decoration: none;
    }
    &:hover {
      color: #111;
    }
`;

const Button = styled.button`
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
    &:active {
      color: black;
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

export default Button;
