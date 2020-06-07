const authMethods = {}
const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

authMethods.singup = async (req , res) => {
    const { username , password } = req.body;

    const newUser = new UserModel({
        username , password
    });
    newUser.password = await newUser.encryptPassword(password);

    newUser.save()

    return res.json({
        status: true,
        message: "User registered succesfully"
    })
}

authMethods.singin = async (req , res) => {
    const {username , password} = req.body;
    
    const user = await UserModel.findOne({username: username});
    if(!user) {
        return res.json({
            auth: false,
            message: 'Username or password incorrect'
        })
    }

    const autenticate = user.confirmPassword(password);
    if(!autenticate) {
        return res.json({
            auth: false,
            message: 'Username or password incorrect'
        })
    }

    const token = jwt.sign(user._id.toString() , process.env.SECURE_KEY)
    if(!token)  {
        return res.json({
            auth: false,
            message: 'There was a problem, try it again'
        })
    }

    return res.json({
        auth: true,
        token: token
    })
}

authMethods.confirmToken = async (req , res) => {
    const {token} = req.body;
    if(token === "") {
        return res.json({
            message: "token don't provide"
        })
    }

    const verify = jwt.verify(token , process.env.SECURE_KEY);
    if(!verify) {
        return res.json({
            message: "token don't provide"
        })
    }

    return res.json({
        auth: "valid",
        token: token
    })
}

module.exports = authMethods;