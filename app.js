const express = require("express");
const app = express ();

app.get ("/",function(req,res){

res.send("server is up and running")

})

app.get ("/about",function(req,res){

    res.send("santosh is gr8")
    
    })

app.listen(3000,function()
{

    console.log("server is runnining in port 3001")
})