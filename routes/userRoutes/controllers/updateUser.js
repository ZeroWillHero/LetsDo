const User = require('./../../../models/User');

const updateUser = async (req,res) => {
    const { id} = req.params;
    const { name, email, password,DOB } = req.body;

    try {
        const user = await User.findOne({
            _id : id 
        })

        if (!user){
            return res.status(400).json({ message: 'User does not exist' });
        }else {
            await user.updateOne({
                name : name,
                email : email,
                password : password,
                DOB : DOB
            })
        }

        res.status(200).json({ message: 'User updated successfully' });

        
    }catch(error){
        res.status(500).json({ message: `Error : ${error}` });
    }
}

module.exports = updateUser;