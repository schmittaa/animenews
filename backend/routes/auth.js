const express= require("express");
const {RegisterRules, validator} = require('../middlewares/validator')
const { register, login, current } = require("../controllers/authController");
const isAuth = require("../middlewares/isAuth");
const router = express.Router();

router.post('/register', register) //add register rules
router.post('/login', login)
router.get('/currentUser', isAuth, current)

module.exports = router ; 