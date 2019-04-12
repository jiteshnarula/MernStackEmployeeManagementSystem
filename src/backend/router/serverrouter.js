const express = require('express');
const app = express();
const router  = express.Router();
const collection = require('../model/serverschema');
const loginCollection = require('../model/loginschema');

router.get('/getProducts',(req,res)=>{
    collection.find({},(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
            res.json(data);
        }
    })
})


router.get('/getProductsByID/:id',(req,res)=>{
    collection.findById({_id:req.params.id},(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.json(data)
        }
    })
})


router.post('/addProducts',(req,res)=>{
    const newProduct = new collection({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productBought: req.body.productBought

    })
   newProduct.save((err,data)=>{
       if(err){
           console.log(err);
       }else{
           console.log(data)
           res.json(data)
       }
   })
})



router.delete("/deleteProduct/:id",(req,res)=>{
    collection.remove({_id: req.params.id},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
})


//edit
router.put("/productUpdate/:id",(req,res) =>{
     
collection.findByIdAndUpdate(req.params.id,req.body,function(err,post){
        if(err){
            console.log(err)
        }else{
            res.json("updated")
        }
    })
})


//signup
router.post('/login',(req,res)=>{
    const signup = new loginCollection({
        username: req.body.username,
        password: req.body.password 

    })
   signup.save((err,data)=>{
       if(err){
           console.log(err);
       }else{
           console.log(data)
           res.json(data)
       }
   })
})

router.get('/getlogindetails',(req,res)=>{
    loginCollection.find({},(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
            res.json(data);
        }
    })
})



module.exports = router;