import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Email from "./components/Email";
import Payment from "./components/Payment";
import Saldo from "./components/Saldo";

const App = (props) => {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/email" component={Email} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/saldo" component={Saldo} />
      </Switch>
    </div>
  );
};

export default App;
