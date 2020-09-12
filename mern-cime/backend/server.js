const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
<<<<<<< HEAD

=======
const bodyParser = require('body-parser')
>>>>>>> 034b2c9c9daaa0e4096791c8339df48876394314
const url = 'mongodb+srv://itp-user:AaBb1234@1234@itpcluster.wb6xf.mongodb.net/complainDBx?retryWrites=true&w=majority'
const app = express()//creating express server
const port = process.env.PORT || 5000 // the port the server will be on

const LefRoute = require('./routes/lef');
const complainsRouter = require('./routes/complains')
const domesticAbusecomplainsRouter = require('./routes/domestic_abuse_complains')


mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => { console.log('Connected to the Database server....') },
    err => { console.log('cannot connect to the DataBase' + err) }
);

app.use(cors());// cors middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*con.on('open', () => {
    console.log('Connected to the Database server....')
<<<<<<< HEAD
})

const complainsRouter = require('./routes/complains')
const drugComplainRouter = require('./routes/Drug_Complains')

app.use('/complains', complainsRouter)
app.use('/Drug_Complains', drugComplainRouter)
=======
})*/


app.use('/complains', complainsRouter)
app.use('/lef', LefRoute);
app.use('/domestic_abuse_complains', domesticAbusecomplainsRouter)


>>>>>>> 034b2c9c9daaa0e4096791c8339df48876394314

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)

})

