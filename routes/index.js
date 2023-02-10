const express = require ('express')
const fetch = require('node-fetch');
const bodyparser = require('body-parser');
const route=express.Router()


//Api to get all the data
route.get('/getAll',(req,res)=>{
    var result;
    const data1= fetch('https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f')
   .then(response => response.json())
   .then(data => {
    // console.log(data)
    result=data.result.auditLog
    
    return res.send(data.result.auditLog)})
   

   
    
 })

//Api to get all the data byLogId
route.get('/getAlllogID',(req,res)=>{
    var result;
    const data1= fetch('https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f')
   .then(response => response.json())
   .then(data => {
    // console.log(data)
    result=data.result.auditLog
    result.map(function(ar){
    console.log(ar.logId)
    
    })
    return res.send(data.result.auditLog)})
    
    
   

   
    
 })


 //Api to get data by using given
 route.get('/getbyID/:id',(req,res)=>{
    var result;
    const data1= fetch('https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f')
   .then(response => response.json())
   .then(data => {
    // console.log(data)
    result=data.result.auditLog
    result.map(function(ar){
        // console.log(req.params.id)
        console.log(ar.logId)
        
        if(ar.logId == req.params.id){
            console.log(ar)
            res.send(ar)
            return
        }
        else{
            console.log('else')
            
        }
        //console.log(ar)
        // return res.send(ar)
    })

    })
    
})

 


 //......................................................................................................
//get all the details using application ID
 route.get('/getbyappID',(req,res)=>{
    var result;
    const data1= fetch('https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f')
   .then(response => response.json())
   .then(data => {
    // console.log(data)
    result=data.result.auditLog
    result.map(function(ar){
        result=result+ar.applicationId + " "
    console.log(ar.applicationId)
    })
    
    return res.send(result)})
   

   
    
 })

//get by given application Id

route.get('/getbyAppID/:id',(req,res)=>{
    var result;
    const data1= fetch('https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f')
   .then(response => response.json())
   .then(data => {
    // console.log(data)
    result=data.result.auditLog
    result.map(function(ar){
        // console.log(req.params.id)
        console.log(ar.applicationId)
        
        if(ar.applicationId == req.params.id){
            console.log(ar)
            res.send(ar)
            return
        }
        else{
            console.log('else')
            
        }
        //console.log(ar)
        // return res.send(ar)
    })

    })
    
})



 

 





module.exports=route