const fs = require('fs');
let chirps = [];


if (fs.existsSync('chirps.json')) {
    chirps = JSON.parse(fs.readFileSync('chirps.json'));
}


let getChirps = () => {
    return chirps.slice(); //create a copy and return it
};


let getChirp = (id) => {
    return chirps.filter((e) => e.id === id)[0]; //create a copy and return it
};


let createChirp = (chirp) => {
    chirp.id = chirps.slice(-1)[0].id + 1;
    chirps[chirps.length] = chirp;
    writeChirps();
};


let updateChirp = (id, chirp) => {
    const idx = chirps.findIndex((e) => e.id === id);
    chirps.splice(idx, 1, chirp);
    writeChirps();
    return true;
};


let deleteChirp = (id) => {
    const idx = chirps.findIndex((e) => e.id === id);
    chirps.splice(idx, 1);
    writeChirps();
};


let writeChirps = () => {
    fs.writeFileSync('chirps.json', JSON.stringify(chirps));
};


module.exports = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
};