const User = require('../../../models/User');
const bcrypt = require('bcrypt');

const register = async (req,res) => {
    const { name,email,password,DOB } = req.body;

    const DateOfBirth = new Date(DOB);
    const existUser = await User.findOne({email : email});
    if(existUser){
        return res.status(400).json({message : 'User already exists'});
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    try {
        const user = new User ({
            name,
            email,
            password : hashedPassword,
            DOB : DateOfBirth
        })
    
        await user.save();
        res.status(201).json({message : 'User registered successfully'});
    }catch(error){
        res.status(500).json({message : `Error : $${error}`});
    }

   
}

module.exports = register;

