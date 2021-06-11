import React from "react";
import axios from "axios";
import "./Style.css";
import { Link } from "react-router-dom";

class Email extends React.Component {
  constructor() {
    super();
    this.state = { data: [], emailUrl: "" };
  }

  async componentDidMount() {
    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const email = urlParams.get("email");
    //console.log(email);
    var r = await axios.get("http://localhost:3003/dobanco?email=" + email);
    console.log(r.data);
    this.setState({ data: r.data, emailUrl: email });
  }

  render() {
    return (
      <div className="main">
        <h3>{this.state.data.Email}</h3>
        <h2>Bom dia, {this.state.data.Nome}.</h2>
        <p>Aqui está sua cobrança de {this.state.data.Valor} reais.</p>
        <p> Pague aqui:</p>
        <Link to={"/payment?email=" + this.state.emailUrl}>
          <div className="mt-3 btn btn-primary">Pagar</div>
        </Link>
      </div>
    );
  }
}

export default Email;
