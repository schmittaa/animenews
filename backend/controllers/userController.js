const User = require('../models/User')

//Remove user
exports.removeUser = async (req, res) =>{
    const { id } = req.params
    try {
        await User.findByIdAndDelete(id, { new: true })
        res.status(200).send("User remouved")
    } catch (error) {
        res.status(500).send("User not found")
    }
}
//User List
exports.listUser = async (req, res) =>{
    try {
        const users = await User.find();
        res.status(200).send({ msg: "list of users ", users})
    } catch (error) {
        res.status(500).send("Users not found")
    }
}
//One User
exports.oneUser = async (req, res) =>{
    const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).send({ msg: "User found", user });
  } catch (error) {
    res.status(500).send("User not found")
}
}
//update User
exports.updateUser = async(req, res) =>{
    const { id } = req.params;
    try {
        const user = await User.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
        res.status(200).send({ msg: "Updated !", user })

    } catch (error) {
        res.status(500).send("User not found")
    }
}