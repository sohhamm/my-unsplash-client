import * as React from 'react'
import Masonry from 'react-masonry-css'
import classes from './MasonryContainer.module.css'
import {Box, Button, Text, Image} from '@chakra-ui/react'
import {breakPointColsObj, items} from '../../constants/index.const'
import Overlay from '../../components/Overlay/Overlay'

declare interface MasonryContainerProps {
  searchTxt: string
}

export default function MasonryContainer({searchTxt}: MasonryContainerProps) {
  const [currentActive, setCurrentActive] = React.useState<string | null>(null)
  return (
    <Masonry
      breakpointCols={breakPointColsObj}
      className={classes.grid}
      columnClassName={classes.columnGrid}
    >
      {items
        .filter(item =>
          searchTxt.length
            ? item.name.toLowerCase().includes(searchTxt.toLowerCase())
            : true,
        )
        .map((item, _idx) => {
          // item.name + key would be unique but test this out
          // const uniqueKey = item.name + idx
          const uniqueKey = item.name
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
                alt={item.name}
                bg="red"
              />
              <Overlay currentActive={currentActive} label={uniqueKey} txt />
            </Box>
          )
        })}
    </Masonry>
  )
}
