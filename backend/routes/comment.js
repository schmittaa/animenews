const express = require('express');
const { addComment, removeComment, listComment, oneComment, updateComment } = require('../controllers/commentController');
const router = express.Router()
const isAuth = require('../middlewares/isAuth');

router.post('/addComment',isAuth, addComment)
router.delete('/deleteComment/:id',isAuth, removeComment) 
router.get('/allComment', isAuth, listComment) 
router.get('/oneComment/:id', isAuth, oneComment) 
router.put('/updateComment/:id', isAuth, updateComment)  

module.exports = router ; 