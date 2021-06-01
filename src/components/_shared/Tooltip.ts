import styled from 'styled-components'

export type TooltipOrientation = 'top' | 'right' | 'bottom' | 'left'
export type TooltipPosition = {
  x: number
  y: number
}

const tooltipOrientations: Record<TooltipOrientation, TooltipPosition> = {
  top: {
    y: 10,
    x: 0
  },
  right: {
    y: 0,
    x: 10
  },
  bottom: {
    y: -10,
    x: 0
  },
  left: {
    y: 0,
    x: -10
  }
}

const Tooltip = styled.a<{ orientation: TooltipOrientation; content: string }>`
    &:before, &:after {
        transform: ${(props) =>
          `translateY(${tooltipOrientations[props.orientation].y}px);`}
    }
    
    &:hover:after, &:hover:before {
        transform: translateY(0px);
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
        content: '${(props) => props.content}';
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
        left: calc(50% - 9px);
        margin-bottom: 4px;
    }
`

Tooltip.defaultProps = {
  orientation: 'top',
  content: 'not assigned'
}

export default Tooltip
