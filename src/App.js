import React from 'react';
import logo from './general/imagenes/logo.svg';
import './general/css/App.css';

import Seccion from './componentes/Seccion';

var nombre = "Zeo";
var codigo = 2;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido {nombre}.
        </p>
        <h1>Proyecto de prueba {codigo} </h1>
        <section className="componente">
          <Seccion />
        </section>
      </header>
    </div>
  );
}

export default App;
