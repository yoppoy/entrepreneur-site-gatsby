import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useTranslation} from 'react-i18next';
import { Link } from "gatsby"

const Header = styled.div`
    position: absolute;
    right: 0;
    padding: 10px 12px;
    z-index: 1030;
    background: rgba(0,0,0,0.1);
    height: 48px;
`;

const Img = styled.img`
  width: 28px;
  margin: 0px;
`;

export default function HeaderCustom() {
    const {i18n} = useTranslation();
    const changeLng = i18n.language === 'fr' ? 'en' : 'fr';

    return (
        <Header>
            <Link to={'/' + changeLng} onClick={() => i18n.changeLanguage(changeLng)}>
                <Img src={require('../../static/assets/icons/flags/' + changeLng + '.svg')}
                     alt={'flag ' + changeLng}/>
            </Link>
        </Header>
    )
}
