var SERVER_PORT = 5000;

var express = require('express');
var app = express();
var partials = require('express-partials');
var fs = require('fs');

// app config
app.use(express.static(__dirname + '/static'));
app.set('view options', {defaultLayout: 'layout'});

// routes
app.get('/', function(req, res) {
    res.send('SLCH Awwww yisss!');
});

app.get('/stream', function(req, res) {
    var stream = fs.createReadStream('./server/static.txt');
    stream.pipe(res);
});

app.get('/chunk', function(req, res){
    // this is just using standard HTTP 1.1 chunking
    res.write('<html><head>');
    // res.write(... css and js tags if we care)
    res.write('<body>');
    res.write('<h1>Streaming test</h1>');
    // fetch data and write main body of page
    // with more res.write('...') calls
    writeChunkedResponse(res);
    // res.end('</body></html>');
});

function readRandomLinesFromFile(fileName) {
    return 'foo<br>';
}

function writeChunkedResponse(res) {
    setInterval(function() {
        res.write(readRandomLinesFromFile());
    } , 1000);
}

app.listen(SERVER_PORT);
console.log(" 💻   App server running on port", SERVER_PORT);
