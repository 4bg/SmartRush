express = require('express');
mongoose = require('mongoose');

var run = function() {
    console.log('starting...')
    mongoose.connect('localhost:27017/test');
    app = express();

    app.use('/static', express.static(__dirname + '/public'));

    app.route('/users').get(function(request, response) {
        user = require('./modules/user');
        user.getAll(response);
    })

    server = app.listen(3333, function() {
        console.log('listening...');
    });
}

exports.run = run;





