'use strict';

require('newrelic');

// env + port configuration
var env  = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3003;

// modules
var express         = require('express'),
    exphbs          = require('express3-handlebars'),
    compress        = require('compression'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    logger          = require('./logger'),
    app             = express();

// port / handlebars engine
app.set('port', port);
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

// middleware
app.use(compress());
app.use(bodyParser());
app.use(methodOverride());
app.use(require('winston-request-logger').create(logger));

// define static path
logger.info('Server will run in: ' + env + ' mode');
if ('development' === env) {
  app.use(express.static(__dirname + '/public'));
} else {
  app.use(express.static(__dirname + '/build'));
}

// make her listen
app.listen(port);
logger.info('AK Building Solutions up and running on port:' + port);

module.exports.app = app;
require('./routes');
