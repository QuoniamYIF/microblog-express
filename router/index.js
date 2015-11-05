var express = require('express'),
	routerAction = require('../router_action'),
	router = express.Router();

// router.get('/', routerAction.index);
router.get('/', function(req, res){
	res.render('index');
});

router
	.route('/login')
	.post()
	.get(function(req, res){
		res.render('login');
	});

router
	.route('/reg')
	.post()
	.get(function(req, res){
		res.render('reg');
	});

router.post('/post', routerAction.post);

module.exports = exports = router;