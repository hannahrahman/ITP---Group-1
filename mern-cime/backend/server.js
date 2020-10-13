const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const url = 'mongodb+srv://itp-user:AaBb1234@1234@itpcluster.wb6xf.mongodb.net/complainDBx?retryWrites=true&w=majority'

//const JWT_SECRET = 'tG{cXZ45#Y^]}(H~5SZ3+?=HG)K)n2CmmD&C^M:n3G+z.Uu*<g'
const app = express()//creating express server
const port = process.env.PORT || 5000 // the port the server will be on

//require("dotenv").config();



const cmpRoutes = require('./routes/complains')
const userRouter = require('./routes/userRouter')

mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(
    () => { console.log('Connected to the Database server....') },
    err => { console.log('Cannot connect to the DataBase' + err) }
);

app.use(cors());// cors middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*con.on('open', () => {
    console.log('Connected to the Database server....')
})*/

app.use('/complains', cmpRoutes)
app.use("/users", userRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)

})