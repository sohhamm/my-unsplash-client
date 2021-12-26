import * as React from 'react'
import Masonry from 'react-masonry-css'
import Overlay from '../../components/Overlay/Overlay'
import classes from './MasonryContainer.module.css'
import {Box, Flex, Image, Spinner, useToast} from '@chakra-ui/react'
import {breakPointColsObj} from '../../constants/index.const'
import {getAllPhotos} from '../../data/get-all-photos'
import {ClientType, PhotoType} from '../../types'
import {deletePhoto} from '../../data/delete-photo'

interface MasonryContainerProps {
  searchTxt: string
  shouldRefresh: boolean
  setShouldRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

const client = async ({setItems, setShouldRefresh}: ClientType) => {
  const items = await getAllPhotos(setShouldRefresh)
  setItems(items)
}

export default function MasonryContainer({
  searchTxt,
  shouldRefresh,
  setShouldRefresh,
}: MasonryContainerProps) {
  const [items, setItems] = React.useState<PhotoType[] | null>(null)
  const [currentActive, setCurrentActive] = React.useState<string | null>(null)

  const toast = useToast()

  React.useEffect(() => {
    client({setItems, setShouldRefresh})
  }, [shouldRefresh])

  const handleDeletePhoto = async (id: string) => {
    const {msg} = await deletePhoto(id)

    if (msg === 'successfully deleted') {
      setShouldRefresh(true)
      toast({
        title: 'Photo Deleted',
        description: 'Photo was successfully removed.',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })

      return
    }

    toast({
      title: 'Error Deleting',
      description: 'Sorry our system experienced a failure.',
      status: 'error',
      duration: 4000,
      isClosable: true,
    })
  }

  if (!items)
    return (
      <Flex justifyContent="center" alignItems="center" h="80vh">
        <Spinner size="xl" color="brand.500" thickness="5px" />
      </Flex>
    )

  return (
    <Masonry
      breakpointCols={breakPointColsObj}
      className={classes.grid}
      columnClassName={classes.columnGrid}
    >
      {items
        .filter(item =>
          searchTxt.length
            ? item.label.toLowerCase().includes(searchTxt.toLowerCase())
            : true,
        )
        .map(item => {
          const uniqueKey = item.label
          return (
            <Box
              as="figure"
              height="auto"
              key={uniqueKey}
              className={classes.box}
              onMouseEnter={() => setCurrentActive(uniqueKey)}
              onMouseLeave={() => setCurrentActive(null)}
            >
              <Overlay
                currentActive={currentActive}
                label={uniqueKey}
                handleDeletePhoto={handleDeletePhoto}
                id={item.id}
              />
              <span className={classes.imageOverlay}>
                <Image
                  src={item.url}
                  objectFit="fill"
                  className={classes.image}
                  alt={item.label}
                  bg="red"
                />
              </span>
              <Overlay currentActive={currentActive} label={uniqueKey} txt />
            </Box>
          )
        })}
    </Masonry>
  )
}
