import React from "react";
import {graphql} from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import SiteConfig from "../../data/SiteConfig";
import Timeline from "../components/Timeline";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import '../../static/assets/fonts/linea-font/css/linea-font.css';
import '../../static/assets/fonts/et-lineicons/css/style.css';
import MediaLinks from '../components/MediaLinks';
import Home from "../components/Home";

export default function HomePage({data}) {
    console.log(data);
    const edges = data.allContentfulExperience.edges;
    const testimonialEdges = data.allContentfulTestimonial.edges;
    const contactEdges = data.allContentfulContact.edges;
    const mediaLinkEdges = data.allContentfulMediaLink.edges;
    const siteConfiguration = data.allContentfulSiteConfiguration.edges[0].node;

    return (
        <Layout>
            <Helmet
                title={SiteConfig.siteTitle}
            />
            <Home config={siteConfiguration}/>
            <Timeline edges={edges} config={siteConfiguration}/>
            <Testimonials edges={testimonialEdges}/>
            <Contact edges={contactEdges}/>
            <MediaLinks edges={mediaLinkEdges}/>
        </Layout>
    );
}

export const query = graphql`
    query HomeQuery {
        allContentfulSiteConfiguration {
            edges {
                node {
                    backgroundHome {
                        fluid(quality: 87) {
                            ...GatsbyContentfulFluid
                        }
                    }
                    backgroundExperience {
                        fluid(quality: 80) {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
        allContentfulExperience(filter: {node_locale: {eq: "fr"}}, sort: {fields: dateStart, order: DESC}) {
            edges {
                node {
                    id
                    title
                    dateStart(formatString: "MMMM YYYY", locale: "fr")
                    dateEnd(formatString: "MMMM YYYY", locale: "fr")
                    type
                    icons {
                        data {
                            name
                            icon
                        }
                    }
                    description {
                        json
                    }
                    companyName
                    companyLink
                    companyLogo {
                        title
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
        allContentfulTestimonial(filter: {node_locale: {eq: "fr"}}, sort: {fields: date, order: DESC}) {
            edges {
                node {
                    id
                    firstName
                    jobTitle
                    lastName
                    date(formatString: "YYYY")
                    companyName
                    testimony {
                        json
                    }
                }
            }
        }
        allContentfulContact(sort: {fields: slug}, filter: {node_locale: {eq: "fr"}}) {
            edges {
                node {
                    id
                    icon
                    value {
                        json
                    }
                    heading
                }
            }
        }
        allContentfulMediaLink(sort: {fields: slug}, filter: {node_locale: {eq: "fr"}}) {
            edges {
                node {
                    id
                    icon
                    link
                    name
                }
            }
        }
    }
`;
