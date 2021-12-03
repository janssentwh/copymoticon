import React from 'react'
import { Text, useClipboard, Badge } from '@chakra-ui/react'

const Emoji = ({ emoji, unicodeName }) => {
  const { hasCopied, onCopy } = useClipboard(emoji)

  return (
    <Text
      fontSize={'2xl'}
      onClick={onCopy}
      title={unicodeName}
      _hover={{
        cursor: 'pointer',
      }}
      style={{
        position: 'relative',
        textAlign: 'center',
      }}
    >
      {emoji}{' '}
      {hasCopied && (
        <Badge
          variant="subtle"
          colorScheme="green"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '-20px',
            transform: 'translateX(-50%)',
          }}
        >
          copied
        </Badge>
      )}
    </Text>
  )
}

export default Emoji
