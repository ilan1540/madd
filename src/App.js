import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Navbar from './componants/layout/Navbar';
import Routes from './componants/routes/Routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
