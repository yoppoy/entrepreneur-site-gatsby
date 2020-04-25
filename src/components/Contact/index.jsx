import React from 'react';
import styled from "styled-components";
import SectionTitle from "../Styled/SectionTitle";

const Container = styled.div`
    padding-top: 100px;
    padding-bottom: 80px;
    & ${SectionTitle} 
        text-al
    }
    media (max-width: 1260px) {
        & {
            padding-left: 35px;
            padding-right: 35px;
        }
    }
`;

const FieldHeading = styled.h5`
    letter-spacing: 2px;
    font-weight: 300;
    font-size: 0.85em;
    line-height: 1.42857143;
    @media (max-width: 520px) {
        & {
           text-align: center;
        }
    }
`;

const FieldValue = styled.p`
    letter-spacing: 1.7px;
    font-size: .9em;
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
`;

const FieldContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: auto;
    justify-content: space-between;
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
   
`;

const Field = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 2.5em;
    @media (max-width: 520px) {
        & {
           flex-direction: column;
        }
    }
`;

const FieldIcon = styled.div`
    color: black;
    font-size: 36px;
    margin-right: .5em;
    @media (max-width: 520px) {
        & {
           margin-right: 0;
        }
    }
`;

export default function Contact({profile}) {
    console.log(profile);
    return (
        <Container id={"contacts"}>
            <SectionTitle>Me contacter</SectionTitle>
            <FieldContainer>
                <Field>
                    <FieldIcon className={"linea-basic-geolocalize-01"}/>
                    <div>
                        <FieldHeading>Basé sur</FieldHeading>
                        <FieldValue>{profile.location}</FieldValue>
                    </div>
                </Field>
                <Field>
                    <FieldIcon className={"linea-basic-paperplane"}/>
                    <div>
                        <FieldHeading>Email</FieldHeading>
                        <FieldValue><a href={"emailto:" + profile.email}>{profile.email}</a></FieldValue>
                    </div>
                </Field>
            </FieldContainer>
        </Container>
    );
}
