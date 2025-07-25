const mongoose=require('mongoose')
const Message=new mongoose.Schema({
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    message:{
        type:DataTypes.STRING,
        allowNull:false

    }
})
module.exports=mongoose.model('message',Message)