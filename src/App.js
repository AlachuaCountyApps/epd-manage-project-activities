import { Grid } from '@mui/material';
import { useState } from 'react';

import Appbar from './components/Appbar';
import Home from './components/Home';

function App() {
  const [program, setProgram] = useState('');

  const handleProgramChange = (event) => {
    setProgram(event.target.value);
  };

  return (
    <>
      <Appbar />
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Home program={program} handleProgramChange={handleProgramChange} />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

export default App;
