var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');
var appRoutes = require('./routes/app');

var app = express();
var compressor = require('node-minify');
var promise= compressor.minify({
  compressor: 'clean-css',
  input: './public/stylesheets/style.css',
  output: './public/stylesheets/style.min.css',
  options: {
    advanced: true, // set to false to disable advanced optimizations - selector & property merging, reduction, etc.
    aggressiveMerging: true // set to false to disable aggressive merging of properties.
  }
});
var promise2= compressor.minify({
  compressor: 'clean-css',
  input: './public/open-iconic/font/css/open-iconic-bootstrap.css',
  output: './public/open-iconic/font/css/open-iconic-bootstrap.min.css',
  options: {
    advanced: true, // set to false to disable advanced optimizations - selector & property merging, reduction, etc.
    aggressiveMerging: true // set to false to disable aggressive merging of properties.
  }
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/', appRoutes);


app.use(compression()); //use compression 
app.use(express.static(path.join(__dirname, 'public')));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;
