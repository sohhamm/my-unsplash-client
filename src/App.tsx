import { Box } from '@chakra-ui/react'
import * as React from 'react'
import './App.css'
import Header from './layout/Header/Header'
import MasonryContainer from './layout/MasonryContainer/MasonryContainer'

function App() {
  return (
    <Box w='100%'>
      <Header />
      <MasonryContainer />
    </Box>
  )
}

export default App
