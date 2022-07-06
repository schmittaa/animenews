const express = require('express')
const router = express.Router()
const isAuth = require('../middlewares/isAuth');
const {removeUser,listUser, oneUser, updateUser} = require('../controllers/userController');
const { RegisterRules, validator } = require('../middlewares/validator');

router.delete('/deleteUser/:id',isAuth, removeUser) //admin
router.get('/allUsers', isAuth, listUser) //admin
router.get('/oneUser/:id', isAuth, oneUser) //admin
router.put('/updateUser/:id', isAuth, updateUser) //userRole //validator to add

module.exports = router ; 