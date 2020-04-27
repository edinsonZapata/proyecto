import React from 'react';
import logo from './general/imagenes/logo.svg';
import './general/css/App.css';

import Seccion1 from './componentes/Seccion1';

var nombre = "Zeo";
var codigo = 2;

function App() {
    return (<div className="App">
        <header className="App-header">
            <img src={logo}
                className="App-logo"
                alt="logo" />
            <p>
                Bienvenido {nombre};
            </p>
            <h1>Proyecto de prueba {codigo} </h1>
            <section className="componentes">
                <Seccion1 />
                <Seccion1 />
                <Seccion1 />
            </section>
        </header>
    </div>
    );
}

export default App;
