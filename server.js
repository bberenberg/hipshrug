var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

// parse application/json
app.use(bodyParser.json());

app.post('/', function(request, response){
  var data = {
    message: request.body.item.message.message.slice(7) + '  ¯\\_(ツ)_/¯'
  };
  response.send(data);    // echo the result back
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
