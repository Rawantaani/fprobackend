const workout = require('../model/workoutModel')
const mongoose = require('mongoose')
//get all data

const getWorkouts = async (req, res) => {
    const Work = await workout.find().sort({ createdAt: -1 })
    res.status(200).json(Work)
}

//get single data
const getWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'wrong id number' })
    }
    const work = await workout.findById(id)
    if (!work) {
        return res.status(404).json({ error: 'no such workout' })
    }
    res.status(200).json(work)

}

//add data
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body
    try {
        const Work = await workout.create({ title, load, reps })
        res.status(200).json(Work)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete single data
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'wrong id number' })
    }
    const work = await workout.findById(id).deleteOne()
    if (!work) {
        return res.status(404).json({ error: 'no such workout' })
    }
    res.status(200).json(work)
}

// updata single data
const updateWorkouts = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'wrong id number' })
    }
    const work = await workout.findById(id).updateOne({ ...req.body })
    if (!work) {
        return res.status(404).json({ error: 'no such workout' })
    }
    res.status(200).json(work)
}
module.exports = { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkouts }