import * as React from 'react'
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import BrandLogo from '../../components/BrandLogo/BrandLogo'
import {MdSearch} from 'react-icons/md'

const NewPhotoModal = React.lazy(
  () => import('../../components/NewPhotoModal/NewPhotoModal'),
)

export default function Header() {
  const {isOpen, onOpen, onClose} = useDisclosure()
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

      <NewPhotoModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
