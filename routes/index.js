var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render( 'index' );
});

router.get('/mission', function(req, res) {
  res.render( 'mission' );
});

router.get('/culture', function(req, res) {
  res.render( 'culture' );
});



module.exports = router;
