// Please install npm package mysql first
const config = require('../config');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: config.mysql.host,
	user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.dbname
});

const studentData = [
  {"id":1, "name":"AAA"},
  {"id":2, "name":"BBB"},
  {"id":3, "name":"CCC"},
  {"id":4, "name":"DDD"},
  {"id":5, "name":"EEE"}
];

const courseData = [
  {"id":1, "name":"Web Programming"},
  {"id":2, "name":"Machine Learning"}
];

const scData = [
  {"sid":1, "cid":1},
  {"sid":2, "cid":1},
  {"sid":2, "cid":2},
  {"sid":3, "cid":2},
  {"sid":4, "cid":2},
  {"sid":5, "cid":1}
];

connection.connect((err) => { if (err) console.log('MySQL connection failed', err) });

connection.query(`CREATE TABLE IF NOT EXISTS student (id VARCHAR(10), name VARCHAR(30));`);
connection.query(`CREATE TABLE IF NOT EXISTS course (id VARCHAR(10), name VARCHAR(30));`);
connection.query(`CREATE TABLE IF NOT EXISTS student_course (sid VARCHAR(10), cid VARCHAR(10));`);

for (student of studentData) {
  connection.query(`INSERT INTO student (id, name) VALUES ("${student.id}", "${student.name}")`, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
  });
}

for (course of courseData) {
  connection.query(`INSERT INTO course (id, name) VALUES ("${course.id}", "${course.name}")`, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
  });
}

for (sc of scData) {
  connection.query(`INSERT INTO student_course (sid, cid) VALUES ("${sc.sid}", "${sc.cid}")`, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
  });
}