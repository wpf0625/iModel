var express = require('express');
var router = express.Router();
//var session = require('express-session');
var request = require('request');

/* GET home page. */
router.get('/mo_reg', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
    var account=req.query.account;
    var password=req.query.password;
    console.log(password+'password');

    request.get('http://127.0.0.1/iModel/php/Users/login?account='+account+"&password="+password,function(error,response,body){
        if(!error && response.statusCode==200) {
            console.log(body);
            res.json(body);
        }
    });
});

router.get('/insert_user', function(req, res, next) {
    var email=req.query.email;
    var pass=req.query.pass;
    var username = req.query.username;
    var catlog = req.query.catlog;
    request.get('http://127.0.0.1/imodel/php/Users/insert_user?email='+email+'&pass='+pass+'&username='+username+'&catlog='+catlog, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }else{
            console.log(body);
        }
    });

});

//推荐
router.get('/recommend_mod',function(req,res,next){
    request.get('http://127.0.0.1/iModel/php/users/recommend_mod',function(error,response,body){
        if(!error && response.statusCode == 200){
            console.log(111);
            res.json(body);
        }else{
            console.log(000000);
        }
    })
});
//自荐
router.get('/self_commend',function (req,res,next) {
    request.get('http://127.0.0.1/iModel/php/users/self_commend',function (error,response,body) {
        if(!error && response.statusCode == 200){
            res.json(body);
        }else{
            console.log(000000);
        }
    })
});






// search_photo
router.get('/search_photo',function(req,res,next){
    request.get('http://127.0.0.1/iModel/php/Users/search_photo',function(error,response,body){
        if(!error && response.statusCode == 200){
            res.json(body);
        }else{
            console.log(123);
        }

    })
});



//
router.get('/search_bao',function(req,res,next){
    request.get('http://127.0.0.1/iModel/php/Users/search_bao',function(error,response,body){
        if(!error && response.statusCode == 200){
            res.json(body);
        }else{
            console.log(123);
        }

    })
});


router.get('/insert_publish',function(req,res,next){
    var content=req.query.content;
    console.log(content);
    request.post({url:'http://127.0.0.1/iModel/php/Users/insert_publish',form:{content:content}},function(error,response,body){
        if(!error && response.statusCode == 200){
            res.json(body);
            console.log(body+111111);
        }else{
            console.log(false);
        }
    })
})


module.exports = router;
