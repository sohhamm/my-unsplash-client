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
  useMediaQuery,
  Spinner,
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
  const [isSmallWidth] = useMediaQuery('(max-width: 775px)')
  const [isMobile] = useMediaQuery('(max-width: 500px)')

  return (
    <Flex
      p={['10px', '30px', '32px']}
      flexDirection={isSmallWidth ? 'column' : 'row'}
    >
      {isMobile ? (
        <Flex alignContent={'center'}>
          <BrandLogo />
          <Button
            ml="auto"
            bgColor={'#3DB46D'}
            color="white"
            onClick={() => onOpen()}
            size="md"
          >
            Add a photo
          </Button>
        </Flex>
      ) : (
        <BrandLogo />
      )}

      <InputGroup
        w={isSmallWidth ? '100%' : '300px'}
        ml={isSmallWidth ? 0 : 14}
        mb={isSmallWidth ? 4 : 0}
        mt={isSmallWidth ? 4 : 0}
        position={isMobile ? 'sticky' : 'relative'}
      >
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
          position={isMobile ? 'sticky' : 'inherit'}
          fontFamily={'Montserrat'}
        />

        {searchTxt.length && (
          <InputRightElement>
            <Icon
              as={MdClose}
              w={8}
              h={8}
              mt={2}
              color="#BDBDBD"
              onClick={() => setSearchTxt('')}
            />
          </InputRightElement>
        )}
      </InputGroup>

      {!isMobile && (
        <Button
          ml="auto"
          bgColor={'#3DB46D'}
          color="white"
          onClick={() => onOpen()}
          size="lg"
        >
          Add a photo
        </Button>
      )}

      <React.Suspense fallback={'loading.....'}>
        <NewPhotoModal
          isOpen={isOpen}
          onClose={onClose}
          setShouldRefresh={setShouldRefresh}
        />
      </React.Suspense>
    </Flex>
  )
}
