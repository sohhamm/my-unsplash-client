import Masonry from 'react-masonry-css'
import classes from './MasonryContainer.module.css'
import {Box, Button, Text, Image} from '@chakra-ui/react'

const items = [
  {url: 'https://picsum.photos/400/200', name: 'My Item'},
  {url: 'https://picsum.photos/400/400', name: 'Another item'},
  {url: 'https://picsum.photos/400/200', name: 'Pic'},
  {url: 'https://picsum.photos/400/600', name: 'Here is a random one'},
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
      {items.map((item, idx) => {
        return (
          <Box height="auto" key={item.name + idx} className={classes.box}>
            <Image
              src={item.url}
              objectFit="fill"
              className={classes.image}
              bg="red"
            />
            <Overlay label={item.name} />
          </Box>
        )
      })}
    </Masonry>
  )
}

function Overlay({label}: {label: string}) {
  return (
    <Box w="100%" h="100%" className={classes.overlay}>
      <Button colorScheme="red" ml="auto">
        Delete
      </Button>

      <Text textAlign="center">{label}</Text>
    </Box>
  )
}
