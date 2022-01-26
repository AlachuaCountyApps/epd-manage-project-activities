import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function Error({ error }) {
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        sx={{
          border: 1,
          mt: 6,
          ml: 3,
          pb: 3,
          pr: 3,
          textAlign: 'center',
          borderColor: 'red',
        }}
      >
        <Typography variant='h6'>
          An unfortunate error has occurred. Please try again after some time.
          Contact ITS is the problem still persists.
        </Typography>
        <Typography variant='h5' sx={{ color: 'red', mt: 6 }}>
          Error: {error}
        </Typography>
      </Grid>
    </Grid>
  );
}
