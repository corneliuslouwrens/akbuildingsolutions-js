'use strict';

var app = module.parent.exports.app;

// controllers
var webController   = require('./controllers/web');
var emailController = require('./controllers/email');

// web requests
app.get('/', webController.index);

// email requests
app.post('/contact', emailController.contact);
