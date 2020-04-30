import React from "react";
import {graphql} from "gatsby";
import HomePage from "../components/HomePage";
import MainLayout from "../layout";

export default (props) => (
    <MainLayout locale={"fr"}>
        <HomePage {...props}/>
    </MainLayout>
);

export const query = graphql`
    query HomeFrQuery {
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
        allContentfulSkillsCard(filter: {node_locale: {eq: "fr"}}, sort: {fields: slug}) {
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
