const { builtinModules } = require('module');
const godown = require('../Godown/godowns.json');
const responsebuilder = require('../Helper/responsebuilder');
const commonHelper = require('../Helper/commonHelper')
function getByValue(body){
    let result = [];
        for(let elem of godown){
            if(elem.godownId == body.godownId){
                result.push(elem);
                let resp = responsebuilder.list(result);
                return resp;
            }
            else if(elem.godownLocation == body.godownLocation){
                result.push(elem);
                let resp = responsebuilder.list(result);
                return resp;
            }
        }
        if(result==0){
            let resp = responsebuilder.noValue();
            return resp;
        } 
}
function encryptGodown(body){
    let result = commonHelper.encrypt(body);
    let resp = responsebuilder.list(result);
    return resp;
}
function decryptGodown(encryptData){
    let decryptData  = commonHelper.decrypt(encryptData);
    let result = JSON.parse(decryptData);
    let resp = responsebuilder.list(result);
    return resp;
}
module.exports = {
    getByValue,
    encryptGodown,
    decryptGodown
}