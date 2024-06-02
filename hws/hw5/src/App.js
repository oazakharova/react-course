import './App.css';

import React from 'react';
import { Provider } from 'react-redux';

import store from './components/store'
import ThemeSwitcher from './components/ThemeSwitcher';


function App() {
  return (
    <Provider store={store}>
      <ThemeSwitcher />
  </Provider>
  );
}

export default App;
