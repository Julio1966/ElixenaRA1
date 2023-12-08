const express = require('express');
const mysql = require('mysql'); // Mueve la importación del módulo mysql aquí

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/bienvenido', (req, res) => {
      res.send("<h1>Bienvenido al server de Julio</h1>")
    });
    this.app.get('/cons', (req, res) => {
      res.send("Esta es una prueba")
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("http://127.0.0.1:" + this.port)
    });
  }
}

module.exports = Server;