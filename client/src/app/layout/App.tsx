
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { NavBar } from './NavBar'
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/store';

function App() {

  // const theme = createTheme({
  //   palette: {
  //     mode: 'dark'
  //   }
  // })


  // const [darkMode, setDarkMode] = useState(false);

  const { darkMode } = useAppSelector((state) => state.ui);


  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
    },

  })


  // const toggleDarkMode = () => {
  //   localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  //   setDarkMode(prev => !prev)
  // }


  // const addProduct = () => {
  //   setProducts(prev => [...prev, {
  //     id: prev.length + 1,
  //     name: 'New Product',
  //     description: 'New Description',
  //     price: 100,
  //     pictureUrl: 'https://picsum.photos/200',
  //     type: 'New Type',
  //     brand: 'New Brand',
  //     quantityInStock: 100
  //   }]
  //   )
  // }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> */}
      <NavBar />
      <Box sx={{
        minHeight: '100vh', background: darkMode ?
          'linear-gradient(45deg, #27031b 30%, #42373f 90%)' :
          'linear-gradient(45deg, #9feee7 30%, #56d5ee 90%)',
        paddingTop: '76px'
      }}>
        <Container maxWidth='xl' >
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>

  )
}

export default App
