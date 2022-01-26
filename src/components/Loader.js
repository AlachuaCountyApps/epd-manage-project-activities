import { Box, CircularProgress } from '@mui/material';

export default function Loader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
      <CircularProgress size={100} />
    </Box>
  );
}
