import React from 'react';
import { Provider } from 'react-redux';
import { Screen } from './components/character/Screen';
import { store
 } from './store/store';

export const PotterApp = () => {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  )
}
