const config = {
  siteTitle: 'Yan Poinssot - Développeur Full Stack JS', // Site title.
  siteTitleShort: 'Yan Poinssot', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Développeur React / Node.js', // Alternative site title for SEO.
  siteDescription: 'Yan Poinssot, développeur web fullstack React / Node.js', // Website description used for RSS feeds/meta description tag.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest. TODO Change logo
  siteUrl: 'https://yan-poinssot.netlify.app', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteFBAppID: 'none', // FB Application ID for using app insights
  googleAnalyticsID: 'none', // GA tracking ID.
  themeColor: '#ffba21', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffba21' // Used for setting manifest background color.
  /* If I decide to add a blog section later on :
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "DD/MM/YYYY", // Date format for display.
    userEmail: "none",
    userFirstName: "none", // Username to display in the author segment.
    userLastName: "none", // Username to display in the author segment.
    userLocation: "none", // User location to display in the author segment.
    userDescription: "none", // User description to display in the author segment.
     */
}

// Validate
if (config.pathPrefix !== '/') {
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

module.exports = config
