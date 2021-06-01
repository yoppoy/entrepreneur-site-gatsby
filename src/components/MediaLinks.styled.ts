import styled from 'styled-components'

import '../../static/assets/fonts/fontawesome/css/font-awesome.min.css'
import { ButtonAsLink } from './_shared/Button'

export const MediaContainer = styled.div`
  background: #111;
  text-align: center;
  padding: 65px 0px;
`

export const Button = styled(ButtonAsLink)`
  margin: 5px;
`

export const Seperator = styled.div`
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
`
