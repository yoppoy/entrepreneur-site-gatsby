import React, { FC } from 'react'

import { graphql, PageProps } from 'gatsby'
import Helmet from 'react-helmet'

import { HomePageQuery } from '@custom-types/codegenContentfulTypes'

import Contact from '@components/Contact/Contact'
import Home from '@components/Home/Home'
import MediaLinks from '@components/MediaLinks'
import Skills from '@components/Skills/Skills'
import Testimonials from '@components/Testimonials'
import Timeline from '@components/Timeline/Timeline'
import SiteConfig from '@data/SiteConfig'
import MainLayout from '@layout/index'

const filterHomePageData = (data: HomePageQuery) => {
  return {
    siteConfiguration: data.allContentfulSiteConfiguration.edges[0].node,
    skills: data.allContentfulSkillsCard.edges.map((edge) => edge.node),
    experiences: data.allContentfulExperience.edges.map((edge) => edge.node),
    testimonials: data.allContentfulTestimonial.edges.map((edge) => edge.node),
    contacts: data.allContentfulContact.edges.map((edge) => edge.node),
    mediaLinks: data.allContentfulMediaLink.edges.map((edge) => edge.node)
  }
}

const PageHome: FC<
  PageProps<HomePageQuery, { locale: string }, Record<string, unknown>>
> = ({ pageContext, data }) => {
  const {
    siteConfiguration,
    skills,
    experiences,
    testimonials,
    contacts,
    mediaLinks
  } = filterHomePageData(data)

  return (
    <MainLayout locale={pageContext.locale}>
      <Helmet title={SiteConfig.siteTitle} />
      <Home background={siteConfiguration.backgroundHome} />
      <Skills cards={skills} />
      <Timeline
        experiences={experiences}
        background={siteConfiguration.backgroundExperience}
      />
      <Testimonials testimonials={testimonials} />
      <Contact contacts={contacts} />
      <MediaLinks links={mediaLinks} />
    </MainLayout>
  )
}

export default PageHome

export const query = graphql`
  query HomePage($locale: String!) {
    allContentfulSiteConfiguration {
      edges {
        node {
          backgroundHome {
            fluid(quality: 87) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
          backgroundExperience {
            fluid(quality: 87) {
              base64
              aspectRatio
              src
              srcSet
              sizes
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
              base64
              aspectRatio
              src
              srcSet
              sizes
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
