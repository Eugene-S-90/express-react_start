var express = require('express');
var app = express();
var path = require('path')

app.get('/', function(request, response){
  response.sendFile(path.join (__dirname ,'client/build/index.html') );
});
app.use('/', express.static (path.join(__dirname,'/client/build/')));


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
