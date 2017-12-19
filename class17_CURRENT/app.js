//previously Napp

var express = require('express');
var linkController = require('./controllers/linkController');
var formController = require('./controllers/formController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))

//fire controllers
linkController(app);
formController(app);

//listen to port
app.listen(process.env.PORT, process.env.IP);
console.log('You are listening to port 3000');

// sudo apt-get install -y mongodb-org
// mongod --bind_ip=$IP --nojournal