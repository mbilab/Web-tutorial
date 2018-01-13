// Please install npm package mongoose first
const config = require('../config');
const mongoose = require('mongoose');

const url = `mongodb://${config.mongo.user}:${config.mongo.password}@${config.mongo.host}/${config.mongo.dbname}`

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
  name: String
}, { collection: courseCollectionName });
const courseModel = conn.model(courseCollectionName, courseSchema);

// student-course
const scCollectionName = 'student_course';
const scSchema = new mongoose.Schema({
  sid: String,
  cid: String
}, { collection: scCollectionName });
const scModel = conn.model(scCollectionName, scSchema);

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

saveAll(scData, scModel);