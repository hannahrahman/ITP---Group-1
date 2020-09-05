const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
//const url = 'mongodb://localhost/complainDBx'
const url = 'mongodb+srv://miyuruw:AaBb1234@1234@itpcluster.wb6xf.mongodb.net/complainDBx?retryWrites=true&w=majority'
require('dotenv').config()//having environment variables in dotenv file

const app = express()//creating express server
const port = process.env.PORT || 5000 // the port the server will be on

app.use(cors());// cors middleware
app.use(express.json())//allow to pass jason to the server

mongoose.connect(url, { useNewUrlParser: true })//the datebase is stored in the URI
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected to the Database server....')
})

const complainsRouter = require('./routes/complains')

app.use('/complains', complainsRouter)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)

})

