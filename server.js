const express = require('express');
const app = express();

var port = 9000;

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
    console.log(`Server up and running at ${port}`);
});