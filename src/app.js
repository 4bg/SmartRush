express = require('express');
mongoose = require('mongoose');
config = require('./config');
bodyParser = require('body-parser');
log4js = require('log4js');
logBuilder = require('./utils/logBuilder');

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

function errorHandler(err, req, res, next) {
  log4js.loadAppender('file');
  log4js.addAppender(log4js.appenders.file('../logs/app.log'), 'app');
  var logger = log4js.getLogger('app');
  logger.error(logBuilder.getGeneralLog(err));
  res.status(500).send({errMessage: err.message});
}

server = app.listen(3333);






