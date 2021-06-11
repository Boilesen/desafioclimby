import React from "react";
import axios from "axios";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Saldo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    var r = await axios.get("http://localhost:3003/pegartodobanco");
    console.log(r.data);
    this.setState({
      data: r.data,
    });
  }
  render() {
    const listItems = this.state.data.map((d) => (
      <tr>
        <td>{d.Nome}</td>
        <td>{d.Email}</td>
        <td>{d.Valor} reais</td>
        <td>({d.Pago ? "Pago" : "Não pago"}) </td>
      </tr>
    ));

    return (
      <div>
        <table className="mt-0 table">
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Valor</th>
            <th>Pago</th>
          </tr>
          {listItems}
        </table>
      </div>
    );
  }
}

export default Saldo;
