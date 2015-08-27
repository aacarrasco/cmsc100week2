var mysql = require('mysql');

module.exports = mysql.createConnection({ //connect mysql to localhost
	host: 'localhost',
	user: 'cmsc100ef4l',
	password: 'cmsc100ef4l',
	database: 'cmsc100ef4l'
});	

