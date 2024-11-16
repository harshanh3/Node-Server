require('dotenv').config()
const cors = require('cors')
const router = require('./routes/router')
const express = require('express')
const ndServer = express()
require('./database/dbConnection')

ndServer.use(cors())
ndServer.use(express.json())
ndServer.use(router)

const PORT = 3002 || process.env.PORT

ndServer.listen(PORT,()=>{
    console.log(`npServer is running on port ${PORT}and waiting for client request !!`);
})


ndServer.get('/',(req,res)=>{
    res.status(200).send (`<h1 style="color:red;">npServer is running on port and waiting for client request !!</h1>`)
})
