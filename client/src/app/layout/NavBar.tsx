import { DarkMode, LightMode, ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, Icon, IconButton, LinearProgress, List, ListItem, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setDarkMode } from './uiSlice';

const middleLinks = [
  { title: 'categories', path: '/catelog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },
];

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
];

export const NavBar = () => {

  const navigate = useNavigate();


  const { isLoading, darkMode } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const NavbarStyleObject = {
    color: `${darkMode ? '#a99f9f' : '#eee'}`, textDecoration: 'none',
    '&:hover': { textDecoration: 'underline', '&.active': { textDecoration: 'underline' } }
  }

  return (
    <AppBar position='fixed'>

      <Toolbar sx={{ backgroundColor: '#a913e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component={'div'} onClick={() => navigate('/')} sx={{ flexGrow: 1, color: `${darkMode ? '#a99f9f' : '#eee'}`, cursor: 'pointer' }}>
            FullStack Store
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', marginLeft: '6rem' }}>
          <List sx={{ display: 'flex' }}>
            {
              middleLinks.map(({ title, path }) => (
                <ListItem component={NavLink} key={title}
                  to={path}
                  sx={NavbarStyleObject}
                >
                  {title.toUpperCase()}
                </ListItem>
              ))
            }
          </List>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size='large' sx={{ color: 'inherit' }}>
            <Badge badgeContent={6} color='info' >
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: 'flex' }}>
            {
              rightLinks.map(({ title, path }) => (
                <ListItem component={NavLink} key={title} to={path}
                  sx={NavbarStyleObject}>
                  {title.toUpperCase()}
                </ListItem>
              ))
            }
          </List>
        </Box>
        <Box>
          <IconButton onClick={() => dispatch(setDarkMode())}>
            <Icon>{darkMode ? <DarkMode sx={{ color: '#333' }} /> : <LightMode sx={{ color: '#eee' }} />}</Icon>
          </IconButton>
        </Box>
      </Toolbar>

      {
        isLoading && <Box><LinearProgress color='info' /></Box>
      }
    </AppBar >
  )
}


