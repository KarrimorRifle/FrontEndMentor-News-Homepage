var express = require('express');
var app = express()
const path = require('path');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'));
})

app.listen(process.env.PORT || 3000, () => {
    console.log('port open on 3000');
})