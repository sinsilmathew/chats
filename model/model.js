const mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://sinsil:123456@ds046867.mlab.com:46867/ayogatest');//,{useMongoClient:true}
//mongoose.connect('mongodb://localhost/ayogatest');//,{useMongoClient:true}
mongoose.connection.once('open',()=>console.log('Db connection established'))
.on('error',(error)=>{
    console.warn('Warning',error);
});

module.exports.user=mongoose.model('User',new Schema({
    name:String,
    handle: String,
    password: String,
    phone:String,
    email:String,
    friends:[]
},{strict: false}));
module.exports.online=mongoose.model('online',new Schema({
    handle:String,
    connection_id:String
}));
module.exports.messages=mongoose.model('message',new Schema({
    message : String,
    sender  : String,
    reciever: String,
    date    : Date
}));