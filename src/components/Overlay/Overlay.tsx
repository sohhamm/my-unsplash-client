import {Box, Text, Button} from '@chakra-ui/react'

export default function Overlay({
  currentActive,
  label,
  txt,
}: {
  currentActive: string | null
  label: string
  txt?: boolean
}) {
  const shouldShow = currentActive === label ? '1' : '0'
  return (
    <Box as="figcaption" w="100%" h="100%">
      {txt ? (
        <Text
          textAlign="center"
          position="relative"
          bottom={50}
          left={10}
          zIndex={1}
          opacity={shouldShow}
        >
          {label}
        </Text>
      ) : (
        <Button
          colorScheme="red"
          ml="auto"
          position="relative"
          top={75}
          zIndex={1}
          left={220}
          opacity={shouldShow}
        >
          Delete
        </Button>
      )}
    </Box>
  )
}
