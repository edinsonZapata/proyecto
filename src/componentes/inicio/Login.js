import React from "react";

class Login extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      usuario: "",
      clave: "",
    };
  }

  onChange(evento) {
    if (evento.target.name === "aceptar") {
      this.setState({
        [evento.target.name]: evento.target.checked,
      });
    } else {
      this.setState({
        [evento.target.name]: evento.target.value,
      });
    }
  }

  guardar() {
    if (!this.validar()) {
      return;
    } else {
      this.setState({
        mensaje: "Guardado con exito",
      });
    }
  }

  validar() {
    if (this.state.aceptar != true) {
      this.setState({
        mensaje: "Acepte los terminos y condiciones",
      });
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <div>
          <label htmlfor="usuario"> Usuario: </label>{" "}
          <input
            value={this.state.usuario}
            onChange={this.onChange.bind(this)}
            name="usuario"
            id="usuario"
            type="text"
            required="true"
          />
        </div>
        <div>
          <label htmlfor="clave"> Clave: </label>{" "}
          <input
            value={this.state.clave}
            onChange={this.onChange.bind(this)}
            name="clave"
            id="clave"
            type="text"
            required="true"
          />
        </div>
        <div>
          <button onClick={this.guardar.bind(this)} />
          Ingresar
          <span>{this.state.mensaje}</span>
        </div>
        <div>
          <label htmlfor="info">Información de registro:</label>
          <span> {JSON.stringify(this.state)} </span>
        </div>
      </div>
    );
  }
}

export default Login;
