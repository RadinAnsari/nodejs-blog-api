require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const postsRoutes = require('./routes/postRoutes')
const usersRoutes = require('./routes/userRoutes')
const commentsRoutes = require('./routes/commentRoutes')



const app = express()
const mongoUri= `${process.env.dbAdress}${process.env.dbName}`
const port = process.env.port
app.use(express.json())

app.use(usersRoutes)
app.use(postsRoutes)
app.use(commentsRoutes)



mongoose.connect(mongoUri).then(()=>{
    app.listen(port)
}).catch((err)=>console.log(err))
