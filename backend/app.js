const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const path = require('path');
const port = 3000;
const route = require('./routes/route'); 

mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected',()=>{
    console.log('connected to database on port :27017');
});
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error in connection to database'+err);
    }
});

app.use(cors());
app.use(bodyparser.json());

app.use('/api', route);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) =>{
    res.send('api working...');
});

app.listen(port, (req, res) =>{
    console.log('server is up and runnning');
});