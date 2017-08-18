var express = require('express');
var router = express.Router();
var request=require('request');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
router.get('/login', function(req, res, next) {
    var account=req.query.account;
    var password=req.query.password;
    console.log(password+'password');

    request.get('http://127.0.0.1/imodel/php/Users/login?account='+account+"&password="+password,function(error,response,body){
      if(!error && response.statusCode==200) {
          console.log(body);
           res.json(body);
      }
    });
});
// router.get('/login', function(req, res, next) {
//     var account=req.query.account;
//     var password=req.query.password;
//     console.log(password+'password');
//     request.post({url:'http://localhost/imodel/php/users/login',form:{account:account,password:password}},function(error,response,body){
//         if(!error&&response.statusCode==200) {
//             console.log(body+"000000000000000000000000000");
//             // res.json(body);
//             console.log(11111333333);
//         }else{
//             console.log(2222222222222);
//         }
//     });
// });