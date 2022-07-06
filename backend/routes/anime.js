const express = require('express')
const router = express.Router()
const {addAnime, listAnime, removeAnime, addManyAnime, oneAnime, updateAnime} = require('../controllers/animeController');
const isAuth = require('../middlewares/isAuth');
const { animeRules, validator } = require('../middlewares/validator');

router.post('/addAnime',isAuth,animeRules, validator, addAnime)
router.post('/addManyAnime', addManyAnime)
router.delete('/deleteAnime/:id',isAuth, removeAnime)
router.get('/allAnime', listAnime)
router.get('/oneAnime/:id', isAuth, animeRules, validator, oneAnime)
router.put('/updateAnime/:id', isAuth, animeRules, validator, updateAnime)



module.exports = router ; 