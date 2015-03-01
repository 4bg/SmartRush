models = require('../model');
User = models.User;

function getById(id) {
    // return 'getting user for id: ' + id;
    User.find(function(err, doc) {
        return doc;
    })
}

function getAll(response) {
    // return 'getting all..'；
    User.find(function(err, doc) {
        response.json(doc);
    })
}

module.exports.getById = getById;
module.exports.getAll = getAll;