import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
            Manage EPD Time Entry Programs and Activities
          </Typography>
          <img
            src='/acLogo.png'
            alt='Alachua County Logo'
            style={{
              marginBottom: '-0.7rem ',
              zIndex: '100',
              position: 'relative',
            }}
            height='50px'
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
