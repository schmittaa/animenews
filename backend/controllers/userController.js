const User = require('../models/User')
const bcrypt=require('bcrypt')

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
   let {password}=req.body;
    try {
        const salt = 10;
        password = await bcrypt.hash(password, salt)
        const user = await User.findByIdAndUpdate(id, { $set: { ...req.body,password } }, { new: true })
        res.status(200).send({ msg: "Updated !", user })
        
    } catch (error) {
        res.status(500).send("User not found")
    }
}

//update role
exports.updateRole = async(req, res) =>{
    const { id } = req.params;
   let {role}=req.body;
    try {
       
        const user = await User.findByIdAndUpdate(id, { $set: { role } }, { new: true })
        res.status(200).send({ msg: "Updated role!", user })
        
    } catch (error) {
        res.status(500).send("User not found")
    }
}

exports.updateFavoris = async(req,res) =>{
    const { idAnime } = req.params;
    try {
        const user = await User.findById(req.user.id);
        if (user.favoris.includes(idAnime)){
            user.favoris=user.favoris.filter(fav=>fav!==idAnime)
        }else{
            user.favoris.push(idAnime)
        }
        await user.save()
        res.status(200).send({ msg: "Anime is on my favorite list!", user })
        
    } catch (error) {
        res.status(500).send("User not found")
    }
}