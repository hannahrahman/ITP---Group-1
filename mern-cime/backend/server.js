const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const url = 'mongodb+srv://itp-user:AaBb1234@1234@itpcluster.wb6xf.mongodb.net/complainDBx?retryWrites=true&w=majority'
const app = express()//creating express server
const port = process.env.PORT || 5000 // the port the server will be on

const LefRoute = require('./routes/lef');
const complainsRouter = require('./routes/complains')
const domAbuseComplainsRouter = require('./routes/domestic_abuse_complains')
const domAbuseComplainsBackupRouter = require('./routes/domestic_abuse_complains_backup')
const ComplainRoute = require('./routes/complains');
const missingRoute = require('./routes/missingPersonAffairs.route')
const licenseComplainsRouter = require('./routes/license_nic/licenseComplain')
const nicComplainsRouter = require('./routes/license_nic/nicComplain')


mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    console.log("Connected to the Database server....");
  },
  (err) => {
    console.log("cannot connect to the DataBase" + err);
  }
);

app.use(cors()); // cors middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*con.on('open', () => {
    console.log('Connected to the Database server....')
})

const complainsRouter = require('./routes/complains')
const drugComplainRouter = require('./routes/Drug_Complains')

app.use('/complains', complainsRouter)
app.use('/Drug_Complains', drugComplainRouter)
=======
})*/

app.use('/complains', complainsRouter)
app.use('/lef', LefRoute);
app.use('/domestic_abuse_complains', domAbuseComplainsRouter)
app.use('/domestic_abuse_complains_backup', domAbuseComplainsBackupRouter)
app.use('/Addcomplain', ComplainRoute);
app.use('/missingPersonAffairs', missingRoute);
app.use('/license', licenseComplainsRouter)
app.use('/nic', nicComplainsRouter)
//app.use('/domestic_abuse_complains', domesticAbusecomplainsRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
