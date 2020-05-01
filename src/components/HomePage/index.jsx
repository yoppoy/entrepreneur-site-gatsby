import React from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import SiteConfig from "../../../data/SiteConfig";
import Timeline from "../Timeline";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import '../../../static/assets/fonts/linea-font/css/linea-font.css';
import '../../../static/assets/fonts/et-lineicons/css/style.css';
import MediaLinks from '../MediaLinks';
import Home from "../Home";
import Skills from "../Skills";

export default function HomePage({data}) {
    const edges = data.allContentfulExperience.edges;
    const skillsCardEdges = data.allContentfulSkillsCard.edges;
    const testimonialEdges = data.allContentfulTestimonial.edges;
    const contactEdges = data.allContentfulContact.edges;
    const mediaLinkEdges = data.allContentfulMediaLink.edges;
    const siteConfiguration = data.allContentfulSiteConfiguration.edges[0].node;

    return (
        <div>
            <Helmet
                title={SiteConfig.siteTitle}
            />
            <Home config={siteConfiguration}/>
            <Skills edges={skillsCardEdges}/>
            <Timeline edges={edges} config={siteConfiguration}/>
            <Testimonials edges={testimonialEdges}/>
            <Contact edges={contactEdges}/>
            <MediaLinks edges={mediaLinkEdges}/>
        </div>
    );
}
