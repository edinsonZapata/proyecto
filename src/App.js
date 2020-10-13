import React from 'react';
import logo from './general/imagenes/logo.png';
import './general/css/App.css';

import Seccion from './componentes/Seccion.js';
import AccesoTareas from './componentes/AccesoTareas.js';

var nombre = "Familia Zapata Medrano";
var codigo = 2;

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Bienvenidos { nombre } <
        /p> <
        section className = "componentes" >
        <
        AccesoTareas / >
        <
        /section> <
        section className = "componentes" >
        <
        Seccion / >
        <
        /section> <
        body >
        <
        link rel = "stylesheet"
        href = "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" / >

        <
        link rel = "stylesheet"
        href = "https://fonts.googleapis.com/icon?family=Material+Icons" / >
        <
        div id = "root" > < /div> < /
        body >

        <
        h2 > Cosas < /h2> <
        p > Aquí encontrará varias cosas: < /p>

        <
        /header> < /
        div >
    );
}

export default App;