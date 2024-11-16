const express = require('express')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')

const router = new express.Router()


//register : http://localhost:3002/register
router.post('/register',userController.registerController)
//login : http://localhost:3002/login
router.post('/login',userController.loginController)
//allusers : http://localhost:3002/all-users
router.get('/all-users',jwtMiddleware,userController.allUserController)
//single-user : http://localhost:3002/all-users
router.get('/single-user',jwtMiddleware,userController.singleUserController)
 
    

module.exports = router