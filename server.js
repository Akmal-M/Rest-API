require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex:true
})

const db = mongoose.connection
db.on('error', (error) => console.error(error) )
db.once('open', () => console.log('Connected to database') )

app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const PORT = 5000;

app.listen( PORT || 5000, () => console.log('server is running on port ' + PORT))
