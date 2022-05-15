
function list(data){
    let value = {
        "code": 200,
        "message" : "The requested data",
        "data": data
    }
    return value;
}
function noValue(){
    let value = {
        "code": 400,
        "message": "The given value does not exist!"
    }
    return value;
}
module.exports={
    list,
    noValue
}