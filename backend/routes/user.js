const express = require('express')
const router = express.Router()
const isAuth = require('../middlewares/isAuth');
const {removeUser,listUser, oneUser, updateUser, updateRole, updateFavoris} = require('../controllers/userController');
const { RegisterRules, validator } = require('../middlewares/validator');
const isAdmin = require('../middlewares/isAdmin');

router.delete('/deleteUser/:id', isAuth, isAdmin, removeUser) //admin //isAuth
router.get('/allUsers', isAuth, isAdmin, listUser) //admin //isAuth
router.get('/oneUser/:id', isAuth, oneUser) //admin //isAuth
router.put('/updateUser/:id', isAuth, isAdmin, RegisterRules, validator, updateUser)  
router.put('/updateRole/:id',isAuth,  isAdmin, updateRole)  
router.put('/updateFavoris/:idAnime',isAuth,  updateFavoris)  

module.exports = router ; 