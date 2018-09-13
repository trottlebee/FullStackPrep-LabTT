const express = require('express');

const router = express.Router();


const {
    CreateChirp,
    DeleteChirp,
    GetChirps,
    GetChirp,
    UpdateChirp
} = require('../middleware/chirpstore');


router.get('/:id', (req, res) => {
    res.send(GetChirp(req.params.id));
});


router.get('/', (req, res) => {
    res.send(GetChirps());
});


router.post('/', (req, res) => {
    CreateChirp(req.body);
    res.send('new chirp created');
});


router.put('/', (req, res) => {
    const { id, chirp } = req.body;
    UpdateChirp(id, chirp);
    res.send('Chirp Updated');
});


router.delete('/', (req, res) => {
    DeleteChirp(req.body.id);
    res.send('Chirp Deleted');
});


module.exports = router;