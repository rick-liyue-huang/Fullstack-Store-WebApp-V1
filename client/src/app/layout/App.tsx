
import { useEffect, useState } from 'react'
import { Product } from '../models/products'
import { Catelog } from '../../features/catelog/Catelog'
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { NavBar } from './NavBar'
import { dark } from '@mui/material/styles/createPalette'


function App() {

  // const theme = createTheme({
  //   palette: {
  //     mode: 'dark'
  //   }
  // })

  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
    },

  })


  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error))

  }, [])

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  const addProduct = () => {
    setProducts(prev => [...prev, {
      id: prev.length + 1,
      name: 'New Product',
      description: 'New Description',
      price: 100,
      pictureUrl: 'https://picsum.photos/200',
      type: 'New Type',
      brand: 'New Brand',
      quantityInStock: 100
    }]
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Box sx={{
        minHeight: '100vh', background: darkMode ?
          'linear-gradient(45deg, #27031b 30%, #42373f 90%)' :
          'linear-gradient(45deg, #9feee7 30%, #56d5ee 90%)',
        paddingTop: '76px'
      }}>
        <Container maxWidth='xl' >
          <Catelog products={products} />
        </Container>
      </Box>
    </ThemeProvider>

  )
}

export default App
