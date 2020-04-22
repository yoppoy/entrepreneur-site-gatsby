import styled from "styled-components";

const tooltipOrientations = {
    'top': {
        y: 10,
        x: 0,
    },
    'right': {
        y: 0,
        x: 10
    },
    'bottom': {
        y: -10,
        x: 0
    },
    'left': {
        y: 0,
        x: -10
    }
};

const Tooltip = styled.a`
    &:before, &:after {
        transform: ${props => 'translateY(' + tooltipOrientations[props.orientation].y + 'px);'}
    }
    
    &:hover:after, &:hover:before {
        transform: 'translateY(0px);'
    }
    
    & {
        position: relative;
    }
    
    &:after, &:before {
        position: absolute;
        visibility: hidden;
        opacity: 0;
        transition: transform 100ms ease, opacity 200ms;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        z-index: 99;
    }
    
    &:before {
        content: '${props => props.content}';
        background: #000;
        color: #fff;
        font-size: 10px;
        font-weight: bold;
        padding: 10px 15px;
        white-space: nowrap;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    
    &:after {
        width: 0;
        height: 0;
        border: 6px solid transparent;
        content: "";
        box-shadow: none;
    }
    
    &:hover:after, &:hover:before {
        visibility: visible;
        opacity: 0.95;
        transform: translateY(0px);
    }
    
   &:before {
        bottom: 100%;
        left: -130%;
        margin-bottom: 10px;
    }
    
    &:after {
        border-top-color: #000;
        border-bottom: none;
        bottom: 101%;
        left: calc(50% - 6px);
        margin-bottom: 4px;
    }
`;

Tooltip.defaultProps = {
    orientation: 'top',
    content: 'not assigned'
};

export default Tooltip;

/*
&[data-position="left"]:before {
        top: -12%;
        right: 100%;
        margin-right: 10px;
    }

    a[data-tooltip][data-position="left"]:after {
        border-left-color: #000;
        border-right: none;
        top: calc(50% - 3px);
        right: 100%;
        margin-top: -6px;
        margin-right: 4px;
    }

    a[data-tooltip][data-position="right"]:before {
        top: -5%;
        left: 100%;
        margin-left: 10px;
    }

    a[data-tooltip][data-position="right"]:after {
        border-right-color: #000;
        border-left: none;
        top: calc(50% - 6px);
        left: calc(100% + 4px);
    }

    a[data-tooltip][data-position="bottom"]:before {
        top: 100%;
        left: -130%;
        margin-top: 10px;
    }

    a[data-tooltip][data-position="bottom"]:after {
        border-bottom-color: #000;
        border-top: none;
        top: 100%;
        left: 5px;
        margin-top: 4px;
    }
 */
