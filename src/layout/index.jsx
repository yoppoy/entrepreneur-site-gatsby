import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import theme from "../utils/theme";
import {ThemeProvider} from "styled-components";
import "./index.css";
import SEO from "../components/SEO/SEO";

export default class MainLayout extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Helmet>
                    <meta name="description" content={config.siteDescription}/>
                    <html lang="en"/>
                </Helmet>
                <SEO/>
                {children}
            </ThemeProvider>
        );
    }
}
