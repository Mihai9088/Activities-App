import { Store } from '@mui/icons-material';
import CounterStore from './CounterStore';
import { createContext } from 'react';
import { UiStore } from './uiStore';

interface Store {
  CounterStore: CounterStore;
  uiStore: UiStore;
}

export const store: Store = {
  CounterStore: new CounterStore(),
  uiStore: new UiStore(),
};

export const StoreContext = createContext(store);
