const express = require('express');
const { removeNews, oneNews, listNews, updateNews, addNews } = require('../controllers/newsController');
const router = express.Router()
const isAuth = require('../middlewares/isAuth');
const isAdmin = require('../middlewares/isAdmin');
const { newsRules, validator} = require('../middlewares/validator');

router.post('/addNews', isAuth,   isAdmin, newsRules, validator, addNews) //add is auth // validator
router.delete('/deleteNews/:id',isAuth,  isAdmin, removeNews) //admin
router.get('/allNews', listNews) //admin
router.get('/oneNews/:id', isAuth, isAdmin, oneNews) //admin
router.put('/updateNews/:id',isAuth,  isAdmin, updateNews)  //admin validator

module.exports = router ; 