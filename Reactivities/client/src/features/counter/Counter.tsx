import { Button, ButtonGroup, Typography } from '@mui/material';
import { useStore } from '../../lib/hooks/useStore';
import { observer } from 'mobx-react-lite';

const Counter = observer(() => {
  const { CounterStore } = useStore();

  return (
    <>
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
    </>
  );
});

export default Counter;
