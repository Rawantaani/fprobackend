const express = require('express')
const router = express.Router()
const mongoos = require('mongoose')
const  {signupUser }=require('../controllers/userController')

const { default: mongoose } = require('mongoose')


router.post('/login',()=>{})
router.post('/signup',signupUser)
module.exports=router