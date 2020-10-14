import React from "react";
import logo from "./general/imagenes/logo.png";
import "./general/css/App.css";

import Footer from "./componentes/footer/Footer.js";
import Login from "./componentes/inicio/Login.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ingrese usuario y contraseña</p>
        <section className="componentes">
          <Login />
        </section>
        <section className="componentes">
          <Footer />
        </section>
      </header>
    </div>
  );
}

export default App;
