import { Box, Button, ButtonGroup, List, ListItemText, Paper, Typography } from '@mui/material';
import { useStore } from '../../lib/hooks/useStore';
import { observer } from 'mobx-react-lite';

const Counter = observer(() => {
  const { CounterStore } = useStore();

  return (
    <Box display="flex" justifyContent="space-between">
      <Box sx={{ width: '60%' }}>
        <Typography variant="h4" gutterBottom>
          {CounterStore.title}
        </Typography>
        <Typography variant="h5">The count is : {CounterStore.count}</Typography>

        <ButtonGroup sx={{ mt: 3 }}>
          <Button variant="contained" color="success" onClick={() => CounterStore.increment()}>
            Increment
          </Button>
          <Button variant="contained" color="primary" onClick={() => CounterStore.increment(5)}>
            Increment by 5
          </Button>
          <Button variant="contained" color="error" onClick={() => CounterStore.decrement()}>
            Decrement
          </Button>
        </ButtonGroup>
      </Box>
      <Paper sx={{ width: '40%', p: 4 }}>
        <Typography variant="h5">Counter events ({CounterStore.eventsCount})</Typography>
        <List>
          {CounterStore.events.map((event, index) => (
            <ListItemText key={index}>{event}</ListItemText>
          ))}
        </List>
      </Paper>
    </Box>
  );
});

export default Counter;
