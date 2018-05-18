#!/usr/bin/env node

const config = require('./config')
const mongoose = require('mongoose')

const url = `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}/${config.mongodb.database}`

const conn = mongoose.connect(url, { useMongoClient: true }, (err, res) => {
  if (err) console.log('fail to connect:', err)
});
mongoose.Promise = global.Promise

// student schema
const studentCollectionName = 'student'
const studentSchema = new mongoose.Schema({
  id: String,
  name: String
}, { collection: studentCollectionName });
const studentModel = conn.model(studentCollectionName, studentSchema);

// course schema
const courseCollectionName = 'course'
const courseSchema = new mongoose.Schema({
  name: String,
  id: String,
  students: [String]
}, { collection: courseCollectionName })
const courseModel = conn.model(courseCollectionName, courseSchema)

// student data
const studentData = [
  { 'name': 'Student A', 'id': 'F12345678' },
  { 'name': 'Student B', 'id': 'P12345679' },
]

// course data
const courseData = [
  { 'name':'Web Programming',  'id': 'B0001', 'students': ['F12345678', 'P12345679'] },
  { 'name':'Machine Learning', 'id': 'M0001', 'students': ['P12345679'] },
]

// insert
const saveAll = (data, model) => {
  for (d of data) {
    const m = new model(d)
    m.save((err) => {
      if (err) {
        console.log('fail to insert:', err)
        conn.close()
        process.exit()
      }
    })
  }
}
saveAll(studentData, studentModel)
saveAll(courseData, courseModel)

// query
courseModel.findOne({ id: 'B0001'} ).exec((err, res) => {
  if (err) console.log('fail to query:', err)
  else {
    console.log(res.name + ' have students ' + res.students)
    conn.close()
  }
})

// vi:et:sw=2:ts=2
