var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var cors = require('cors')
const routes = require('./routes');

app.use(cors(
  {
    origin: '*'
  }
))

app.use('/api', routes);
app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'World'}));
});
app.listen(port, function () {
 console.log(`Example app listening on port ${port} !`);
});