import React from 'react'

import Helmet from 'react-helmet'

import Contact from '@components/Contact/Contact'
import Home from '@components/Home/Home'
import MediaLinks from '@components/MediaLinks'
import Skills from '@components/Skills'
import Testimonials from '@components/Testimonials'
import Timeline from '@components/Timeline'
import SiteConfig from '@data/SiteConfig'

import '@static/assets/fonts/et-lineicons/css/style.css'
import '@static/assets/fonts/linea-font/css/linea-font.css'

const HomePage = ({ data }) => {
  const { edges } = data.allContentfulExperience
  const skillsCardEdges = data.allContentfulSkillsCard.edges
  const testimonialEdges = data.allContentfulTestimonial.edges
  const contactEdges = data.allContentfulContact.edges
  const mediaLinkEdges = data.allContentfulMediaLink.edges
  const siteConfiguration = data.allContentfulSiteConfiguration.edges[0].node

  return (
    <div>
      <Helmet title={SiteConfig.siteTitle} />
      <Home config={siteConfiguration} />
      <Skills edges={skillsCardEdges} />

      <Timeline edges={edges} config={siteConfiguration} />
      <Testimonials edges={testimonialEdges} />
      <Contact edges={contactEdges} />
      <MediaLinks edges={mediaLinkEdges} />
    </div>
  )
}

export default HomePage
