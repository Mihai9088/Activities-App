import { Store } from '@mui/icons-material';
import CounterStore from './CounterStore';
import { createContext } from 'react';

interface Store {
  CounterStore: CounterStore;
}

export const store: Store = {
  CounterStore: new CounterStore(),
};

export const StoreContext = createContext(store);
