import React from 'react';
import './App.css';

import Home from './views/home/Home'
import Home2 from './views/home/Home2'

function App() {
  return (
    <div className="App">
     <Home msg="Oi sou o Componente Home passando parametro"></Home>
     <Home2 msg="Oi sou o Componente Home2 passando parametro"></Home2>
    </div>
  );
}

export default App;
