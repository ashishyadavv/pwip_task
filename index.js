const express = require('express')
const app=express()
const bodyparser = require('body-parser');


const route = require('./routes/index')
app.use(bodyparser.urlencoded({ extended: true }));



//REstful paths are defined in the routes
app.use('/',route)






app.listen(3000,()=>{
    console.log("server is running at port 3000")
})