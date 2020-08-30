import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
