const express=require('express')
const workoutRouters=require('./routes/workout')
const userRoutes=require('./routes/user')
const mongoos=require('mongoose')
require('dotenv').config()
const app=express()
const cors=require('cors')
//workout=table
const workout=require('./model/workoutModel')
app.use(cors());
app.use(express.json())
app.use('/api/workouts',workoutRouters)
app.use('/api/user',userRoutes)
mongoos.connect(process.env.MONGO_URL)
 

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})