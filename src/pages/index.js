import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Grid, Flex, GridItem, VStack, Input, Heading } from '@chakra-ui/react'
import Fuse from 'fuse.js'

import Emoji from '../components/Emoji'

const IndexPage = ({ data }) => {
  const [searchterm, setSearchterm] = useState('')
  const [filteredItems, setFilteredItems] = useState(
    data.allAllEmoticonsJson.edges
  )

  const fuse = new Fuse(data.allAllEmoticonsJson.edges, {
    keys: ['node.unicodeName'],
  })

  const onSearch = (event) => {
    setSearchterm(event.target.value)

    if (searchterm?.length > 0) {
      setFilteredItems(fuse.search(searchterm))
    } else {
      setFilteredItems(data.allAllEmoticonsJson.edges)
    }
  }

  const resetSearch = () => {
    if (searchterm.length < 1) {
      setFilteredItems(data.allAllEmoticonsJson.edges)
    }
  }

  return (
    <Flex p="clamp(2rem, 5%, 4rem)" flexDirection="column">
      <VStack spacing={8} mb={8} alignItems="start">
        <Heading as="h1" size="lg">
          Emojican
        </Heading>
        <Heading as="h2" size="xs">
          Click to copy
        </Heading>
        <Input
          value={searchterm}
          onInput={onSearch}
          onBlur={resetSearch}
          placeholder="Search..."
        ></Input>
      </VStack>
      <Grid
        templateColumns={'repeat(auto-fit, minmax(32px, 1fr))'}
        gap={8}
        flex="1"
      >
        {filteredItems.map((node, id) => {
          return (
            <GridItem key={id}>
              <Emoji
                emoji={
                  node.node
                    ? node?.node?.character
                    : node?.item?.node?.character
                }
                unicodeName={
                  node.node
                    ? node?.node?.unicodeName
                    : node?.item?.node?.unicodeName
                }
              />
            </GridItem>
          )
        })}
      </Grid>
    </Flex>
  )
}

export const pageQuery = graphql`
  {
    allAllEmoticonsJson {
      edges {
        node {
          character
          unicodeName
        }
      }
    }
  }
`

export default IndexPage
