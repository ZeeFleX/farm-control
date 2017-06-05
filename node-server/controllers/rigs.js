var express = require('express');
var router = express.Router();
var nodeSocket = require('../node-socket');

/* RIGS CONTROLLER */
router.get('/', function(req, res, next) {
    console.log('Get all rigs');
    nodeSocket.io.emit('test', 'Hello!');
    res.render('index', { title: 'Express' });
});

router.get('/:id', function(req, res, next) {
    console.log('Get the rig');
    res.render('index', { title: 'Express' });
});

module.exports = router;