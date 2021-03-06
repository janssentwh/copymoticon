import React, { useState } from 'react'
import { graphql } from 'gatsby'
import {
  Grid,
  Flex,
  Spacer,
  GridItem,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  Button,
  useToast,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'

import Fuse from 'fuse.js'

import Emoji from '../components/Emoji'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const toast = useToast()
  const [searchterm, setSearchterm] = useState('')
  const [filteredItems, setFilteredItems] = useState(
    data.allAllEmoticonsJson.edges
  )

  const fuse = new Fuse(data.allAllEmoticonsJson.edges, {
    keys: ['node.unicodeName'],
  })

  const onSearch = (event) => {
    setSearchterm(event.target.value)

    if (searchterm?.length > 2) {
      setFilteredItems(fuse.search(searchterm))
    } else {
      resetFilteredItems()
    }
  }

  const resetFilteredItems = () => {
    setFilteredItems(data.allAllEmoticonsJson.edges)
  }

  const handleRemoveInput = () => {
    setSearchterm('')
    resetFilteredItems()
  }

  const resetSearch = () => {
    if (searchterm.length < 1) {
      setFilteredItems(data.allAllEmoticonsJson.edges)
    }
  }

  const copyHandler = (emojiName) => {
    toast({
      title: 'Copied',
      description: `You copied ${emojiName}`,
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
  }

  return (
    <Layout>
      <Flex p="clamp(2rem, 5%, 4rem)" flexDirection="column">
        <VStack spacing={8} mb={8} alignItems="start">
          <Flex alignItems="center" w="100%">
            <Heading as="h1" size="lg">
              Copymoticon!
            </Heading>
            <Spacer />
          </Flex>
          <InputGroup size="md" maxW="420px">
            <Input
              value={searchterm}
              onInput={onSearch}
              onBlur={resetSearch}
              placeholder="Search..."
            />

            {searchterm.length >= 1 ? (
              <InputRightElement width="2.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  right="6px"
                  onClick={handleRemoveInput}
                >
                  <SmallCloseIcon />
                </Button>
              </InputRightElement>
            ) : (
              ''
            )}
          </InputGroup>
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
                  copyHandler={copyHandler}
                />
              </GridItem>
            )
          })}
        </Grid>
      </Flex>
    </Layout>
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
