import React from "react";
import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [carrera, setCarrera] = useState("");
  const [edad, setEdad] = useState("");
  const [sexo, setSexo] = useState("F");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [data, setData] = React.useState([]);
  const [error, setError] = useState(null);

  const guardarDatos = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      setError("El nombre es requerido!");
      return;
    }

    if (!apellido.trim()) {
      setError("El apellido es requerido!");
      return;
    }
    if (!String(edad.trim())) {
      setError("La edad es requerida");
      return;
    }

    if (!carrera.trim()) {
      setError("La carrera es requerida!");
      return;
    }
    if (!String(telefono.trim())) {
      setError("Número de telefono requerido!");
      return;
    }

    if (!correo.trim()) {
      setError("Correo requerido!");
      return;
    }

    const repetido = data.find((x) => telefono === x.telefono);
    if (repetido !== undefined) {
      setError("El telefono ya existe!");
      return;
    }

    const repetido2 = data.find((x) => correo === x.correo);
    if (repetido2 !== undefined) {
      setError("El correo ya existe!");
      return;
    }

    setData([
      ...data,
      {
        nombre,
        apellido,
        carrera,
        edad,
        sexo,
        correo,
        telefono,
      },
    ]);

    setNombre("");
    setApellido("");
    setCarrera("");
    setEdad("");
    setSexo("F");
    setCorreo("");
    setTelefono("");
  };

  const eliminar = (tell) => {
    const aux = data.filter((item) => item.telefono !== tell);
    setData(aux);
  };

  return (
    <div className="container mt-2">
      <h2 className="text-center">Rúbrica-Segundo corte</h2>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Listar Usuarios</h4>
          <br />
          <table className="table table-bordered table-info">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Carrera</th>
                <th>Edad</th>
                <th>Sexo</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elemento) => (
                <tr>
                  <td>{elemento.nombre}</td>
                  <td>{elemento.apellido}</td>
                  <td>{elemento.carrera}</td>
                  <td>{elemento.edad}</td>
                  <td>{elemento.sexo}</td>
                  <td>{elemento.correo}</td>
                  <td>{elemento.telefono}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminar(elemento.telefono)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <h4 className="text-center">Agregar Usuarios</h4>
          <br />
          {error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : null}

          <form onSubmit={guardarDatos}>
            <input
              className="form-control mb-2 bg-info text-black bg-info text-white"
              type="text"
              placeholder="Ingrese Nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
            <input
              className="form-control mb-2 bg-info text-black"
              type="text"
              placeholder="Ingrese Apellido"
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
            />
            <input
              className="form-control mb-2 bg-info text-black"
              type="text"
              placeholder="Ingrese carrera"
              onChange={(e) => setCarrera(e.target.value)}
              value={carrera}
            />
            <input
              className="form-control mb-2 bg-info text-black"
              type="number"
              placeholder="Ingrese edad"
              onChange={(e) => setEdad(e.target.value)}
              value={edad}
            />
            <select
              name="sexo"
              id="sexo"
              className="form-select mb-2 bg-info text-black"
              bg-info
              text-black
              aria-label="Seleccione un sexo"
              onChange={(e) => setSexo(e.target.value)}
              value={sexo}
            >
              <option value="F" defaultChecked>
                Seleccione un sexo
              </option>
              <option value="H">Hombre</option>
            </select>
            <input
              className="form-control mb-2 bg-info text-black"
              type="email"
              placeholder="Ingrese correo"
              onChange={(e) => setCorreo(e.target.value)}
              value={correo}
            />
            <input
              className="form-control mb-2 bg-info text-black"
              type="number"
              placeholder="Ingrese telefono"
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
            />
            <button className="btn btn-primary btn-block" type="submit">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Formulario };
