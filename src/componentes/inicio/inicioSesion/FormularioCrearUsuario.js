import React, { Component } from "react";

class FormularioCrearUsuario extends Component {
  constructor(args) {
    super(args);
    this.state = {
      usuario: "",
      nombre: "",
      idioma: "",
      genero: "",
      aceptar: "",
      mensaje: "",
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
          <label htmlfor="nombre"> Nombre: </label>{" "}
          <input
            value={this.state.nombre}
            onChange={this.onChange.bind(this)}
            name="nombre"
            id="nombre"
            type="text"
            required="true"
          />
        </div>
        <div>
          <label htmlfor="idioma"> Idioma: </label>
          <select
            id="idioma"
            name="idioma"
            value={this.state.idioma}
            onChange={this.onChange.bind(this)}
            required="true"
          >
            <option value=""> Seleccione un idioma </option>
            <option value="Español"> Español </option>
            <option value="Ingles"> Ingles </option>
            <option value="Frances"> Frances </option>
          </select>
        </div>
        <div>
          <label htmlfor="genero"></label>
          <input
            type="radio"
            name="genero"
            value="masculino"
            onChange={this.onChange.bind(this)}
          />
          Hombre
          <input
            type="radio"
            name="genero"
            value="femenino"
            onChange={this.onChange.bind(this)}
          />
          Mujer
        </div>
        <div>
          <input
            id="aceptar"
            name="aceptar"
            type="checkbox"
            value={this.state.aceptar}
            onChange={this.onChange.bind(this)}
          />
          Aceptar terminos y condiciones
        </div>
        <div>
          <button onClick={this.guardar.bind(this)} />
          Guardar
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

export default FormularioCrearUsuario;
