import * as React from 'react'
import Masonry from 'react-masonry-css'
import classes from './MasonryContainer.module.css'
import {Box, Image} from '@chakra-ui/react'
import {breakPointColsObj, items} from '../../constants/index.const'
import Overlay from '../../components/Overlay/Overlay'
import {getAllPhotos} from '../../data/get-all-photos'
import {PhotoType} from '../../types'

declare interface MasonryContainerProps {
  searchTxt: string
  shouldRefresh: boolean
  setShouldRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MasonryContainer({
  searchTxt,
  shouldRefresh,
  setShouldRefresh,
}: MasonryContainerProps) {
  const [items, setItems] = React.useState<PhotoType[] | null>(null)
  const [currentActive, setCurrentActive] = React.useState<string | null>(null)

  React.useEffect(() => {
    const client = async () => {
      const items = await getAllPhotos()
      setItems(items)
    }

    client()
  }, [shouldRefresh])

  if (!items) return <p>loading...</p>
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
        .map((item, _idx) => {
          // item.label + key would be unique but test this out
          // const uniqueKey = item.label + idx
          const uniqueKey = item.label
          console.log({uniqueKey})
          return (
            <Box
              as="figure"
              height="auto"
              key={uniqueKey}
              className={classes.box}
              onMouseEnter={() => setCurrentActive(uniqueKey)}
              onMouseLeave={() => setCurrentActive(null)}
            >
              <Overlay currentActive={currentActive} label={uniqueKey} />
              <Image
                src={item.url}
                objectFit="fill"
                className={classes.image}
                alt={item.label}
                bg="red"
              />
              <Overlay currentActive={currentActive} label={uniqueKey} txt />
            </Box>
          )
        })}
    </Masonry>
  )
}
