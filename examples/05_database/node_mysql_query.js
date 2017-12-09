// Please install npm package mysql first
const config = require('./config');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: config.mysql.host,
	user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.dbname
});

connection.connect((err) => { if (err) console.log('MySQL connection failed', err) });

connection.query("SELECT id, name FROM `student` WHERE name LIKE 'Chang'", (err, rows, fields) => {
	if (err) console.log('MySQL query failed', err);
	else console.log('Results', rows[0]);
});
