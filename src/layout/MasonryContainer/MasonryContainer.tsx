import * as React from 'react'
import Masonry from 'react-masonry-css'
import classes from './MasonryContainer.module.css'
import {Box, Button, Text, Image} from '@chakra-ui/react'
import {breakPointColsObj, items} from '../../constants/index.const'

export default function MasonryContainer() {
  const [currentActive, setCurrentActive] = React.useState<string | null>(null)
  return (
    <Masonry
      breakpointCols={breakPointColsObj}
      className={classes.grid}
      columnClassName={classes.columnGrid}
    >
      {items.map((item, idx) => {
        const uniqueKey = item.name + idx
        return (
          <Box
            height="auto"
            key={uniqueKey}
            className={classes.box}
            as="figure"
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
          </Box>
        )
      })}
    </Masonry>
  )
}

function Overlay({
  currentActive,
  label,
}: {
  currentActive: string | null
  label: string
}) {
  return (
    <Box
      as="figcaption"
      w="100%"
      h="100%"
      className={classes.overlay}
      opacity={currentActive === label ? '1' : '0'}
    >
      <Button colorScheme="red" ml="auto">
        Delete
      </Button>

      <Text textAlign="center">{label}</Text>
    </Box>
  )
}
