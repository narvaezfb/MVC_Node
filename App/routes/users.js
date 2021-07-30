var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios('https://reqres.in/api/users').then(response =>{
    res.render('users', { data: response.data.data });
  });
});

module.exports = router;
