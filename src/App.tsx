import {Box} from '@chakra-ui/react'
import * as React from 'react'
import './App.css'
import Header from './layout/Header/Header'
import MasonryContainer from './layout/MasonryContainer/MasonryContainer'

function App() {
  const [searchTxt, setSearchTxt] = React.useState('')

  return (
    <Box w="100%">
      <Header searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
      <MasonryContainer searchTxt={searchTxt} />
    </Box>
  )
}

export default App
