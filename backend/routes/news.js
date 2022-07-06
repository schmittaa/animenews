const express = require('express');
const { removeNews, oneNews, listNews, updateNews, addNews } = require('../controllers/newsController');
const router = express.Router()
const isAuth = require('../middlewares/isAuth');

router.post('/addNews',isAuth, addNews)
router.delete('/deleteNews/:id',isAuth, removeNews) //admin
router.get('/allNews', isAuth, listNews) //admin
router.get('/oneNews/:id', isAuth, oneNews) //admin
router.put('/updateNews/:id', isAuth, updateNews)  //admin

module.exports = router ; 