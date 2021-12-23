import Masonry from 'react-masonry-css'
import classes from './MasonryContainer.module.css'
import {Box, Image} from '@chakra-ui/react'

const items = [
  {url: 'https://picsum.photos/400/200', name: 'My First Item'},
  {url: 'https://picsum.photos/400/400', name: 'Another item'},
  {url: 'https://picsum.photos/400/200', name: 'Third Item'},
  {url: 'https://picsum.photos/400/600', name: 'Here is the Fourth'},
  {url: 'https://picsum.photos/400/500', name: 'High Five'},
  {url: 'https://picsum.photos/400/200', name: 'Magic Five'},
  {url: 'https://picsum.photos/400/300', name: 'Fire Five'},
  {url: 'https://picsum.photos/400/500', name: 'Famous Five'},
  {url: 'https://picsum.photos/400/300', name: 'Wave Five'},
  {url: 'https://picsum.photos/400/600', name: 'Fam Five'},
]

const breakPointColsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

export default function MasonryContainer() {
  return (
    <Masonry
      breakpointCols={breakPointColsObj}
      className={classes.grid}
      columnClassName={classes.columnGrid}
    >
      {items.map(item => {
        return (
          <Box height="auto" key={item.name} className={classes.box}>
            <Image src={item.url} objectFit="fill" />
          </Box>
        )
      })}
    </Masonry>
  )
}
