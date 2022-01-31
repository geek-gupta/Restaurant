const RandomModel = require('../models/random')

exports.getRandomJSON = async (req, res) => {
    const data = await RandomModel.getAllRandomJSON();
    if(data){
        res.send({status: true, data: data})
    }else{
        res.status(404).json({status: false, data: undefined})
    }
}