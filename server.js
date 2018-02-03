const express = require('express');
const app = express();


app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen('9000', function() {
    console.log("Server up and running at 3000");
});