module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.copymoticon.com',
    title: 'Copymoticon!',
    description:
      'Use Copymoticon to easily find and copy emoticons on devices without a emoticon keyboard',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    '@chakra-ui/gatsby-plugin',
  ],
}
