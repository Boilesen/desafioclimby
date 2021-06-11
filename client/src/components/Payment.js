import React from "react";
import axios from "axios";
import "./Style.css";

class Payment extends React.Component {
  constructor() {
    super();
    this.state = { emailUrl: "" };
  }

  async componentDidMount() {
    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const email = urlParams.get("email");
    //console.log(email);
    //var r = await axios.get("http://localhost:3003/dobanco?email=" + email);
    //console.log(r.data);
    this.setState({ emailUrl: email });
  }

  render() {
    return (
      <div className="main">
        <h3>Não consegui fazer a integração com o Wirecard :/</h3>

        <p> Pagar apenas atualiza o banco de dados para pago.</p>
        <form
          action={
            "http://localhost:3003/atualizar?email=" + this.state.emailUrl
          }
          method="post"
        >
          <button type="sumbit" className="mt-3 btn btn-primary">
            Pagar
          </button>
        </form>
      </div>
    );
  }
}

export default Payment;
