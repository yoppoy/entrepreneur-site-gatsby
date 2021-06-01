import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

export const TimelineHeader = styled.div`
  margin-bottom: 0;
  padding: 20px 0;
  text-align: center;
  background: ${(props) => props.theme.colors.primary};
  & h2 {
    margin-bottom: 0;
  }
`

export const TimelineWrapper = styled(BackgroundImage)`
  position: absolute;
  background-size: cover;
  background-position: center right;
  background-attachment: fixed;
`

export const Timeline = styled.div`
  position: relative;
  background: rgba(17, 17, 17, 0.6);
  &:before {
    content: '';
    background: ${(props) => props.theme.colors.primary};
    width: 5px;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 768px) {
    &:before {
      left: 35px;
    }
  }
`

export const TimelineContainer = styled.div`
    padding: 50px 15px 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 768px) {
            min-width: 750px;
            width: 90%;
        }
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
    @media screen and (max-width: 768px) {
        & {
            padding-left: 0px;
        }
    }
    &:before {
        content: " ";
        display: table;
    }
`

export const TimelineItem = styled.div`
  width: 100%;
  margin-bottom: 30px;
  position: relative;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`

export const TimelineContent = styled.div`
  position: relative;
  width: 45%;
  padding: 10px 30px;
  background: #f5f5f5;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
  ${TimelineItem}:nth-child (even) & {
    float: right;
    padding: 10px 30px;
  }
  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    width: 0;
    height: 0;
    top: 22px;
    right: -15px;
    border-width: 10px 0 10px 15px;
    border-color: transparent transparent transparent #f5f5f5;
  }
  ${TimelineItem}:nth-child (even) &:after {
    content: '';
    position: absolute;
    border-style: solid;
    width: 0;
    height: 0;
    top: 25px;
    left: -15px;
    border-width: 10px 15px 10px 0;
    border-color: transparent #f5f5f5 transparent transparent;
  }
  & > .company-name {
    display: inline-block;
    font-family: Montserrat, 'Open Sans', 'Helvetica Neue', Helvetica,
      sans-serif;
    font-size: 1.07em;
    letter-spacing: 3px;
    text-transform: uppercase;
    line-height: 1.8em;
    margin-top: 20px;
    color: ${(props) => props.theme.colors.primary};
  }
  & > h3 {
    margin-top: 10px;
    font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', Helvetica,
      sans-serif;
    color: #111;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1.1;
    font-size: 1.3em;
    letter-spacing: 3.5px;
  }
  & > .description p,
  & > .description ul {
    margin-bottom: 10px;
  }
  & > .description li p,
  & > .description li {
    margin-bottom: 0px;
  }
  & > .description p,
  & > .description ul,
  & > .description ul li {
    color: #777;
  }
  @media screen and (max-width: 768px) {
    & {
      max-width: 100%;
      width: auto;
      margin-left: 70px;
    }
    ${TimelineItem}:nth-child (even) & {
      float: none;
    }
    ${TimelineItem}:nth-child (odd) &:after {
      content: '';
      position: absolute;
      border-style: solid;
      width: 0;
      height: 0;
      top: 22px;
      left: -15px;
      border-width: 10px 15px 10px 0;
      border-color: transparent #f5f5f5 transparent transparent;
    }
  }
`

export const TimelineDate = styled.div`
  line-height: 1.7;
  margin-right: -20px;
  ${TimelineItem}:nth-child (even) & {
    right: auto;
    left: 0;
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    text-align: left;
  }
  text-align: right;
  margin-top: 8px;
  font-size: 15px;
`

export const TimelineDot = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-top: 17px;
  margin-left: -15px;
  & > p {
    font-weight: bold;
    color: white;
    font-size: 10px;
    text-align: center;
    visibility: visible;
    margin: 5px 0 10px;
  }
  & > img {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 768px) {
    left: 35px;
  }
`

export const TimelineCompany = styled.div`
  position: absolute;
  top: 5%;
  margin-left: 34px;
  margin-right: 34px;
  ${TimelineItem}:nth-child (odd) & {
    left: 50%;
  }
  ${TimelineItem}:nth-child (even) & {
    right: 50%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const TechList = styled.div`
  display: inline;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 4px;
  color: black;
  font-size: 100%;
  padding: 0;
  margin: 0;
  vertical-align: middle;
  border-radius: 0;
  & i {
    color: #444;
  }
`

export const Label = styled.div<{
  backgroundColor?: string
  borderColor?: string
}>`
  display: inline-block;
  font-size: 75%;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0;
  padding: 0.3em 0.4em 0.4em 0.4em;
  margin-right: 3px;
  margin-bottom: 1px;
  background: ${(props) => props.backgroundColor ?? 'none'};
  color: ${(props) => (props.color ? props.color : 'black')};
  border: 2px solid ${(props) => props.borderColor ?? 'black'};
`
