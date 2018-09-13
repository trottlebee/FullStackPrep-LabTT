"use strict";

var fs = require('fs');

var chirps = [];

if (fs.existsSync('chirps.json')) {
  chirps = JSON.parse(fs.readFileSync('chirps.json'));
}

var getChirps = function getChirps() {
  return chirps.slice(); //create a copy and return it
};

var getChirp = function getChirp(id) {
  return chirps.filter(function (e) {
    return e.id === id;
  })[0]; //create a copy and return it
};

var createChirp = function createChirp(chirp) {
  chirp.id = chirps.slice(-1)[0].id + 1;
  chirps[chirps.length] = chirp;
  writeChirps();
};

var updateChirp = function updateChirp(id, chirp) {
  var idx = chirps.findIndex(function (e) {
    return e.id === id;
  });
  chirps.splice(idx, 1, chirp);
  writeChirps();
  return true;
};

var deleteChirp = function deleteChirp(id) {
  var idx = chirps.findIndex(function (e) {
    return e.id === id;
  });
  chirps.splice(idx, 1);
  writeChirps();
};

var writeChirps = function writeChirps() {
  fs.writeFileSync('chirps.json', JSON.stringify(chirps));
};

module.exports = {
  CreateChirp: createChirp,
  DeleteChirp: deleteChirp,
  GetChirps: getChirps,
  GetChirp: getChirp,
  UpdateChirp: updateChirp
};