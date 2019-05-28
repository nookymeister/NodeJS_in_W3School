var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "yourusername",
	password: "yourpassword",
	database: "mydb"
});

con.connect(function(err){
	if(err) throw err;
	console.log("connected!");
	//Create TABLE
	// var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
	
	//ALTER TABLE
	// var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
	
	//1 Query Create
	var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
	
	con.query(sql,function(err,result){
		if(err) {throw err;}
		console.log("Table created");
	})
});