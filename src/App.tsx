import React, { FC } from 'react';
import { BrowserRouter, Router } from "react-router-dom";
import history from './services/history';
import './App.css';

import Main from "./main"



const App: FC = () => {

  return (
    <BrowserRouter>
      <Router history={history}>
        <Main />
      </Router>
    </BrowserRouter>

  );
}

export default App;
