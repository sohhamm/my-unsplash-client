import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from '@chakra-ui/react'
import BrandLogo from '../../components/BrandLogo/BrandLogo'
import {MdSearch} from 'react-icons/md'

export default function Header() {
  return (
    <Flex p={'32px'}>
      <BrandLogo />

      <InputGroup w={'300px'} ml={14}>
        <InputLeftElement>
          <MdSearch />
        </InputLeftElement>

        <Input placeholder="search images" variant="outline" />
      </InputGroup>

      <Button ml="auto" bgColor={'#3DB46D'} color="white">
        Add Photos
      </Button>
    </Flex>
  )
}
