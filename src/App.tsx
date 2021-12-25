import {Box} from '@chakra-ui/react'
import * as React from 'react'
import './App.css'
import Header from './layout/Header/Header'
import MasonryContainer from './layout/MasonryContainer/MasonryContainer'

function App() {
  const [searchTxt, setSearchTxt] = React.useState('')
  const [shouldRefresh, setShouldRefresh] = React.useState(false)

  return (
    <Box w="100%">
      <Header
        searchTxt={searchTxt}
        setSearchTxt={setSearchTxt}
        setShouldRefresh={setShouldRefresh}
      />
      <MasonryContainer
        searchTxt={searchTxt}
        shouldRefresh={shouldRefresh}
        setShouldRefresh={setShouldRefresh}
      />
    </Box>
  )
}

export default App
