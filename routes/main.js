var express = require('express');
var router = express.Router();
var moment = require('moment');
var config = require('../config/config');
// import {CONFIG} from './config/config.js';

/* GET time listing. */
router.get('/', function (req, res, next) {
    var timestamps = moment()
    var arr = new Array();
    var jsonObj = {
        "Environment Variables: " : process.env.PXE_ENV_VARIABLE || 'ENV-0.0.1',
        "config file Variables: " : config.app_secret || 'APP-Secret-0.0.1'
    }
    // arr.push(process.env.PXE_ENV_VARIABLE);
    res.json(jsonObj);
});

module.exports = router;
