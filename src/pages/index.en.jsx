import React from "react";
import {graphql} from "gatsby";
import HomePage from "../components/HomePage";
import MainLayout from "../layout";

export default (props) => (
    <MainLayout locale={"en"}>
        <HomePage {...props}/>
    </MainLayout>
);

export const query = graphql`
    query HomeEnQuery {
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
        allContentfulExperience(filter: {node_locale: {eq: "en"}}, sort: {fields: dateStart, order: DESC}) {
            edges {
                node {
                    id
                    title
                    dateStart(formatString: "MMMM YYYY", locale: "en")
                    dateEnd(formatString: "MMMM YYYY", locale: "en")
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
        allContentfulSkillsCard(filter: {node_locale: {eq: "en"}}, sort: {fields: slug}) {
            edges {
                node {
                    id
                    icon
                    title {
                        json
                    }
                    data {
                        icon
                        score
                        name
                    }
                }
            }
        }
        allContentfulTestimonial(filter: {node_locale: {eq: "en"}}, sort: {fields: date, order: DESC}) {
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
        allContentfulContact(sort: {fields: slug}, filter: {node_locale: {eq: "en"}}) {
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
        allContentfulMediaLink(sort: {fields: slug}, filter: {node_locale: {eq: "en"}}) {
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
