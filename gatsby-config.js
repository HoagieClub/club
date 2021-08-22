/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Hoagie - The Princeton Digital Experience Club`,
    siteUrl: `https://hoagie.io/`,
    description: `Dreamed up for Princeton students, Hoagie is a creative space that fosters community-centered design and implementation.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
      resolve: 'gatsby-plugin-next-seo',
      options: {
        title: `Hoagie Club - The Princeton Application Development Club`,
        description: `Hoagie Club aims to change how we build campus applications and establish a proper software engineering culture around them.  We want to turn Princeton applications from a bunch of isolated side-projects into an integrated software system.`,
        canonical: 'https://club.hoagie.io/',
        openGraph: {
          title: `Hoagie Club - The Princeton Application Development Club`,
          description: `Hoagie Club aims to change how we build campus applications and establish a proper software engineering culture around them.  We want to turn Princeton applications from a bunch of isolated side-projects into an integrated software system.`,
          type: 'website',
          locale: 'en_US',
          url: 'https://club.hoagie.io/',
          site_name: 'Hoagie',
          images: [
            {
              url: 'https://www.hoagie.io/graph_thumbnail.jpg',
              width: 800,
              height: 600,
              alt: 'Hoagie Thubmnail',
            },
          ],
        },
      },
    },
    `gatsby-plugin-sass`,
    `evergreen-ui`],
}