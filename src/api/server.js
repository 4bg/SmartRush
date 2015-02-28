express = require('express');

var run = function() {
    console.log('starting...')
    app = express();

    app.route('/users').get(function(request, response) {
        user = require('./modules/user');
        response.send(user.getAll());
    })

    server = app.listen(3333, function() {
        console.log('listening...');
    });
}

exports.run = run;





