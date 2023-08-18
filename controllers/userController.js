
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getUsers = async(req,res)=>{

    const users = await User.find()
    res.status(200).json({users})
}


const signup = async(req,res)=>{
    const {email,password} = req.body
    const hashedPassword = await bcrypt.hash(password,12)
    const newUser = new User({email,password:hashedPassword})

    await newUser.save()

    const token = jwt.sign({email:newUser.email},'secret_key')

    res.status(201).json({user:newUser,token})

}


const login = async(req,res)=>{

    const {email,password} =  req.body

    const validUser = await User.findOne({email:email})

    if(!validUser)
    {
        res.json({msg:'user is not valid.'})
    }

    const validPassword = await bcrypt.compare(password,validUser.password)

    if(!validPassword)
    {
        res.json({msg:'password is not valid.'})
    }

    const token = jwt.sign({email:validUser.email},'secret_key')
    
    res.json({msg:'user logged in.',token})
}

exports.getUsers = getUsers

exports.login = login

exports.signup = signup