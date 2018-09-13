"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _mysql = _interopRequireDefault(require("mysql"));

var _chirpstore = require("../middleware/chirpstore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

var connection = _mysql.default.createConnection({
  host: "localhost",
  database: "chirpr",
  user: 'chirprapp',
  password: 'password'
});

router.get('/:id', function (req, res) {
  var query = "SELECT * FROM users WHERE id=".concat(req.params.id);
  connection.connect();
  connection.query(query, function (err, result, fields) {
    if (err) {
      connection.end();
      return console.log('ERROR: ', err);
    }

    connection.end();
    res.send(result);
  });
});
router.get('/', function (req, res) {
  var query = "SELECT * FROM users;";
  connection.connect();
  connection.query(query, function (err, result, fields) {
    if (err) {
      connection.end();
      return console.log('ERROR: ', err);
    }

    connection.end();
    res.send(result);
  });
});
router.post('/', function (req, res) {
  var query = "INSERT INTO users SET ?";
  var user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  connection.connect();
  connection.query(query, user, function (err, result, fields) {
    if (err) {
      connection.end();
      return console.log('ERROR: ', err);
    }

    connection.end();
    res.send(result);
  });
});
router.put('/', function (req, res) {
  var id = parseInt(req.body.id, 10);
  var query = "UPDATE users SET ? WHERE id=".concat(id);
  var user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  connection.connect();
  connection.query(query, user, function (err, result, fields) {
    if (err) {
      connection.end();
      return console.log('ERROR: ', err);
    }

    connection.end();
    res.send(result);
  });
});
router.delete('/', function (req, res) {
  var id = parseInt(req.body.id, 10);
  var query = "DELETE FROM users WHERE id=".concat(id);
  connection.query(query, function (err, result, fields) {
    if (err) {
      connection.end();
      return console.log('ERROR: ', err);
    }

    connection.end();
    res.send(result);
  });
});
var _default = router;
exports.default = _default;