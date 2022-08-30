const { body, validationResult } = require('express-validator');

  const RegisterRules =[
    body('name', 'Verify the name').not().isEmpty(),
    body('email', 'Pseudo invalide, please use lowercase').not().isEmpty(),
//    body('email', 'Pseudo invalide, please use lowercase').matches(/(?!^.*[A-Z]{1,}.*$)/) 
   // body("password", "Please enter a strong password (8 characters Use upper cases - lower cases - one special character)")
    //.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@])\S{6,20}$/) 
  ]
  const animeRules=[
    body('title', 'Verify the title').not().isEmpty(),
    body('description', 'Verify the description').not().isEmpty(),
    body('poster', 'Verify the poster').not().isEmpty(),
  ]

  const newsRules=[
    body('anime', 'Verify the anime name').not().isEmpty(),
    body('message', 'Cannot add empty news').not().isEmpty(),
  ]

  const validator = (req, res, next) =>{
      const errors = validationResult(req)
      if (!errors.isEmpty()){
          return res.status(402).json({errors : errors.array()})
      }
      next();

  }

  module.exports = {RegisterRules, animeRules, newsRules, validator}