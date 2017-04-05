var express = require('express');
var app = express();
var _= require('underscore');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'))
app.set('view engine', 'ejs');

var articles = [{
		id:1,
		name:"kotiki",
		body:'kotiki murkotiki'
	},{
		id:2,
		name:"kot",
		body:'kot murkot'
	}];


app.post('/', function(req,res){
	var heading = req.body.heading;
	var text = req.body.text;
	if (heading.length < 1 && text.length < 1) {
		res.status(406);
		res.send('All field must be filled');
	}
	if (heading.length < 1) {
		res.status(406);
		res.send('The field "Heading" must be filled');
	}
	if (text.length < 1) {
		res.status(406);
		res.send('The field "Your text" must be filled');
	}
	var obj = {};
	var bigestId = _.max(articles, function(elm,index){
		return elm.id;
	});
	obj.id = bigestId.id;
	obj.id++;
	obj.name = heading;
	obj.body = text;
	articles.push(obj);
	console.log(articles)
	res.end();
});


app.get('/', function(req, res){
	res.render('index.ejs', {
		arr:articles
	});
});

app.listen(3000, function(){
	console.log('example app listening on port 3000');
});