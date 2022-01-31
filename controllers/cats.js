const randomJSON = require('../models/random');
const catService = require('../services/cat');

exports.getCats = async (req, res) => {
    const data = await randomJSON.getAllCats();
    res.send(data);
}

exports.addCat = async (req, res) => {
    const data = await catService.addCat({name: req.body.name});
    res.send(data);
}