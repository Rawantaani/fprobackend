const express = require('express')
const router = express.Router()
const workout = require('../model/workoutModel')
const mongoos = require('mongoose')
const { default: mongoose } = require('mongoose')
const  { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkouts }=require('../controllers/workoutController')
//get all data
router.get('/',getWorkouts)
//get single data
router.get('/:id',getWorkout)
//add data
router.post('/',createWorkout)
// delete single data
router.delete('/:id',deleteWorkout)
// updata single data
router.patch('/:id',updateWorkouts)
module.exports = router