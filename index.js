var express = require('express');
var app = express()
const path = require('path');
const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'));
})

app.listen(3000, () => {
    console.log('port open on 3000');
})