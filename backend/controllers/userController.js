const asyncHandler=require('express-async-handler')
const User = require('../models/userModel')


const  registerUser=asyncHandler(async (req,res)=>{
    console.log(req.body);

    const{name, email,password}=req.body
    //validation
    if(!name|| !email || !password){
        res.status(400)
        throw new Error('Fill in all required fields');
    }
    if(!password.length<6){
        res.status(400)
        throw new Error('Password must be at least 6 characters');
    }
    //check if user email already exist
   const userExists= await User.findOne({email})
   console.log(userExists);
   if(userExists){
    res.status(400)
        throw new Error('User email address already exist');
   }

    //create new users
    const user=await User.create({
        name,
        email,
        password

    })
    if(user){
        const{_id, name, email, photo, phone, bio}=user
        res.status(201).json({
            _id, name, email, photo, phone, bio
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid user data")
    } 
});
    
   
    // if(!req.body.email){
    //     res.status(400)
    //     throw new Error("Please add an email address")
    // }
    // res.send("Register User"

module.exports={
    registerUser                     
}