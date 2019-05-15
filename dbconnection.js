// var mysql = require('mysql');
// var connection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//   database: 'nodesql'
// });
// module.exports = connection;

var mysql = require('mysql');
var connection = mysql.createPool({
    host: '35.197.180.104',
    user: 'rem138c7',
    password: 'nodesql@2019',
  database: 'nodesql'
});
module.exports = connection;