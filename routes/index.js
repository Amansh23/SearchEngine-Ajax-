var express = require('express');
var router = express.Router();
const usermodel = require("./users")

router.get('/', function(req, res) {
  res.render('index');
});

router.get("/:username", function(req,res){
  usermodel.create({
    name: req.params.username
  }).then(function(data){
    res.redirect('/')

  })
})
router.get('/getuser/:user',function (req,res) {
  let regex = new RegExp(`^${req.params.user}`)
  console.log(regex)
  usermodel.find({name:{$regex:regex}}).then(function (userdata) {
    res.json(userdata)
  })
})
module.exports = router;
