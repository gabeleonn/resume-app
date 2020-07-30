import React from 'react';
import { Provider } from 'react-redux';

import store from '../redux';
import './styles/index.scss';
import Router from './Router';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
