import logo from './logo.svg';
import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import Header from './header';
import './App.css';

import Machstatz from './machstatz';


function App() {
  return (
    <HashRouter>
    <Header/>
    <Route exact path ="/:id/machstatz" component={Machstatz}/>
    </HashRouter>
  );
}

export default App;
