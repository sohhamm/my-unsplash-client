import {Box, Flex, Icon, Text} from '@chakra-ui/react'
import {MdCollections} from 'react-icons/md'

export default function BrandLogo() {
  return (
    <Flex alignItems="center">
      <Icon as={MdCollections} boxSize={'50px'} mr={4} />
      <Box>
        <Text fontWeight={'bold'}>My Unsplash</Text>
        <Text>devchallenges.io</Text>
      </Box>
    </Flex>
  )
}
