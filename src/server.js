const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')


let app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
//app.use(cors());

//var mysql = require('mysql');

var log = require('./loginApi');


app.post('/api/login', log.login);
app.post('/api/register', log.register);
app.post('/api/getUserList', log.getUserList);




app.set('port', process.env.PORT || 8081);
/*app.listen(8080, () => {
    console.log("Listening at :- "+process.env.PORT);
});*/
app.listen(process.env.PORT || 8081, () => console.log(`Listening on port ${process.env.PORT || 8081}!`));