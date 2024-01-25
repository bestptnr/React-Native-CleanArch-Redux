import AppNavigation from './src/routes/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { useEffect } from 'react';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
}

