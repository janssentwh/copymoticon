import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'

const MainMenu = () => {
  const background = useColorModeValue('gray.800', 'white')
  const color = useColorModeValue('white', 'gray.800')

  const openLink = (href) => {
    window.open(href, '_blank')
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
      >
        <HamburgerIcon />
      </MenuButton>
      <MenuList bg={background} color={color}>
        <MenuGroup title="Donate" bg={background} color={color}>
          <MenuItem
            icon={<ExternalLinkIcon />}
            onClick={(e) => {
              e.preventDefault()
              openLink('https://buy.stripe.com/9AQbKXfHOfL1gtq7su')
            }}
          >
            €1,-
          </MenuItem>
          <MenuItem
            icon={<ExternalLinkIcon />}
            onClick={(e) => {
              e.preventDefault()
              openLink('https://buy.stripe.com/00g4iv53a56n7WU8ww')
            }}
          >
            €2,-
          </MenuItem>
          <MenuItem
            icon={<ExternalLinkIcon />}
            onClick={(e) => {
              e.preventDefault()
              openLink('https://buy.stripe.com/28o9CP3Z642jfpmeUV')
            }}
          >
            €5,-
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default MainMenu
