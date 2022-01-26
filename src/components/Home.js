import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';

export default function Home({ program, handleProgramChange }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id='select-program'>Select Program</InputLabel>
          <Select
            labelId='select-program'
            id='program'
            value={program}
            label='Select Program'
            onChange={handleProgramChange}
          >
            <MenuItem value={1668241403}>Admin</MenuItem>
            <MenuItem value={928287777}>Hazmat</MenuItem>
            <MenuItem value={925232059}>Land</MenuItem>
            <MenuItem value={1503973566}>Natural Resources</MenuItem>
            <MenuItem value={1502946810}>Petroleum</MenuItem>
            <MenuItem value={925231091}>Water</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
