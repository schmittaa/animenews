const express = require('express')
const router = express.Router()
const {addAnime, listAnime, removeAnime, addManyAnime, oneAnime, updateAnime} = require('../controllers/animeController');
const isAdmin = require('../middlewares/isAdmin');
const isAuth = require('../middlewares/isAuth');
const { animeRules, validator } = require('../middlewares/validator');

router.post('/addAnime', isAuth,   isAdmin, animeRules, validator, addAnime) //isAuth,animeRules, validator,
router.post('/addManyAnime',isAuth,   isAdmin, addManyAnime) //isAuth,animeRules, validator,
router.delete('/deleteAnime/:id', isAuth,   isAdmin,removeAnime) //isAuth 
router.get('/allAnime', listAnime)
router.get('/oneAnime/:id',  isAuth,   isAdmin, oneAnime)
router.put('/updateAnime/:id', isAuth,   isAdmin, animeRules,validator, updateAnime)



module.exports = router ; 