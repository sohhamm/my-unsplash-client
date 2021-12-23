import * as React from 'react'
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import BrandLogo from '../../components/BrandLogo/BrandLogo'
import {MdSearch, MdClose} from 'react-icons/md'

const NewPhotoModal = React.lazy(
  () => import('../../components/NewPhotoModal/NewPhotoModal'),
)

declare interface HeaderProps {
  searchTxt: string
  setSearchTxt: React.Dispatch<React.SetStateAction<string>>
}

export default function Header({searchTxt, setSearchTxt}: HeaderProps) {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Flex p={'32px'}>
      <BrandLogo />

      <InputGroup w={'300px'} ml={14}>
        <InputLeftElement>
          <MdSearch />
        </InputLeftElement>

        <Input
          placeholder="search images"
          variant="outline"
          value={searchTxt}
          onChange={e => setSearchTxt(e.target.value)}
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
      >
        Add Photos
      </Button>

      <React.Suspense fallback={'loading....'}>
        <NewPhotoModal isOpen={isOpen} onClose={onClose} />
      </React.Suspense>
    </Flex>
  )
}
