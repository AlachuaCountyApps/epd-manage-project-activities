import { Grid } from '@mui/material';
import Appbar from './components/Appbar';

import Home from './components/Home';

function App() {
  return (
    <>
      <Appbar />
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Home />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

export default App;
