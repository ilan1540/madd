import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './componants/layout/Navbar';
import Routes from './componants/routes/Routes';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
