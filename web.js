var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var newbuf = fs.readFileSync('index.html');
var newstr = newbuf.toString();

app.get('/', function(request, response) {
  response.send(newstr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
