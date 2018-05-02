#!/usr/bin/env node
const config = require('./config');
const mongoose = require('mongoose');

const url = `mongodb://${config.mongodb.user}:${config.mongodb.passwd}@${config.mongodb.host}/${config.mongodb.dbname}`

const conn = mongoose.connect(url, { useMongoClient: true }, (err, res) => {
	if (err) console.log('MongoDB connected failed', err);
	else console.log('MongoDB connected success');
});
mongoose.Promise = global.Promise;

// student
const studentCollectionName = 'student';
const studentSchema = new mongoose.Schema({
  id: String,
  name: String
}, { collection: studentCollectionName });
const studentModel = conn.model(studentCollectionName, studentSchema);

// course
const courseCollectionName = 'course';
const courseSchema = new mongoose.Schema({
  id: String,
  name: String,
  students: [String]
}, { collection: courseCollectionName });
const courseModel = conn.model(courseCollectionName, courseSchema);

const studentData = [
  {"id":"F12345678", "name":"Student A"},
  {"id":"P12345679", "name":"Student B"}
];

const courseData = [
  {"id":"B0001", "name":"Web Programming", "students": ["F12345678", "P12345679"]},
  {"id":"M0001", "name":"Machine Learning", "students": ["P12345679"]}
];

const saveAll = (data, model) => {
  for (d of data) {
    const m = new model(d);
    m.save((err) => {
      if (err) {
        console.log('Data insert failed');
        conn.close();
        process.exit();
      }
    });
  }
};

saveAll(studentData, studentModel);

saveAll(courseData, courseModel);

setTimeout(() => {
  conn.close();
  process.exit();
}, 2000);
