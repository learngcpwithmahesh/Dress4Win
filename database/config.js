var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '172.16.224.3',
  port     : '3306',
  user     : 'root',
  password : 'P@ssw0rd2020',
  database : 'eCommerce'
});

connection.connect(function(err) {
    if (err){
      console.log(err);
      //throw err;
    } else {
      console.log('DB connected :)');
    }
});

module.exports = connection;