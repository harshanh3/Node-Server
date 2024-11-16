const mongoose = require('mongoose')

const connectionString = process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("mongoDB Atls conected sucessfuly with ndserver");
    
}).catch(err=>{
    console.log("mongoDB Atls conected failed with ndserver");
    console.log(err);
    
})