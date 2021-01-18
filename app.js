require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes')
const cors = require('corss')

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/document-service',router)

const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`Listening on ${port}`))