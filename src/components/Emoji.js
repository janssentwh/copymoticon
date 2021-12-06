import React from 'react'
import { Text, useClipboard } from '@chakra-ui/react'

const Emoji = ({ emoji, unicodeName, copyHandler }) => {
  const { onCopy } = useClipboard(emoji)
  const onCopied = () => {
    copyHandler(unicodeName)
    onCopy()
  }

  return (
    <Text
      fontSize={'2xl'}
      onClick={onCopied}
      title={unicodeName}
      _hover={{
        cursor: 'pointer',
      }}
      style={{
        textAlign: 'center',
      }}
    >
      {emoji}
    </Text>
  )
}

export default Emoji
