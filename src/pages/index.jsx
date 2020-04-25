import React from "react";
import {graphql} from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Timeline from "../components/Timeline";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import '../../static/assets/fonts/linea-font/css/linea-font.css';
import '../../static/assets/fonts/et-lineicons/css/style.css';

export default function HomePage({data}) {
    console.log(data);
    const edges = data.allContentfulExperience.edges;
    const testimonialEdges = data.allContentfulTestimonial.edges;
    const profile = data.allContentfulProfile.edges[0].node;

    return (
        <Layout>
            <SEO/>
            <Timeline edges={edges}/>
            <Testimonials edges={testimonialEdges}/>
            <Contact profile={profile}/>
        </Layout>
    );
}

export const query = graphql`
    query HomeQuery {
        allContentfulExperience(filter: {node_locale: {eq: "fr"}}, sort: {fields: dateStart, order: DESC}) {
            edges {
                node {
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
                        fixed(width: 200) {
                            src
                            srcSet
                            srcSetWebp
                        }
                    }
                }
            }
        }
        allContentfulTestimonial(filter: {node_locale: {eq: "fr"}}, sort: {fields: date, order: DESC}) {
            edges {
                node {
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
        allContentfulProfile(filter: {slug: {eq: "profile-default"}}) {
            edges {
                node {
                    github
                    email
                    firstName
                    lastName
                    linkedin
                    location
                }
            }
        }
    }
`;
