'use strict';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index');
    });

    app.get('/generic', function(req, res) {
        res.render('pages/generic');
    });

    app.get('/element', function(req, res) {
        res.render('pages/element');
    });

    
    
};