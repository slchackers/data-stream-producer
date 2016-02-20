var SERVER_PORT = 5000;

var express = require('express');
var app = express();
var partials = require('express-partials');

// app config
app.use(express.static(__dirname + '/static'));
app.set('view options', {defaultLayout: 'layout'});

// routes
app.get('/', function(req, res) {
    res.send('SLCH Awwww yisss!');
});

app.listen(SERVER_PORT);
console.log(" 💻   App server running on port", SERVER_PORT);
