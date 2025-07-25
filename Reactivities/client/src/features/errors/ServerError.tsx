import { Divider, Paper, Typography } from '@mui/material';
import { useLocation } from 'react-router';

const ServerError = () => {
  const { state } = useLocation();

  return (
    <Paper>
      {state.error ? (
        <>
          <Typography variant="h3" sx={{ px: 4, pt: 2 }} gutterBottom color="secondary">
            {state.error?.message || 'Something went wrong'}
          </Typography>
          <Divider />
          <Typography variant="body1" sx={{ p: 4 }}>
            {state.error?.details || 'Internal server error'}
          </Typography>
        </>
      ) : (
        <Typography variant="h5">Server Error</Typography>
      )}
    </Paper>
  );
};

export default ServerError;
