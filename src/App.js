import { Grid } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

import Appbar from './components/Appbar';
import Error from './components/Error';
import Home from './components/Home';
import Loader from './components/Loader';
import ProgramBoard from './components/ProgramBoard';

function App() {
  const [program, setProgram] = useState('');
  const [programData, setProgramData] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [loader, setLoader] = useState(false);

  const handleProgramChange = (event) => {
    setProgram(event.target.value);
    if (event.target.value) {
      setLoader(true);
      axios
        .get(
          `https://devnishant.alachuacounty.us/time-entry-api/epdProgram/getProgramData?programId=${event.target.value}`
        )
        .then((response) => {
          console.log(response.data);
          if (!response.data.error) {
            setLoader(false);
            setProgramData(response.data);
            setFetchError('');
          } else {
            setLoader(false);
            setProgramData([]);
            setFetchError(response.data.error);
          }
        })
        .catch((error) => {
          console.log(error.message);
          setLoader(false);
          setProgramData([]);
          setFetchError(error.message);
        });
    }
  };

  return (
    <>
      <Appbar />
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Home program={program} handleProgramChange={handleProgramChange} />
          {loader && <Loader />}
          {programData.length === 0 && fetchError && (
            <Error error={fetchError} />
          )}
          {programData.length > 0 && <ProgramBoard data={programData} />}
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

export default App;
