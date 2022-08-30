const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
    let { name, email, password } = req.body
    email = email.toLowerCase();
    const findUser = await User.findOne({ email })
    if (findUser) {
        return res.status(400).send({ errors: [{ msg: `${email}  already taken` }] })
    }
    try {
        const user = new User({
            name: name, 
            email: email,
            password: password
        });
        const salt = 10;
        user.password = await bcrypt.hash(password, salt)
        await user.save();

        //token
        const payload = {
            id: user._id
        }
        const token = jwt.sign(payload, process.env.secretKey, { expiresIn: "8h" });

        res.status(201).send({ msg: "Welcome ! ようこそ ! ", user, token })
    } catch (error) {
        res.status(400).send("Sign up error")
    }
}

exports.login = async (req, res) => {
    let { email, password } = req.body;
    email = email.toLowerCase();
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).send({ errors: [{ msg: "Nickname/Password doesn't match" }] })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).send({ errors: [{ msg: "Nickname/Password doesn't match" }] })
        }
        //token
        const payload = {
            id: user._id,
        }
        const token = jwt.sign(payload, process.env.secretKey, { expiresIn: "24h" });
        return res.status(201).send({ msg: " お帰りなさい !", user, token })

    } catch (error) {
        res.status(400).send("Sign in error")

    }

}

exports.current = async(req, res) => {

    try {
        const user = await User.findById(req.user.id)
         return res.send(user)

    } catch (error) {
        res.status(500).send("User Not Found")
        
    }
}