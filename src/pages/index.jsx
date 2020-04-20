import React from "react";
import Helmet from "react-helmet";
import {graphql} from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import ExperienceListing from "../components/Timeline/ExperienceListing";

export default function HomePage({data}) {
    const {edges} = data.allMarkdownRemark;

    return (
        <Layout>
            <SEO/>
            <ExperienceListing ExperienceEdges={edges}/>
        </Layout>
    );
}

export const query = graphql`
    query HomeQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___dateStart], order: DESC }) {
            edges {
                node {
                    frontmatter {
                        type
                        title
                        description
                        dateStart
                        dateEnd
                        employerName
                        employerLogo
                        icons
                    }
                }
            }
        }
    }
`;
