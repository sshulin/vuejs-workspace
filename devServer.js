var webpack = require('webpack');
var path = require('path');
var express = require('express');
var config = require('./webpack.config.dev');

var devMiddleware = require('webpack-dev-middleware');

var app = express();
var compiler = webpack(config);

app.use(devMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('*', function(req, res) {
	console.log(path.join(__dirname, 'index.html'));
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, 'localhost', function(err) {
	if(err) {
		console.log(err);
		return;
	}

	console.log('Listening at http://localhost:8080')
})