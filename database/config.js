var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '172.16.224.3',
  port     : '3306',
  user     : 'root',
  password : 'demogcp',
  database : 'jsp_eCommerce'
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