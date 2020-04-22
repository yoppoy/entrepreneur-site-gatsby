import React from "react";
import Helmet from "react-helmet";
import {graphql} from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import ExperienceListing from "../components/Timeline/ExperienceListing";

export default function HomePage({data}) {
    console.log("DATA : ", data);
    const experienceEdges = data.allContentfulExperience.edges;
    const testimonyEdges = data.allContentfulTestimony.edges;

    return (
        <Layout>
            <SEO/>
            <ExperienceListing ExperienceEdges={experienceEdges}/>
        </Layout>
    );
}

export const query = graphql`
    query HomeQuery {
        allContentfulTestimony {
            edges {
                node {
                    firstName
                    jobTitle
                    lastName
                    date(formatString: "YYYY")
                    companyName
                    testimony {
                        content {
                            content {
                                value
                            }
                        }
                    }
                }
            }
        }
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
    }
`;
