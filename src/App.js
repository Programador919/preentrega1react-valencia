import './App.css';

import { NavBar} from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import React from 'react';

function App() {


  return (
    <div className="App">
    
    <NavBar/>
    <ItemListContainer greeting={'Quieres comprar moto llegaste al lugar indicado'} />
    </div>
  );
}

export default App;
