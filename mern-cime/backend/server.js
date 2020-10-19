const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const url = 'mongodb+srv://itp-user:AaBb1234@1234@itpcluster.wb6xf.mongodb.net/complainDBx?retryWrites=true&w=majority'
const app = express()//creating express server
const port = process.env.PORT || 5000 // the port the server will be on

//routes
const cmpRoutes = require('./routes/miscComplains')
const userRouter = require('./routes/userRouter')
const LefRoute = require('./routes/lef');
const complainsRouter = require('./routes/complains')
const domesticAbusecomplainsRouter = require('./routes/domestic_abuse_complains')
const ComplainRoute = require('./routes/complains');
const missingRoute = require('./routes/missingPersonAffairs.route')
const licenseComplainsRouter = require('./routes/license_nic/licenseComplain')
const nicComplainsRouter = require('./routes/license_nic/nicComplain')


mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(
    () => { console.log('Connected to the Database server....') },
    err => { console.log('Cannot connect to the DataBase' + err) }
);

app.use(cors());// cors middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//const pdf = require('html-pdf')
//const pdfTemplate = require('./documents')

//const url = 'mongodb+srv://itp-user:AaBb1234@1234@itpcluster.wb6xf.mongodb.net/complainDBx?retryWrites=true&w=majority'
//const app = express()//creating express server
//const port = process.env.PORT || 5000 // the port the server will be on



// mongoose.Promise = global.Promise;
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(
//   () => {
//     console.log("Connected to the Database server....");
//   },
//   (err) => {
//     console.log("cannot connect to the DataBase" + err);
//   }
// );

// app.use(cors()); // cors middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// /*con.on('open', () => {
//     console.log('Connected to the Database server....')
// })*/



// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`)

// })
/*app.post('/pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
    if (err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  })
})
app.get('/fpdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`)
})*/
app.use('/complains', complainsRouter)
app.use('/lef', LefRoute);
app.use('/domestic_abuse_complains', domesticAbusecomplainsRouter)
app.use('/Addcomplain', ComplainRoute);
app.use('/missingPersonAffairs', missingRoute);
app.use('/license', licenseComplainsRouter)
app.use('/nic', nicComplainsRouter)
app.use('/miscComplains', cmpRoutes)
app.use("/users", userRouter)


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
