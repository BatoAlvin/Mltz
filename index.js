const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

//Connect to the db
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true, useUnifiedTopology: true },
 ()=> console.log('connected to db')
 );

//Middleware
app.use(express.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

const registerroutes = require('./routes/register');
app.use('/register',registerroutes);

const loginrroutes = require('./routes/login');
app.use('/login',loginrroutes);

const questionroutes = require('./routes/question');
app.use('/question',questionroutes);


app.listen(port,()=>{
    console.log(`Server running`)
});