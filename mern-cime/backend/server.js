const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const url = 'mongodb+srv://itp-user:AaBb1234@1234@itpcluster.wb6xf.mongodb.net/complainDBx?retryWrites=true&w=majority'
const app = express()//creating express server
const port = process.env.PORT || 5000 // the port the server will be on


const cmpRoutes = require('./routes/complains')

mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(
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

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)

})