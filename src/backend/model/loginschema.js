const  mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const ProductManagementLoginSchema  = Schema({

    username:{
        type:String,
        required: [true, 'username must be provided'],
        unique:true
    },password:{
        type:String,
        required:true
    } 
},{
    collection:'productmanagementlogin'
})




module.exports = mongoose.model('ProductManagementLogin',ProductManagementLoginSchema)