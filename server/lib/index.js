"use strict";

var _path = require("path");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./routes/index"));

var _routing = _interopRequireDefault(require("./middleware/routing.mw"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLIENT_PATH = (0, _path.join)(__dirname, '../../client');
var app = (0, _express.default)();
app.use(_express.default.static(CLIENT_PATH));
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use('/api', _index.default);
app.use(_routing.default);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server listening on port: ".concat(PORT));
});