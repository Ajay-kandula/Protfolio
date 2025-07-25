const mongoose=require('mongoose');

const Message=new mongoose.Schema({
    name:{
        type:STRING,
        allowNull:false,
    },
    email:{
        type:STRING,
        allowNull:false
    },
    message:{
        type:STRING,
        allowNull:false

    }
})
module.exports=mongoose.model('message',Message)