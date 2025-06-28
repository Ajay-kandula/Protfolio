const {DataTypes} =require('sequelize')
const sequelize=require('../Config/db')
const { text } = require('stream/consumers')
const Message=sequelize.define('Message',{
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
module.exports=Message;