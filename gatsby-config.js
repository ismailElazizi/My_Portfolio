module.exports = {
  siteMetadata: {
    hello: '👋',
    who: 'I am Ismail, I Use Design Magic To Turn Ideas Into Great Products.',
    title: 'Ismail Elazizi',
    name: `ismailelazizi`,
    siteUrl: `https://ismailelazizi.com`,
    description: `I Use Design Magic To Turn Ideas Into Great Products.`,

    // hero
    // A required key and will be displayed on the main page of Noveal
    hero: {
      heading: `Readers are Leaders`,
      maxWidth: 652,
    },

    // social
    // Add in the social links that will be displayed in the footer
    social: [
      {
        url: `https://www.dribbble.com/ismailelazizi`,
        name: 'dribbble',
      },
      {
        url: `https://www.instagram.com/ismail_elazizi`,
        name: 'instagram',
      },
      {
        url: `https://www.medium.com/@ismailelazizi`,
        name: 'medium',
      },
      {
        url: `https://www.github.com/ismailElazizi`,
        name: 'github',
      },
      {
        url: `https://www.twitter.com/smailelazizi`,
        name: 'twitter',
      },
      {
        url: `https://www.facebook.com/smailElazizi`,
        name: 'facebook',
      },
      {
        url: `https://www.linkedin.com/in/ismail-el-azizi`,
        name: 'linkedin',
      },
    ],
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPath: 'blog/posts',
        contentPosts: 'blog/posts',
        contentAuthors: 'blog/authors',
        basePath: 'blog',
        authorsPage: true,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: 'projects',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
  ],
}
