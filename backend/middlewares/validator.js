const { body, validationResult } = require('express-validator');

  const RegisterRules =[
    body('name', 'Verify the name').not().isEmpty(),
    body('email', 'Format mail invalide').isEmail(),
    body("password", "Please enter a strong password (8 characters Use upper cases - lower cases - one special character)")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@])\S{6,20}$/) 
  ]
  const animeRules=[
    body('title', 'Verify the title').not().isEmpty(),
    body('description', 'Verify the description').not().isEmpty(),
    body('poster', 'Verify the poster').not().isEmpty(),
  ]

  const validator = (req, res, next) =>{
      const errors = validationResult(req)
      if (!errors.isEmpty()){
          return res.status(402).json({errors : errors.array()})
      }
      next();

  }

  module.exports = {RegisterRules, animeRules, validator}