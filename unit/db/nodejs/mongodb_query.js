// Please install npm package mongoose first
const config = require('../config');
const mongoose = require('mongoose');

const url = `mongodb://${config.mongo.user}:${config.mongo.password}@${config.mongo.host}:${config.mongo.port}/${config.mongo.dbname}`;

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

var cid = [];
studentModel.findOne({name: 'BBB'}).exec((err, sresult) => {
	if (err) console.log('Student query failed');
	else {
    sid = sresult.id;

    scModel.find({sid: sid}).exec((err, scresults) => {
      if (err) console.log('Student_course query failed');
      else {
        for (sc of scresults)
          cid.push(sc.cid);

        courseModel.find({id: { $in: cid }}).exec((err, cresults) => {
          if (err) console.log('Course query failed');
          else {
            res = sresult.name + " have cources ";
            for (i in cresults) {
              if (i != cresults.length - 1)
                res += cresults[i].name + ", ";
              else
              res += cresults[i].name
            }
            console.log(res);
            conn.close();
          }
        });
      }
    })
	}
});