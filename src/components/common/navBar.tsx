import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Outlet } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, }} >
      <AppBar position="static">
        <Toolbar sx={{bgcolor: (theme) => theme.palette.backGroungColor.main}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          {/* <MenuIcon /> */}
          </IconButton>
            <Box sx={{flexGrow:1}}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: (theme) => theme.palette.fontColor.main }}>
                  SimSimTalk
              </Typography>
            </Box>
          
          <Button color="inherit" sx={{ color: (theme) => theme.palette.fontColor.main}}>Login</Button>
          <Button color="inherit" sx={{ color: (theme) => theme.palette.fontColor.main}}>Signup</Button>
        </Toolbar>
        </AppBar>   
        <Box>
          {/* <Toolbar></Toolbar>   */}
          <Outlet />
        </Box>
    </Box>
  );
}