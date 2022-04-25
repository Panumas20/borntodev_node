const express = require('express');
const { compile } = require('morgan');
const debug = require('debug')('server');
const morgan = require('morgan')
//const chalk = require('chalk');
const app  = express();
const port = 3000;


app.use(morgan('combined'))
app.get("/",(req,res)=>{
    res.send('Hello first')
})


app.listen(port ,()=>{
    debug(`server runing on port ${port}`);
})