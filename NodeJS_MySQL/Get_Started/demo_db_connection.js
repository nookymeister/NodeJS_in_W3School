var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "yourusername",
	password: "yourpassword"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	// con.query(sql, function (err, result) {
	// 	if (err) throw err;
	// 	console.log("Result: " + result);
	// });
});

//If Error Error: ER_NOT_SUPPORTED_AUTH_MODE: 
//Client does not support authentication protocol requested by server; 
//consider upgrading MySQL client

//use this query
//ALTER USER 'youruser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword'