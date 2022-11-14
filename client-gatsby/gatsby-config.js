module.exports = {
  siteMetadata: {
    siteUrl: `https://atrui.online`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ATRUI`,
        short_name: `ATRUI`,
        description: `Atrui: Gamified Charity Fundraising Platform`,
        start_url: `/`,
        background_color: `#0a68f0`,
        theme_color: `#0a68f0`,
        display: `standalone`,
        icon: `src/images/logo-no-background.png`,
        icons: [
          {
            src: `/favicons/pwa-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/pwa-icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      },
    },
    `gatsby-plugin-offline`,

    
  ],
}
