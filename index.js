var router = require('koa-router')();
var serve = require('koa-static-folder');
var koa = require('koa');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var fs = require('fs');
var app = koa();

var head = require('./views/partials/head').head();
var board = require('./views/pages/board').title();

var referee = require('./views/pages/referee').ref();

var document = React.createElement('html',{key: 'html'}, [head, board])
var scoreboard = function *(next){
    this.body = ReactDOMServer.renderToString(document)   
}

var judge = React.createElement('html',{key: 'html'}, [head, referee])
var refereepage = function *(){
	this.body = ReactDOMServer.renderToString(judge)   
}

var s = function *(){
	this.body = 'admin';
}
app.use(serve('./public'));

router.get('/', s);
router.get('/referee', refereepage);
router.get('/scoreboard', scoreboard);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);