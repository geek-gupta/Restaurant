const randomJSON = require('../random.json');

exports.getAllRandomJSON = () => {
    return randomJSON;
}

exports.getAllCats = () => {
    let result = [];
    for(let ele of randomJSON){
        if(ele.catLover)
            result.push(ele);
    }
    if(result.length >= 1)
        return {status: true, data: result};
    else   
        return {status: false, data: "Sorry!, No Cats Found!!"}
}