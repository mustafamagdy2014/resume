var express = require('express');
var path = require("path");
var app = express();

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

process.env.PWD = process.cwd();

//app.set('views', path.join(process.env.PWD, 'public'));

app.use(express.static(path.join(process.env.PWD, '/views/pages')));

//app.set('views', path.join(process.env.PWD, 'public'));

//app.use(express.static(path.join(process.env.PWD, '/public')));


// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
//response.sendFile('index.html', { root: process.env.PWD });
  response.sendFile(path.join(process.env.PWD, '/views/pages/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


