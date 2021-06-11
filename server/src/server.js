const clientURL = "http://localhost:3000";

const port = 3003;

const express = require("express");
const server = express();
const allowCors = require("./config/cors");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(allowCors);

server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}.`);
});

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = mongoose.connect("mongodb://localhost/", {
  useMongoClient: true,
});

//Schema da cobrança, nesse caso neste arquivo pela simplicidade.
const chargeSchema = new mongoose.Schema({
  Nome: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Valor: { type: Number, required: true },
  Pago: { type: Boolean, required: false },
});
const Charge = mongoose.model("Charge", chargeSchema);

server.get("/", function (req, rest) {
  res.send("express is working");
});

server.post("/banco", function (req, res) {
  let vNome = req.body.Nome;
  let vEmail = req.body.Email;
  let vValor = req.body.Valor;
  Charge.create({ Nome: vNome, Email: vEmail, Valor: vValor, Pago: false });
  res.redirect(clientURL + "/email?email=" + vEmail);
});

server.get("/dobanco", function (req, res) {
  let vEmail = req.query.email;
  let myObj = {};
  //res.send("olá + " + vEmail);
  Charge.findOne(
    { Email: vEmail },
    "Nome Email Valor Pago",
    function (err, obj) {
      if (err) return handleError(err);
      res.json(obj);
    }
  );
});
server.post("/atualizar", function (req, res) {
  let vEmail = req.query.email;
  let myObj = {};

  Charge.findOneAndUpdate(
    { Email: vEmail },
    { $set: { Pago: true } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }
      res.redirect(clientURL + "/saldo");
      console.log(doc);
    }
  );
});
server.get("/pegartodobanco", function (req, res) {
  Charge.find({}, function (err, charges) {
    /*
    var userMap = {};

    users.forEach(function(user) {
      userMap[user._id] = user;
    });
    */
    res.send(charges);
  });
});
