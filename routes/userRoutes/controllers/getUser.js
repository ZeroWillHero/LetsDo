const User = require('./../../../models/User');

const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({ _id: id });
        if (!user){
            return res.status(400).json({ message: 'User does not exist' });
        }

        if (user){
            return res.status(200).json({ user });
        }


    }catch(error){
        return res.status(500).json({ message: `Error : ${error}` });
    }

}

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        
        if (users){
            return res.status(200).json({ users });
        }

    }catch(error){
        return res.status(500).json({ message: `Error : ${error}` });
    }
}   


module.exports = { getUser,getUsers };