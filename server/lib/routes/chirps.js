"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../middleware/chirpstore'),
    CreateChirp = _require.CreateChirp,
    DeleteChirp = _require.DeleteChirp,
    GetChirps = _require.GetChirps,
    GetChirp = _require.GetChirp,
    UpdateChirp = _require.UpdateChirp;

router.get('/:id', function (req, res) {
  res.send(GetChirp(req.params.id));
});
router.get('/', function (req, res) {
  res.send(GetChirps());
});
router.post('/', function (req, res) {
  CreateChirp(req.body);
  res.send('new chirp created');
});
router.put('/', function (req, res) {
  var _req$body = req.body,
      id = _req$body.id,
      chirp = _req$body.chirp;
  UpdateChirp(id, chirp);
  res.send('Chirp Updated');
});
router.delete('/', function (req, res) {
  DeleteChirp(req.body.id);
  res.send('Chirp Deleted');
});
module.exports = router;