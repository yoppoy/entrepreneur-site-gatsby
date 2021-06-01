import styled from 'styled-components'

import SectionTitle from '../_shared/SectionTitle'

export const Container = styled.div`
  background: white;
  padding-top: 160px;
  padding-bottom: 160px;
  & ${SectionTitle} {
    text-align: center;
  }
  @media (max-width: 1260px) {
    & {
      padding-left: 35px;
      padding-right: 35px;
    }
  }
`

export const FieldHeading = styled.h5`
  letter-spacing: 2px;
  font-weight: 300;
  font-size: 0.85em;
  line-height: 1.42857143;
  @media (max-width: 520px) {
    & {
      text-align: center;
    }
  }
`

export const FieldValue = styled.div`
  &,
  & * {
    letter-spacing: 1.7px;
    font-size: 0.99em;
    font-style: normal;
    line-height: 1.42857143;
    color: #999;
    & a {
      color: #337ab7;
      text-decoration: none;
    }
    @media (max-width: 520px) {
      & {
        text-align: center;
      }
    }
  }
`

export const FieldContainer = styled.div`
  text-align: center;
  margin: auto;
  justify-content: space-between;
  margin-top: 3em;
  & ${FieldHeading}, & ${FieldValue} {
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  @media (max-width: 520px) {
    & {
      justify-content: center;
      flex-direction: column;
    }
  }
`

export const Field = styled.div`
  display: inline-block;
  flex-direction: row;
  align-items: center;
  margin-left: 5em;
  margin-right: 5em;
  margin-top: 3.5em;
  & > div {
    display: inline-block;
    text-align: left;
  }
  @media (max-width: 520px) {
    & {
      margin-left: 2em;
      margin-right: 2em;
      display: flex;
      flex-direction: column;
    }
  }
`

export const FieldIcon = styled.div`
  display: inline-block;
  color: black;
  font-size: 36px;
  margin-right: 0.5em;
  @media (max-width: 520px) {
    & {
      display: block;
      margin: auto;
    }
  }
`
