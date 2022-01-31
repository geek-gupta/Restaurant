const catModel = require('../models/cat');


exports.addCat = async (body) => {
    const catObj = new catModel(body);
    await catObj.save();
    return "data Saved";
}