import { Grid } from '@mui/material';
import Appbar from './components/Appbar';

import Home from './components/Home';

function App() {
  return (
    <>
      <Appbar />
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Home />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
}

export default App;
