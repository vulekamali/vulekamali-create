module.exports = {
  siteMetadata: {
    title: 'Vulekamali Create',
    description: 'Vulekamali Hackathon page. Build websites, mobile apps and other tools using the data and APIs behind vulekamali',
    author: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-NGZKZVM",
        // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,
      },
    },
  ],
};
