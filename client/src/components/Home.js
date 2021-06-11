import React from "react";
// import { Link } from "react-router-dom";

import "./Style.css";

function Home() {
  return (
    <div className="main">
      <h1>Insira os dados para cobrança</h1>
      <div className="form">
        <form action="http://localhost:3003/banco" method="post">
          <label>Nome:</label>
          <input id="Nome" name="Nome" type="text" className="form-control" />
          <label>Email:</label>
          <input id="Email" name="Email" type="mail" className="form-control" />
          <label>Valor:</label>
          <input
            id="Valor"
            name="Valor"
            type="number"
            className="form-control"
          />
          <button type="sumbit" className="mt-3 btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
