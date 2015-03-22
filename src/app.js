express = require('express');
mongoose = require('mongoose');

var run = function() {
    console.log('starting...')
    mongoose.connect('localhost:27017/test');
    app = express();

    //static resouces
    app.use('/static', express.static(__dirname + '/public'));

    //to use router
    router = require('express-routeloader')({});
    app.use(router);

    server = app.listen(3333, function() {
        console.log('listening...');
    });
}

exports.run = run;





