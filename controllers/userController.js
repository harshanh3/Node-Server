const userDetails = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// register
exports.registerController = async (req,res)=>{
    console.log("inside register controller");
    console.log(req.body);
    const {id,firstname,lastname,email,password,phoneno} = req.body

    try{
        const existingUser = await userDetails.findOne({email})
        if(existingUser){
            res.status(406).json("Already Existing User........Please Login!!!")
        }else{
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = new userDetails({
                id,firstname,lastname,email,password:hashedPassword,phoneno
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch(err){
        console.log(err);
        res.status(401).json(err)
    }
    
}

// login
exports.loginController = async (req,res)=>{
    console.log("Inside loginController");
    const { email, password } = req.body;
    console.log(email, password);
    try{
        const existingUser = await userDetails.findOne({ email})
        if(existingUser){
            const token = jwt.sign({userId: existingUser.id},process.env.JWTPASSWORD)
            const isMatch = await bcrypt.compareSync(password,existingUser.password)
            if(isMatch){
                res.status(200).json({
                    user:existingUser,token
                })
            }else{
                res.status(404).json("Invalid Password")
            }
        }else{
            res.status(404).json("Invalid Email or Password")
        }

    }catch(err){
console.log(err);

    }
    
}



// all users
exports.allUserController = async(req,res)=>{
    console.log("inside allUserController");
    try{
        const allUsers = await userDetails.find({}, '-password')
        res.status(200).json(allUsers)

    }catch(err){
        res.status(401).json(err)
    }
 
}

// single user

exports.singleUserController = async(req,res)=>{
    console.log("inside singleUserController");
    const{email} =req.body

    try{
        const user = await userDetails.findOne({email})
        
        res.status(200).json({
            id:user.id,
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            phoneno:user.phoneno

        })
    }catch(err){
        res.status(401).json(err)
    }
    
}