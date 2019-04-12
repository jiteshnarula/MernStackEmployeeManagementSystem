const  mongoose = require('mongoose');
const schema  = mongoose.Schema;

const ProductManagementSchema  = schema({

    productName:{
        type:String
    },productPrice:{
        type:String
    },productBought:{
        type:Boolean
    }
},{
    collection:'productmanagement'
})

module.exports = mongoose.model('ProductManagement',ProductManagementSchema)