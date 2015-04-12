express = require('express');
mongoose = require('mongoose');
config = require('./config');
bodyParser = require('body-parser');

mongoose.connect(config.db);
app = express();

//static resouces
app.use('/static', express.static(__dirname + '/public'));

//support json-encoded bodies
app.use( bodyParser.json() ); 

//to use router
router = require('express-routeloader')({});
app.use(router);

server = app.listen(3333);






