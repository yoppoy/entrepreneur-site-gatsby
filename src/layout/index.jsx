import React, {useEffect} from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import theme from "../utils/theme";
import {ThemeProvider} from "styled-components";
import {I18nextProvider} from 'react-i18next';
import "./index.css";
import SEO from "../components/SEO/SEO";
import i18n from '../i18n/config';

export default function MainLayout({children, locale}) {
    const lng = locale ? locale : 'fr';

    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <meta name="description" content={config.siteDescription}/>
                <html lang={lng}/>
            </Helmet>
            <SEO/>
            <I18nextProvider i18n={i18n}>
                {children}
            </I18nextProvider>
        </ThemeProvider>
    );
}
