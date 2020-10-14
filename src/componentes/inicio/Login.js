import React, { useState } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import "./general/css/App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(evento) {
      evento.preventDefault();
      alert("Bienvenido");
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          placeholder="Ingrese su correo"
          onChange={(evento) => setEmail(evento.target.value)}
          value={email}
        />
        <input
          id="clave"
          placeholder="Ingrese su clave"
          onChange={(evento) => setPassword(evento.target.value)}
          value={password}
        />
        <button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
