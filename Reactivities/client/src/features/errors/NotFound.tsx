import { SearchOff } from '@mui/icons-material';
import { Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <Paper
      sx={{
        heigh: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 6,
      }}
    >
      <SearchOff sx={{ fontSize: 100 }} color="primary" />
      <Typography gutterBottom variant="h3">
        Could not find what you are looking for
      </Typography>
      <Button fullWidth component={Link} to="/activities">
        Return to the home page
      </Button>
    </Paper>
  );
};

export default NotFound;
