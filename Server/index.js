const express = require("express");

require("dotenv").config();
const morgan = require("morgan");
const { auth, requiresAuth } = require("express-openid-connect");

const {} = require("./handlers");

const PORT = 4000;

express()
  //----------------------------------------------------------
  //Not sure what this is - copied from group project
  //----------------------------------------------------------
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })

  //----------------------------------------------------------
  //'initializing' Morgan + Data sent to BE in requests
  //----------------------------------------------------------
  .use(morgan("tiny"))
  .use(express.json())
  //----------------------------------------------------------
  //Endpoints
  //----------------------------------------------------------

  // catch all other endpoint
  .get("*", (req, res) => res.status(404).json("You lost in the sauce."))

  .listen(PORT, () => console.info(`You are listening on port ${PORT}`));
