var express = require('express')
var app = express();
var adminRouter = require('./routes/admin');
const cors = require('cors')
const bodyParser = require('body-parser')
var con = require('./config/connection')


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', adminRouter);


app.listen(4000, ()=>{
    console.log('Connected to Port 4000!');
})

module.export = app;