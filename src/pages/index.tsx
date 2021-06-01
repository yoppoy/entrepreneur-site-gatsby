import React, { FC } from 'react'

import { graphql, PageProps } from 'gatsby'

import HomePage from '@components/_pages/PageHome'
import MainLayout from '@layout/index'

const PageHome: FC<PageProps<
  Record<string, unknown>,
  { locale: string },
  Record<string, unknown>
>> = ({ pageContext, ...props }) => {
  return (
    <MainLayout locale={pageContext.locale}>
      <HomePage {...props} />
    </MainLayout>
  )
}

export default PageHome

export const query = graphql`
  query HomeQuery($locale: String!) {
    allContentfulSiteConfiguration {
      edges {
        node {
          backgroundHome {
            fluid(quality: 87) {
              ...GatsbyContentfulFluid
            }
          }
          backgroundExperience {
            fluid(quality: 87) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulSkillsCard(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: slug }
    ) {
      edges {
        node {
          id
          icon
          title {
            raw
          }
          data {
            icon
            score
            name
          }
        }
      }
    }
    allContentfulExperience(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: dateStart, order: DESC }
    ) {
      edges {
        node {
          id
          title
          dateStart(formatString: "MMMM YYYY", locale: $locale)
          dateEnd(formatString: "MMMM YYYY", locale: $locale)
          type
          icons {
            data {
              name
              icon
            }
          }
          description {
            raw
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
    allContentfulTestimonial(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          firstName
          jobTitle
          lastName
          date(formatString: "YYYY")
          companyName
          testimony {
            raw
          }
        }
      }
    }
    allContentfulContact(
      sort: { fields: slug }
      filter: { node_locale: { eq: $locale } }
    ) {
      edges {
        node {
          id
          icon
          value {
            raw
          }
          heading
        }
      }
    }
    allContentfulMediaLink(
      sort: { fields: slug }
      filter: { node_locale: { eq: $locale } }
    ) {
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
`
