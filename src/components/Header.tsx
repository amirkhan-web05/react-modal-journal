import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AUTH_ROUTE } from '../utils'

export const Header:React.FC = ():JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom:'15px' }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          <Link style={{color:'#fff'}} to='/'>
            App
          </Link>
        </Typography>
        <Typography variant='h5'>
          <Link style={{color:'#fff'}} to={`${AUTH_ROUTE}`}>
            Login
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}