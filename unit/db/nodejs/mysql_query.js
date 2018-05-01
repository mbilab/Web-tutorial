// Please install npm package mysql first
const config = require('../config');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: config.mysql.host,
	user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.dbname
});

connection.connect((err) => { if (err) console.log('MySQL connection failed', err) });

connection.query("SELECT student.id, student.name FROM student " +
	"JOIN student_course ON student_course.sid = student.id " +
	"JOIN course ON course.id = student_course.cid " +
	"WHERE course.name LIKE 'Web Programming'", (err, rows, fields) => {
	if (err) console.log('MySQL query failed', err);
	else console.log('Results', rows[0]);
});
