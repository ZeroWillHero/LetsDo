const User = require('./../../../models/User');

const deleteUser = async (req,res) => {
    const { id } = req.params;

    try {
        const user = await User.findOneAndDelete({
            _id : id
        })

        if (!user){
            return res.status(400).json({ message: 'User does not exist' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    }catch(error){
        res.status(500).json({ message: `Error : ${error}` });
    }
}

module.exports = deleteUser;