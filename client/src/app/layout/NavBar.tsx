import { DarkMode, LightMode } from '@mui/icons-material';
import { AppBar, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import { dark } from '@mui/material/styles/createPalette';


export const NavBar = ({ toggleDarkMode, darkMode }: { toggleDarkMode: () => void, darkMode: boolean }) => {

  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ backgroundColor: '#a913e5', display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} sx={{ color: `${darkMode ? '#a99f9f' : '#eee'}` }}>
          FullStack Store
        </Typography>
        <IconButton onClick={toggleDarkMode}>
          <Icon>{darkMode ? <DarkMode sx={{ color: '#333' }} /> : <LightMode sx={{ color: '#eee' }} />}</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
