express = require('express');
mongoose = require('mongoose');
config = require('./config');
bodyParser = require('body-parser');
log4js = require('log4js');
logBuilder = require('./utils/logBuilder');
errorHandler = require('./utils/errorHandler');

mongoose.connect(config.db);
app = express();

//static resouces
app.use('/static', express.static(__dirname + '/public'));

//support json-encoded bodies
app.use(bodyParser.json());

//to use router
router = require('express-routeloader')({});
app.use(router);

//global error handler
app.use(errorHandler);

server = app.listen(3333);






