import React from 'react'
import { Helmet } from 'react-helmet'
import { ColorModeProvider } from '@chakra-ui/react'
import { graphql } from 'gatsby'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Copymoticon!</title>
        <meta
          name="description"
          content="Use Copymoticon to easily find and copy emoji's on devices without an emoji keyboard"
        ></meta>
        <meta name="keywords" content="emoji, emoticon, copy, free"></meta>
        <link rel="canonical" href="https://www.copymoticon.com/"></link>
      </Helmet>
      <ColorModeProvider options={{ useSystemColorMode: true }}>
        <main>{children}</main>
      </ColorModeProvider>
    </>
  )
}

export const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
