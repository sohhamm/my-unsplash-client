import * as React from 'react'
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  useDisclosure,
  Icon,
} from '@chakra-ui/react'
import BrandLogo from '../../components/BrandLogo/BrandLogo'
import {MdSearch, MdClose} from 'react-icons/md'

const NewPhotoModal = React.lazy(
  () => import('../../components/NewPhotoModal/NewPhotoModal'),
)

declare interface HeaderProps {
  searchTxt: string
  setSearchTxt: React.Dispatch<React.SetStateAction<string>>
  setShouldRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({
  searchTxt,
  setSearchTxt,
  setShouldRefresh,
}: HeaderProps) {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Flex p={'32px'}>
      <BrandLogo />

      <InputGroup w={'300px'} ml={14}>
        <InputLeftElement>
          <Icon as={MdSearch} w={8} h={8} mt={2} color="#BDBDBD" />
        </InputLeftElement>

        <Input
          placeholder="Search Photo Gallery"
          variant="outline"
          value={searchTxt}
          onChange={e => setSearchTxt(e.target.value)}
          focusBorderColor="brand.400"
          size="lg"
        />

        {searchTxt.length && (
          <InputRightElement>
            <MdClose onClick={() => setSearchTxt('')} />
          </InputRightElement>
        )}
      </InputGroup>

      <Button
        ml="auto"
        bgColor={'#3DB46D'}
        color="white"
        onClick={() => onOpen()}
        size="lg"
      >
        Add a photo
      </Button>

      <React.Suspense fallback={'loading....'}>
        <NewPhotoModal
          isOpen={isOpen}
          onClose={onClose}
          setShouldRefresh={setShouldRefresh}
        />
      </React.Suspense>
    </Flex>
  )
}
