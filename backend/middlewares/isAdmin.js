
const User=require('../models/User')

const isAdmin = async (req, res, next) => {
 
    try {
  const user =await User.findById(req.user.id)
        if (user.role !=="admin"){
            return res.status(401).send({ errors: [{ msg: "You are not admin" }] });
            
        }
        next();
    } catch (error) {
        return res.status(401).send({ errors: [{ msg: "admin auth ko " }] })
    }
}
module.exports = isAdmin ;