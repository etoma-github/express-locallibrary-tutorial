var express = require('express');
var router = express.Router();

// Initial route from the example
/* GET home page. */
/*  router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    }); 
*/

// New route using the catalog
/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('/catalog');
});

module.exports = router;