var express = require('express');
var router = express.Router();
//var session = require('express-session');
var request = require('request');

/* GET home page. */
router.get('/mo_reg', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/insert_user', function(req, res, next) {
    var email=req.query.email;
    var pass=req.query.pass;
    var username = req.query.username;
    var catlog = req.query.catlog;
    request.get('http://127.0.0.1/iModel/php/Users/insert_user?email='+email+'&pass='+pass+'&username='+username+'&catlog='+catlog, function (error, response, body) {
        if (!error && response.statusCode == 200) {
                console.log(body);
            res.json(body);
        }else{
            console.log(body);
        }
    });

});
// search_photo
router.get('/search_photo',function(req,res,next){
    request.get('http://127.0.0.1/imodel/php/Users/search_photo',function(error,response,body){
        if(!error && response.statusCode == 200){
            res.json(body);
        }else{
            console.log(123);
        }

    })
});

module.exports = router;
