//var db = require('../database');
//var pgClient = db.pgClient;

exports.index = function(req, res) {
    res.render('index', {
        title: 'Documentizr2'
    });
};

exports.document = function(req, res) {
    res.send([
        {
            name: 'win',
            field1: 'test'
        },
        {
            name: 'win2',
            field1: 'test2'
        }
    ]);
};
